import React from "react"

import EventCard from "../components/EventCard"

const IndexPage = () => (
  <div>
    <EventCard title="Lavorare nel mondo del Coding" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" date="25/09/20" img={require("../images/test.png")}/>
    {/* <EventCard title="Lavorare nel mondo del Coding" description="Lorem ipsum sit docet..." date="25/09/20" img={require("../images/hackathon.png")}/> */}
  </div>
)

export default IndexPage
