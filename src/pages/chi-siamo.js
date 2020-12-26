import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Chisiamo from '../components/Chisiamo/Chisiamo.tsx'
import LoStaff from '../components/LoStaff/LoStaff.tsx'
import Layout from '../components/layout'
import LaCommunity from '../components/LaCommunity/LaCommunity.tsx'
import ContributorCardGrid from '../components/ContributorCardGrid/ContributorCard-Grid.tsx'
import 'leaflet'
import CoseCB from '../components/CoseCB/CoseCB.tsx'

const ChiSiamoPage = () => {
	const query = useStaticQuery(graphql`
		query ChiSiamo {
			datoCmsChisiamo {
				sections {
					... on DatoCmsChisiamoSection {
						titolo
						descrizione
						banner {
							url
						}
					}

					... on DatoCmsCosecbSection {
						titolo
						descrizione
					}

					... on DatoCmsLostaffSection {
						titolo
						descrizione

						cards {
							tipoCarta {
								... on DatoCmsStaff {
									titolo
									descrizione
									immagine {
										url
									}
								}
							}
						}
					}

					... on DatoCmsLacommunitySection {
						titolo
						descrizione
					}
				}
			}

			allCodingBunkerContributor {
				edges {
					node {
						username
						role
						picture
						job
						description
						date
						city
						languages {
							name
						}
					}
				}
			}
		}
	`)

	const staff = []

	query.datoCmsChisiamo.sections[2].cards.forEach(e => {
		staff.push({
			title: e.tipoCarta[0].titolo,
			description: e.tipoCarta[0].descrizione,
			img: e.tipoCarta[0].immagine.url,
		})
	})

	// riformattiamo l'array di contributor levando il node in mezzo che da alquanto fastidio
	const contributors = []

	query.allCodingBunkerContributor.edges.forEach(e => {
		contributors.push({
			username: e.node.username,
			role: e.node.role,
			picture: e.node.picture,
			job: e.node.job,
			description: e.node.description,
			date: e.node.date,
			city: e.node.city,
			languages: e.node.languages,
		})
	})

	return (
		<div>
			<Layout>
				<Chisiamo
					title={query.datoCmsChisiamo.sections[0].titolo}
					description={query.datoCmsChisiamo.sections[0].descrizione}
					img={query.datoCmsChisiamo.sections[0].banner.url}
				/>
				<CoseCB
					title={query.datoCmsChisiamo.sections[1].titolo}
					description={query.datoCmsChisiamo.sections[1].descrizione}
				/>
				<LoStaff
					title={query.datoCmsChisiamo.sections[2].titolo}
					description={query.datoCmsChisiamo.sections[2].descrizione}
					cards={staff}
				/>
				<LaCommunity
					title={query.datoCmsChisiamo.sections[3].titolo}
					description={query.datoCmsChisiamo.sections[3].descrizione}
					members="Al momento siamo in "
					num_members={9}
					text_button="Entra ora"
				/>
				<ContributorCardGrid text_button="Vedi altri" contributors={contributors} />
			</Layout>
		</div>
	)
}

export default ChiSiamoPage
