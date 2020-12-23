import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import ContributorCard from '../ContributorCard/ContributorCard.js'
import './ContributorCard-Grid.scss'

interface Language {
    name: string
}

interface Contributor {
    username: string,
    role: string,
    picture: string,
    job: string,
    description: string,
    date: string,
    city: string,
    languages: Array<Language>
}


interface Props {
    text_button:string
    contributors: Array<Contributor>
}

const ContributorCardGrid = (props: Props) => {

    const contributors: Array<JSX.Element> = []


    // Ci costruiamo l'array con tutte le contributor card
    props.contributors.forEach((e: Contributor) => {

        const date = e.date.split("-")


        let month = ""

        // otteniamo il mese nella formattazione che piace a noi
        switch(parseInt(date[1])) {
            case 1:
                month = "Jan."
                break
            case 2:
                month = "Feb."
                break
            case 3:
                month = "Mar."
                break
            case 4:
                month = "Apr."
                break
            case 5:
                month = "May"
                break
            case 6:
                month = "Jun."
                break
            case 7:
                month =  "Jul."
                break
            case 8:
                month = "Aug."
                break
            case 9:
                month = "Sep."
                break
            case 10:
                month = "Oct."
                break
            case 11:
                month = "Nov."
                break
            case 12:
                month = "Dec."
                break
        }

        // mettiamo i linguaggi in un array di stringhe e non in un array di oggetti come prima
        const languages: Array<string> = []

        e.languages.forEach((e: Language) => {
            languages.push(e.name)
        })

        // riempiamo l'array
        contributors.push(<Col md="auto"><ContributorCard user={e.role} profilePic={e.picture} name={e.username} description={e.description} job={e.job} role={e.role} date={`est. ${month} ${date[0]}`} place={e.city} icons={languages} /></Col>)

    })


    const newContributors = []

    // Dividiamo l'array in righe da 3
    for (let i = 0; i < contributors.length; i++) {
        // eseguiamo il ciclo ogni 3 giri
        if(!((i + 1) % 3)) {
            // riempiamo il nuovo array aggiungendo la riga con le 3 card
            newContributors.push(<Row className="justify-content-between rowCard">{contributors[i-2]}{contributors[i-1]}{contributors[i]}</Row>)
        }
    }
    
    return(
        <div className="Contenitore-Grid">
            <Container fluid>
                {newContributors}
            </Container>

			<div className="Contenitore-Bottone">
				<Button variant="light" className="Bottone">
					{props.text_button}
				</Button>
			</div>
		</div>
	)
}

export default ContributorCardGrid
