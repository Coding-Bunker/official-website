import React from 'react'
import EntraOraDiscord from '../components/EntraOraDiscord'
import Layout from '../components/layout'
import WhyEnter from '../components/WhyEnter-EntraOraPage/WhyEnter.tsx'
import WhyEnterImage from '../images/WhyEnterOminide.png' // DA RIMUOVERE POI CON L'INTEGRAZIONE CON IL BACKEND
import logo from '../images/awesome-discord.png'
import Annunci from '../components/Annunci'

const EntraOraPage = () => {
	return (
		<Layout>
			<EntraOraDiscord logo={logo} />
			<WhyEnter title="Perché entrare" img={WhyEnterImage} />
			<Annunci />
		</Layout>
	)
}

export default EntraOraPage
