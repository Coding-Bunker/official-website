import React from 'react'

import Layout from '../components/layout'
import TextAndPhoto from '../components/TextAndPhoto/TextAndPhoto'
import Scrollable from '../components/Scrollable/Scrollable'
import PastScrollable from '../components/PastScrollable/PastScrollable'
import AlcuniNumeri from '../components/Alcuni Numeri/AlcuniNumeri'
import DiconoDiNoi from '../components/Dicono Di Noi/DiconoDiNoi'
import EntraOraHome from '../components/EntraOraHome/EntraOraHome'
import Progetti from '../components/Progetti/Progetti'
import Testimonianze from '../components/Testimonianze/Testimonianze'
import Aziende from '../components/Aziende/Aziende'
import WhyEnter from '../components/WhyEnter/WhyEnter'
import Blog from "../components/Blog/Blog"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
	const query = useStaticQuery(graphql`
		query data {
			datoCmsHomepage {
				sections {
					... on DatoCmsAboutCodingBunkerSection {
						titolo
						descrizione
						immagine {
							url
						}
					}
					... on DatoCmsDiscordSection {
						immagineDiscord {
							url
						}
						descrizione
						immagineBackground {
							url
						}
						linkDiscord {
							link
						}
					}
					... on DatoCmsProjectSection {
						titolo
						progetti {
							tipoCarta {
								... on DatoCmsProgetto {
									immagine {
										url
									}
									titolo
									descrizione
									link
								}
							}
						}
						linkPaginaProgetti
					}
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
					... on DatoCmsPasteventSection {
						titolo
						eventiPassati {
							tipoCarta {
								... on DatoCmsEventoPassato {
									immagine {
										url
									}
									titolo
									descrizione
									persone {
										nome
										cognome
										immaginePersone {
											url
										}
									}
								}
							}
						}
					}
					
					... on DatoCmsTextAndPhotoSection {
						titolo
						descrizione
						immagine {
							url
						}
					}
					... on DatoCmsBlogSection {
						titolo
						descrizione
						argomenti {
							titolo
						}
					}
					... on DatoCmsReviewsSection {
						titolo
						descrizione
						testimonianze {
								nome
								testimonianza
						}
					}
					... on DatoCmsPartnerSection {
						titolo
						descrizione
						partners {
								immaginePartner {
										url
								}
								linkSitoPartner
						}
					}

					... on DatoCmsWhyenterSection {
						titolo
						descrizione
						immagine {
							url
						}
					}	
				}
			}
		}
	`)
	console.log(query)
	const projects = []
	const events = []
	const past_events = []
	const topics = []
	const reviews = []
	const partners = []

	query.datoCmsHomepage.sections[2].progetti.forEach(e => {
		projects.push({description: e.tipoCarta[0].descrizione, title: e.tipoCarta[0].titolo, img: e.tipoCarta[0].immagine.url})
	})

	query.datoCmsHomepage.sections[3].eventi.forEach(e => {
		events.push({date: e.tipoCarta[0].dataEvento, img: e.tipoCarta[0].fotoEvento.url, title: e.tipoCarta[0].titolo, description: e.tipoCarta[0].descrizione})
	})

	query.datoCmsHomepage.sections[4].eventiPassati.forEach(e => {
		const people = []
		e.tipoCarta[0].persone.forEach(person => {
			people.push({name: person.nome, surname: person.cognome, img: person.immaginePersone.url})
		})

		past_events.push({title: e.tipoCarta[0].titolo, description: e.tipoCarta[0].descrizione, img: e.tipoCarta[0].immagine.url, people: people, linkTo: " "})
	})

	query.datoCmsHomepage.sections[6].argomenti.forEach(e => {
		topics.push(e.titolo)
	})

	query.datoCmsHomepage.sections[7].testimonianze.forEach(e => {
		reviews.push({user: e.nome, message: e.testimonianza})
	})

	query.datoCmsHomepage.sections[8].partners.forEach(e => {
		partners.push({img: e.immaginePartner.url, link: e.linkSitoPartner})
	})

	return (
		<Layout>
			<TextAndPhoto linkText="Leggi altro" title={query.datoCmsHomepage.sections[5].titolo} description={query.datoCmsHomepage.sections[5].descrizione} img={query.datoCmsHomepage.sections[5].immagine.url} />
			<Scrollable title={query.datoCmsHomepage.sections[3].titolo} description={query.datoCmsHomepage.sections[3].descrizione} cards={events} />
			<Aziende title={query.datoCmsHomepage.sections[8].titolo} description={query.datoCmsHomepage.sections[8].descrizione} partners={partners}/>
			<Progetti title={query.datoCmsHomepage.sections[2].titolo} projects={projects} link={query.datoCmsHomepage.sections[2].linkPaginaProgetti} />
			<WhyEnter title={query.datoCmsHomepage.sections[9].titolo} description={query.datoCmsHomepage.sections[9].descrizione} img={query.datoCmsHomepage.sections[9].immagine.url}/>
			<EntraOraHome discord_img={query.datoCmsHomepage.sections[1].immagineDiscord.url} description={query.datoCmsHomepage.sections[1].descrizione} background_img={query.datoCmsHomepage.sections[1].immagineBackground.url} link={query.datoCmsHomepage.sections[1].linkDiscord.link} />
			<AlcuniNumeri />
			<Blog title={query.datoCmsHomepage.sections[6].titolo} description={query.datoCmsHomepage.sections[6].descrizione} topics={topics} />
			<DiconoDiNoi  description={query.datoCmsHomepage.sections[7].descrizione} reviews={reviews} title={query.datoCmsHomepage.sections[7].titolo}/>
		</Layout>

	)
}

export default IndexPage
