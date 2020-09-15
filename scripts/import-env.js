require('dotenv').config()

const { SiteClient } = require('datocms-client')
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const ora = require('ora')

const migrationFolder = path.join(__dirname, '..', 'migrations')
const schemaFile = path.join(migrationFolder, './schema.json')
const newEnvName = argv.envName || 'from-migration'

async function importSchema() {
	if (!fs.existsSync(schemaFile))
		return console.error('The schema file does not exist at path:', schemaFile)

	let client = new SiteClient(process.env.DATO_CMS_API_KEY)

	// The main env
	const forkSpinner = ora(`Forking the main env`).start()
	try {
		const envs = await client.environments.all()
		const primaryEnv = envs.find(env => env.meta.primary)
		const newEnvExists = envs.find(env => env.id === newEnvName)

		if (newEnvExists) {
			await client.environments.destroy(newEnvExists.id)
		}

		await client.environments.fork(primaryEnv.id, {
			id: newEnvName,
		})

		forkSpinner.succeed()
	} catch (e) {
		forkSpinner.fail()
		console.error(e)
		process.exit(1)
	}

	client = new SiteClient(process.env.DATO_CMS_API_KEY, {
		enviorment: newEnvName,
	})

	let readedSchema

	const readingspinner = ora(`Reading the schema from JSON`).start()

	try {
		const rawSchema = fs.readFileSync(schemaFile).toString('utf-8')
		readedSchema = JSON.parse(rawSchema)

		if (!Array.isArray(readedSchema)) {
			readingspinner.fail()
			console.error('The JSON must be an array')
			process.exit(1)
		}

		readingspinner.succeed()
	} catch (e) {
		readingspinner.fail()
		console.error(e.message)
	}

	if (argv.clear) {
		const clearingEnvSpinner = ora(`Clearing forked env`).start()
		try {
			const itemTypes = await client.itemTypes.all()

			await Promise.all(
				itemTypes.map(async itemType => {
					const fields = await client.fields.all(itemType.id)
					await Promise.all(fields.map(field => client.fields.destroy(field.id)))
				}),
			)

			await Promise.all(itemTypes.map(itemType => client.itemTypes.destroy(itemType.id)))

			clearingEnvSpinner.succeed()
		} catch (e) {
			clearingEnvSpinner.fail()
			console.error(e.message)
			process.exit(1)
		}
	}

	const insertingSchemaSpinner = ora(`Creating models and fields`).start()
	const createdModels = new Map()

	try {
		await Promise.all(
			readedSchema.map(async model => {
				delete model.itemType.id
				delete model.itemType.fields
				delete model.itemType.singletonItem
				delete model.itemType.titleField

				const newModel = await client.itemType.create(model.itemType)
				createdModels.set(model.itemType.apiKey, newModel)

				if (!Array.isArray(model.fields)) {
					readingspinner.fail()
					console.error('Every model must have an array field')
					process.exit(1)
				}
			}),
		)
		await Promise.all(
			readedSchema.map(model =>
				Promise.all(
					model.fields.map(async field => {
						delete field.id
						delete field.itemType

						if (field.validators) {
							if (field.validators.itemItemType) {
								field.validators.itemItemType.itemTypes = field.validators.itemItemType.itemTypes.map(
									key => createdModels.get(key).id,
								)
							}
							if (field.validators.richTextBlocks) {
								field.validators.richTextBlocks.itemTypes = field.validators.richTextBlocks.itemTypes.map(
									key => createdModels.get(key).id,
								)
							}
							if (field.validators.itemsItemType) {
								field.validators.itemsItemType.itemTypes = field.validators.itemsItemType.itemTypes.map(
									key => createdModels.get(key).id,
								)
							}
						}
						try {
							await client.fields.create(model.itemType.apiKey, field)
						} catch (e) {
							console.log(field, field.validators, e)
							process.exit(1)
						}
					}),
				),
			),
		)

		insertingSchemaSpinner.succeed()
	} catch (e) {
		insertingSchemaSpinner.fail()
		console.error(e)
		process.exit(1)
	}
}

importSchema()
