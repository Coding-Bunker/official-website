import React from 'react'
// import eventi from '../components/Eventi/eventi'
// import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Scrollable from '../components/Scrollable/Scrollable.tsx'
import PastScrollable from '../components/PastScrollable/PastScrollable'
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

	const eventi = [
		{
			tipoCarta: [
				{
					dataEvento: '2020-10-09',
					fotoEvento: {
						url: 'https://www.datocms-assets.com/31783/1602353348-cb.png',
					},
					titolo: 'Gieri',
					descrizione: 'fewfewweffdsfdsfsdfdsfdsfdsfsdfd',
					link: '#',
				},
			],
		},
		{
			tipoCarta: [
				{
					dataEvento: '2020-10-05',
					fotoEvento: {
						url: 'https://www.datocms-assets.com/31783/1602361102-cb.png',
					},
					titolo: 'Gieri',
					descrizione: 'refgwergwerghwhtwhrthrwete',
					link: '#',
				},
			],
		},
		{
			tipoCarta: [
				{
					dataEvento: '2020-09-30',
					fotoEvento: {
						url: 'https://www.datocms-assets.com/31783/1602361246-cb.png',
					},
					titolo: 'Gieri',
					descrizione: 'fewfwqfgerwwgwegrwegrewgwergre',
					link: '#',
				},
			],
		},
		{
			tipoCarta: [
				{
					dataEvento: '2020-10-01',
					fotoEvento: {
						url: 'https://www.datocms-assets.com/31783/1602361266-cb.png',
					},
					titolo: 'Gieri',
					descrizione: 'fgwefghrthrhehtretrherhretgfdgdfgfdgf',
					link: '#',
				},
			],
		},
	]

	const newEventi = []

	eventi.forEach(e => {
		newEventi.push({
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
					cards={newEventi}
				/>
				<PastScrollable />
			</Layout>
		</div>
	)
}

export default Eventi
