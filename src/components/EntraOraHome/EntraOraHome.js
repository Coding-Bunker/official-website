import React from "react";
import { Container, Button } from "react-bootstrap";
import "./EntraOraHome.scss"
import entraora1 from '../../images/Entra_ora_con_logo_discord.svg';
import entraora2 from '../../images/Entra_ora_senza_logo_discord.svg';

const backgroundStyle = {
    backgroundImage: 'url(' + entraora1 + ')',
    backgroundSize: 'cover',
    overflow: 'hidden'
}

const EntraOraHome = () => {
    return(
        <section className="entra-ora-component">
            <Container fluid className="entra-ora" style={ backgroundStyle }>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio consequuntur libero similique commodi? Qui amet doloremque ab libero numquam dicta, explicabo quo commodi voluptatibus, error, earum hic minima architecto nesciunt?</p>
                <Button variant="light" className="entra-ora-btn px-5 py3"><h1><strong>Entra ora</strong></h1></Button>
            </Container>
        </section>
    )
}
export default EntraOraHome;