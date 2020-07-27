import React from "react"
import StaffCard from "../components/StaffCard/StaffCard"

const IndexPage = () => (
  <StaffCard profilePic={require("../images/me.jpg")} name="Federico Gerardi" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur." />
)

export default IndexPage
