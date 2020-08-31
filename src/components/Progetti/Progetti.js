import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./Progetti.scss"
import ProjectCard from "../ProjectCard/ProjectCard";


const Progetti = () =>{
    return(
        <div className="main-container">

            <Container className="Container-titolo">
                <span className="titolo-progetti">Alcuni nostri progetti</span>
            </Container>

            <Container fluid>
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
            <div className="altri-progetti">
                <span className="scopri-progetti">Scopri tutti i progetti</span>
            </div>
        </div>
    )
}
export default Progetti