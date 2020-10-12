import React from "react"

import Chisiamo from "../components/Chisiamo/Chisiamo";
import LoStaff from "../components/LoStaff/LoStaff";
import ContributorCard from "../components/ContributorCard/ContributorCard";
import Navbar from "../components/Navbar";
import LaCommunity from "../components/LaCommunity/LaCommunity";
import {graphql, useStaticQuery} from "gatsby";
import ContributorCardGrid from "../components/ContributorCardGrid/ContributorCard-Grid";
import Footer from "../components/Footer";






const ChiSiamoPage = () => (


    <div>
        <Navbar />
        <Chisiamo title={"Chi siamo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet. Donec eu dolor sodales, posuere ipsum ut, facilisis neque. Ut at ligula efficitur, sodales mauris ut, suscipit odio. Proin non nisi a nisi varius sollicitudin ac sit amet erat. Curabitur et venenatis turpis, vitae hendrerit dolor. Proin vel velit ut turpis vulputate tincidunt quis ac ipsum."} />
        <LoStaff title={"Lo staff"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."}/>
        <LaCommunity title={"La community"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur."} members={"Al momento siamo in "} num_members={9} text_button={"Entra ora"} />
        <ContributorCardGrid text_button="Vedi altri" />
        <Footer />
    </div>
)

export default ChiSiamoPage
