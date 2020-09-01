import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./DiconoDiNoi.scss"

const DiconoDiNoi = () =>{
    return (
        <div>
            {/* Titolo della sezione "Dicono di noi" */}
            <div className="intestazione">
                <div className="linea"/>
                <span className="titolo">Dicono di noi</span>
                <div className="linea"/>
            </div>
            {/* Sottotitolo della sezione */}
            <div class="sottotitolo">Lorem ipsum dolor sit amet</div>

            {/* Container per le testimonianze */}
            <Container className="quote-container">
                <Row>
                    <Col>
                        {/* Card di una singola testimonianza formata dalla citazione e dal nome della persona citata */}
                        <div class="quote-card">
                            <blockquote>
                                Lorem ipsum dolor sit amet,<br/>
                                consetetur sadipscing elitr, sed diam<br/>
                                nonumy eirmod tempor.
                            </blockquote>
                            <cite>Gino Padellino</cite>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Card di una singola testimonianza formata dalla citazione e dal nome della persona citata */}
                        <div class="quote-card">
                            <blockquote>
                                Lorem ipsum dolor sit amet,<br/>
                                consetetur sadipscing elitr, sed diam<br/>
                                nonumy eirmod tempor.
                            </blockquote>
                            <cite>Gino Padellino</cite>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Card di una singola testimonianza formata dalla citazione e dal nome della persona citata */}
                        <div class="quote-card">
                            <blockquote>
                                Lorem ipsum dolor sit amet,<br/>
                                consetetur sadipscing elitr, sed diam<br/>
                                nonumy eirmod tempor.
                            </blockquote>
                            <cite>Gino Padellino</cite>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DiconoDiNoi;