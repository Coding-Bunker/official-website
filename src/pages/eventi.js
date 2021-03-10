import React from 'react'
// import eventi from '../components/Eventi/eventi'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Scrollable from '../components/Scrollable/Scrollable.tsx'
// import EventCard from '../components/EventCard/EventCard'

const Eventi = () => {
	// const query = useStaticQuery(graphql`
	//     query Eventi {
	//         datoCmsEventi {
	//         sections {
	//                 ... on DatoCmsEventiSection {
	//                     titolo
	//                     descrizione
	//                     banner {
	//                         url
	//                     }
	//                 }

	//                 ... on DatoCmsEventSection {
	//                 		data
	//                     titolo
	//                     descrizione
	//                     }

	//                 }

	//         }
	//     }
	// `)

	const query = useStaticQuery(graphql`
		query ciao {
			datoCmsHomepage {
				sections {
					... on DatoCmsEventSection {
						titolo
						descrizione
						eventi {
							tipoCarta {
								... on DatoCmsEvento {
									dataEvento
									fotoEvento {
										url
									}
									titolo
									descrizione
									link
								}
							}
						}
					}
				}
			}
		}
	`)

	const events = []

	query.datoCmsHomepage.sections[0].eventi.forEach(e => {
		events.push({
			date: e.tipoCarta[0].dataEvento,
			img: e.tipoCarta[0].fotoEvento.url,
			title: e.tipoCarta[0].titolo,
			description: e.tipoCarta[0].descrizione,
		})
	})

	return (
		<div>
			<Layout>
				{/* <eventi title={query.datoCmsEventi.section[0].titolo} description={query.datoCmsEventi.sections[0].descrizione} img={query.datoCmsEventi.sections[0].banner.url} /> */}{' '}
				<Scrollable
					title="Prossimi Eventi"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
					cards={events}
				/>
			</Layout>
		</div>
	)
}

export default Eventi
