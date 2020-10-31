import React from 'react'

import Layout from '../components/layout'

import TextAndPhoto from '../components/TextAndPhoto/TextAndPhoto'
import CoseCB from '../components/CoseCB/CoseCB'
import Scrollable from '../components/Scrollable/Scrollable'
import PastScrollable from '../components/PastScrollable/PastScrollable'
import Blog from '../components/Blog/Blog'
import AlcuniNumeri from '../components/Alcuni Numeri/AlcuniNumeri'
import DiconoDiNoi from '../components/Dicono Di Noi/DiconoDiNoi'
import EntraOraHome from '../components/EntraOraHome/EntraOraHome'
import Progetti from '../components/Progetti/Progetti'
import Testimonianze from '../components/Testimonianze/Testimonianze'
import Aziende from '../components/Aziende/Aziende'

const IndexPage = () => (
	<Layout>
		<TextAndPhoto
			linkText="Leggi altro"
			title="Coding Bunker"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas."
			img={require('../images/Image_1.png')}
		/>
		<CoseCB />
		<Scrollable />
		<PastScrollable />
		<Blog />
		<AlcuniNumeri />
		<DiconoDiNoi />
		<EntraOraHome />
		<Progetti />
		<Testimonianze />
		<Aziende />
	</Layout>
)

export default IndexPage
