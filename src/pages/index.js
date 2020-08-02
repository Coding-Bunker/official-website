import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"

const IndexPage = () => (
  <TextAndPhoto title="Coding Bunker" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas." img={require("../images/Image_1.png")} />
)

export default IndexPage
