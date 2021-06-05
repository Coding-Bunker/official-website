import React from 'react'
import Layout from '../components/layout'
import Contributors from '../components/Contributors'
import HallOfFameSection from '../components/HallOfFameSection-HallOfFame'
import foto1 from '../images/homepage_bg.png'

const HallOfFame = () => {
	return (
		<Layout>
			<HallOfFameSection
				img={foto1}
				title="Hall Of Fame"
				description={
					"Coding Bunker è fatta di utenti digitali, ma dietro cui ci sono delle persone in carne ed ossa.&lt;br&gt;Persone con delle passioni, delle ambizioni, dei valori e degli ideali che portano con sé quando comunicano all'interno della community.&lt;br&gt;In questa pagina vi illustriamo il cuore della community: le persone e ciò che sono state in grado di realizzare."
				}
				contributors={18}
				progetti={4}
				utenti={931}
			/>
			<Contributors />
		</Layout>
	)
}

export default HallOfFame
