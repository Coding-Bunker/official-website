require('dotenv').config()

const { SiteClient } = require('datocms-client')
const fs = require('fs')
const path = require('path')
const ora = require('ora')

const client = new SiteClient(process.env.DATO_CMS_API_KEY)
const migrationFolder = path.join(__dirname, '..', 'migrations')
const schemaFile = path.join(migrationFolder, './schema.json')

async function exportSchema() {
	const schema = []

	const readSpinner = ora(`Reading CMS structure`).start()

	try {
		const types = await client.itemTypes.all()
		await Promise.all(
			types.map(async type => {
				const model = {
					itemType: type,
					fields: [],
				}

				const fields = await client.fields.all(type.apiKey)
				model.fields = fields.map(field => {
					if (field.validators) {
						if (field.validators.itemItemType) {
							const apiKeys = fields
								.filter(fieldToFilter =>
									field.validators.itemItemType.itemTypes.includes(fieldToFilter.id),
								)
								.map(fieldToMap => fieldToMap.apiKey)
							field.validators.itemItemType.itemTypes = apiKeys
						}

						if (field.validators.itemsItemType) {
							const apiKeys = fields
								.filter(fieldToFilter =>
									field.validators.itemsItemType.itemTypes.includes(fieldToFilter.id),
								)
								.map(fieldToMap => fieldToMap.apiKey)
							field.validators.itemsItemType.itemTypes = apiKeys
						}

						if (field.validators.richTextBlocks) {
							const apiKeys = fields
								.filter(fieldToFilter =>
									field.validators.richTextBlocks.itemTypes.includes(fieldToFilter.id),
								)
								.map(fieldToMap => fieldToMap.apiKey)
							field.validators.richTextBlocks.itemTypes = apiKeys
						}
					}

					return field
				})

				schema.push(model)
			}),
		)

		readSpinner.succeed()
	} catch (e) {
		readSpinner.fail()
		console.error(e.message)
	}

	const writeFileSpinner = ora('Writing schema on file').start()

	try {
		if (!fs.existsSync(migrationFolder)) fs.mkdirSync(migrationFolder)
		fs.writeFileSync(schemaFile, JSON.stringify(schema, 0, 2))

		writeFileSpinner.succeed()
	} catch (e) {
		writeFileSpinner.fail()
		console.error(e.message)
	}
}

exportSchema()
