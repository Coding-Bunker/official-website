import React from "react"

import Chisiamo from "../components/Chisiamo/Chisiamo";
import LoStaff from "../components/LoStaff/LoStaff";
<<<<<<< Updated upstream
import ContributorCard from "../components/ContributorCard/ContributorCard";
=======
>>>>>>> Stashed changes
import Navbar from "../components/Navbar";
import LaCommunity from "../components/LaCommunity/LaCommunity";
import {graphql, useStaticQuery} from "gatsby";
import ContributorCardGrid from "../components/ContributorCardGrid/ContributorCard-Grid";
import Footer from "../components/Footer";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream




=======
import "leaflet"
>>>>>>> Stashed changes
=======

import "leaflet"
import CoseCB from "../components/CoseCB/CoseCB";
>>>>>>> Stashed changes


const ChiSiamoPage = () => (

<<<<<<< Updated upstream
<<<<<<< Updated upstream

    <div>
        <Navbar />
        <Chisiamo title={"Chi siamo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet. Donec eu dolor sodales, posuere ipsum ut, facilisis neque. Ut at ligula efficitur, sodales mauris ut, suscipit odio. Proin non nisi a nisi varius sollicitudin ac sit amet erat. Curabitur et venenatis turpis, vitae hendrerit dolor. Proin vel velit ut turpis vulputate tincidunt quis ac ipsum."} />
=======
    <div>
        <Navbar />
        <Chisiamo title={"Chi siamo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."} />
>>>>>>> Stashed changes
=======
=======

=======
>>>>>>> Stashed changes
import "leaflet"
import CoseCB from "../components/CoseCB/CoseCB";



const ChiSiamoPage = () => (
<<<<<<< Updated upstream
>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes
    <div>
        <Navbar />
        <Chisiamo title={"Chi siamo"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."} />
        <CoseCB title={"Cos'è Coding Bunker"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."} />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        <LoStaff title={"Lo staff"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."}/>
        <LaCommunity title={"La community"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur."} members={"Al momento siamo in "} num_members={9} text_button={"Entra ora"} />
        <ContributorCardGrid text_button="Vedi altri" />
        <Footer />
    </div>
)

export default ChiSiamoPage
