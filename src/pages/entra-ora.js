import React from 'react'
import Layout from '../components/layout'
import WhyEnter from '../components/WhyEnter-EntraOraPage/WhyEnter.tsx'
import WhyEnterImage from '../images/WhyEnterOminide.png' // DA RIMUOVERE POI CON L'INTEGRAZIONE CON IL BACKEND

const EntraOraPage = () => {
	return (
		<Layout>
			<WhyEnter
				title="Perché entrare"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cum dolorum error hic id inventore, iusto laborum maxime mollitia non officiis provident, quaerat quasi qui, quos sed sequi suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cum dolorum error hic id inventore."
				img={WhyEnterImage}
			/>
		</Layout>
	)
}

export default EntraOraPage
