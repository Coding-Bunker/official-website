import React, { } from "react";

import { Row, Col, Container, Form } from "react-bootstrap"

const Footer = () => {

        return (
                <footer className="footer">
                        <Container fluid className="text-center">
                                <Row>
                                        <Col md="8" className="bg-primary no-gutters footer__links">
                                                <div class="d-flex flex-row justify-content-center align-items-center">

                                                </div>
                                                <Row>
                                                        <Col>
                                                        </Col>
                                                        <Col>
                                                        </Col>
                                                        <Col>
                                                        </Col>
                                                </Row>
                                        </Col>
                                        <Col md="4" className="bg-secondary no-gutters footer__newsletter">
                                                <Container className="mt-2 mb-2">
                                                        <Form>
                                                                <Form.Group controlId="formGroupEmail">
                                                                        <Form.Control type="email" placeholder="Enter email" />
                                                                </Form.Group>
                                                                <Form.Group controlId="formGroupPassword">
                                                                        <Form.Control type="password" placeholder="Password" />
                                                                </Form.Group>
                                                        </Form>
                                                </Container>
                                        </Col>
                                </Row>
                        </Container>
                </footer>
        );
}



export default Footer;