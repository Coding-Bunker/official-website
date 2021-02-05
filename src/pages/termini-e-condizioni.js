import React from 'react'
import Layout from '../components/layout'
import TerminiCondizioniSection from '../components/TerminiCondizioni/TerminiCondizioni.tsx'

const TerminiECondizioni = () => {
	const TCSection = []
	const IndexSection = []
	for (let i = 0; i < 4; i += 1) {
		TCSection.push({
			dataTitle: 'Dove conserviamo i dati personali?',
			dataDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur.\n Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer \n volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. \n Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer \n volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas. ',
		})
	}
	for (let k = 0; k < 22; k += 1) {
		IndexSection.push({
			titoloIndice: 'Indice',
			linkIndice: 'Dove conserviamo i dati personali?',
		})
	}
	return (
		<Layout>
			<TerminiCondizioniSection
				title="Termini e condizioni"
				description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas."
				description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas."
				indexTitle="Indice"
				sections={TCSection}
				indexes={IndexSection}
			/>
		</Layout>
	)
}

export default TerminiECondizioni
