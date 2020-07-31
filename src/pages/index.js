import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextAndPhoto from "../components/TextAndPhoto/TextAndPhoto"

const IndexPage = () => (
  <TextAndPhoto img={require("../images/Image_1.png")} />
)

export default IndexPage
