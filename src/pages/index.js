import React from 'react'
import Navbar from "../components/Navbar/index"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"
import CoseCB from "../components/CoseCB/CoseCB"
import Blog from "../components/Blog/Blog"
import AlcuniNumeri from "../components/Alcuni Numeri/AlcuniNumeri"
import DiconoDiNoi from '../components/Dicono Di Noi/DiconoDiNoi'
import EntraOraHome from "../components/EntraOraHome/EntraOraHome"
import Progetti from "../components/Progetti/Progetti"
import Testimonianze from "../components/Testimonianze/Testimonianze"
import Aziende from "../components/Aziende/Aziende"
import Footer from "../components/Footer/index"
import ContributorCard from "../components/ContributorCard/ContributorCard"

const IndexPage = () => (
	<>	
		<Navbar />
		<TextAndPhoto linkText="Leggi altro" title="Coding Bunker" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas." img={require("../images/Image_1.png")} />
		<CoseCB />
		{/* Eventi Coding Bunker */}
		{/* Eventi Passati */}
		<Blog />
		<AlcuniNumeri />
		<DiconoDiNoi />
		<EntraOraHome />
		<Progetti />
		<Testimonianze />
		<Aziende />
		<Footer />
	</>
)

export default IndexPage