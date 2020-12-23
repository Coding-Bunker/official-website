import React from 'react'
import Chisiamo from '../components/Chisiamo/Chisiamo.tsx'
import LoStaff from '../components/LoStaff/LoStaff.tsx'
import Navbar from '../components/Navbar'
import LaCommunity from '../components/LaCommunity/LaCommunity.tsx'
import ContributorCardGrid from '../components/ContributorCardGrid/ContributorCard-Grid.tsx'
import Footer from '../components/Footer'
import 'leaflet'
import CoseCB from '../components/CoseCB/CoseCB.tsx'

const ChiSiamoPage = () => (
	<div>
		<Navbar />
		<Chisiamo
			title="Chi siamo"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."
		/>
		<CoseCB
			title={"Cos'è Coding Bunker"}
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."
		/>
		<LoStaff
			title="Lo staff"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur. Duis semper arcu in mauris maximus, sed pretium lacus aliquet."
		/>
		<LaCommunity
			title="La community"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum cursus. Sed bibendum imperdiet sollicitudin. Nam vitae justo vitae leo egestas viverra. Curabitur viverra pharetra rhoncus. Aliquam commodo vel ipsum pellentesque efficitur."
			members="Al momento siamo in "
			num_members={9}
			text_button="Entra ora"
		/>
		<ContributorCardGrid text_button="Vedi altri" />
		<Footer />
	</div>
)

export default ChiSiamoPage
