import React from 'react'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"

const IndexPage = () => (
  <TextAndPhoto linkText="Leggi altro" title="Coding Bunker" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas." img={require("../images/Image_1.png")} />

/*import DiconoDiNoi from '../components/Dicono Di Noi/DiconoDiNoi'
const IndexPage = () => (
	<div>
		<DiconoDiNoi />
	</div>*/
)

export default IndexPage