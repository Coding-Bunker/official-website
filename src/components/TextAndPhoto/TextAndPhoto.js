import React from "react"
import textAndPhotoStyles from "./TextAndPhoto.module.scss"
import { Container, Row, Col } from "react-bootstrap"


export default props => (
    <div className={textAndPhotoStyles.containerSection}>
        <Container fluid className={textAndPhotoStyles.containerText}>
            <Row>
                <Col>
                    <div className={textAndPhotoStyles.title}>{props.title}</div>
                    <div className={textAndPhotoStyles.description}>{props.description}</div>
                </Col>
                <div className={textAndPhotoStyles.imgContainer}>
                    <img className={textAndPhotoStyles.img} src={props.img} />
                </div>
            </Row>
        </Container>
    </div>
)