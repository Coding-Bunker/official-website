import React from "react"

import Chisiamo from "../components/Chisiamo/Chisiamo";
import LoStaff from "../components/LoStaff/LoStaff";
import ContributorCard from "../components/ContributorCard/ContributorCard";

const IndexPage = () => (
    <div>
        <Chisiamo />
        <LoStaff />
        <ContributorCard user="Admin" profilePic={require("../images/me.jpg")} name="Gieri" description="E' un salame che puzza"/>
    </div>
)

export default IndexPage
