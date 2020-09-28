import React from "react";
import "./HallOfFamePage.scss";
import hallOfFame from "../../images/hall-of-fame.png";
import GrowingNumber from "../GrowingNumber/GrowingNumber";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import ContributorCard from "../ContributorCard/ContributorCard";
import enleyn from "../../images/enleyn.png";

const HallOfFamePage = () => {
    return (
        <section className="hall-of-fame">
           <div className="heading">
                <img src={hallOfFame} alt="Team Working" />
                <div className="testo">
                    <div className="intestazione">
                        <div className="linea"/>
                        <span className="titolo">Hall of Fame</span>
                        <div className="linea"/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque purus vel nulla rhoncus, sed commodo augue fermentum. Aenean sed odio felis. Quisque cursus risus ac bibendum rhoncus. Aenean elit nunc, pulvinar vitae dignissim ac, tempus ac sapien. Fusce fringilla fermentum est sit amet placerat.
                    </p>
                    <p>
                        In luctus vitae mi a auctor. In varius quam nec nibh accumsan, at blandit diam egestas. Duis tincidunt, sem id tristique dapibus, ante magna dictum nulla, nec vehicula augue turpis vitae nunc. Proin ultricies mollis enim, fermentum mollis mi commodo nec. Duis placerat maximus neque nec auctor.
                    </p>
                </div>
           </div>
           <div className="contatore">
               <div className="conteggio">
                   <GrowingNumber number="100" />
                   <p>Contributors</p>
               </div>
               <div className="conteggio">
                   <GrowingNumber number="10" />
                   <p>Progetti</p>
               </div>
               <div className="conteggio">
                   <GrowingNumber number="1000" />
                   <p>Utenti</p>
               </div>
           </div>
           <div className="i-nostri-progetti">
                <div className="intestazione">
                    <div className="linea"/>
                    <span className="titolo">I nostri progetti</span>
                    <div className="linea"/>
                </div>
                <Container fluid className="progetti">
                    <Row className="justify-content-around ">
                        <Col md="auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                        <Col md="auto">
                            <ProjectCard img={require("../../images/test.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                        <Col md="auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                    </Row>
                    <Row className="justify-content-around">
                        <Col md="auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                        <Col md="auto">
                            <ProjectCard img={require("../../images/test.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                        <Col md="auto">
                            <ProjectCard img={require("../../images/project.png")} title="Progetto 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id" />
                        </Col>
                    </Row>
                </Container>
           </div>
           <div className="contributors">
                <div className="intestazione">
                    <div className="linea"/>
                    <span className="titolo">Contributors</span>
                    <div className="linea"/>
                </div>
                <p class="sottotitolo">
                    In luctus vitae mi a auctor. In varius quam nec nibh accumsan, at blandit diam egestas. Duis tincidunt, sem id tristique dapibus, ante magna dictum nulla, nec vehicula augue turpis vitae nunc. Proin ultricies mollis enim, fermentum mollis mi commodo nec.
                </p>
                <Container fluid className="contributors">
                    <Row className="justify-content-around">
                        <Col md="auto">
                            <ContributorCard user="Contributor" profilePic={enleyn} name="enleyn" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque purus vel nulla rhoncus, sed commodo augue fermentum." />
                        </Col>
                        <Col md="auto">
                            <ContributorCard user="Contributor" profilePic={enleyn} name="enleyn" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque purus vel nulla rhoncus, sed commodo augue fermentum." />
                        </Col>
                        <Col md="auto">
                            <ContributorCard user="Contributor" profilePic={enleyn} name="enleyn" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque purus vel nulla rhoncus, sed commodo augue fermentum." />
                        </Col>
                    </Row>
                </Container>
                <div class="vedi-altri"><button>Vedi altri</button></div>
           </div>
        </section>
    )
}
export default HallOfFamePage;