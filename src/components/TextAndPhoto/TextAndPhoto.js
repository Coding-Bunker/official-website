import React from "react"
import textAndPhotoStyles from "./TextAndPhoto.module.scss"
import { Container, Row, Col } from "react-bootstrap"


export default props => (
    <div className={textAndPhotoStyles.containerSection}>
        <Container fluid className={textAndPhotoStyles.containerText}>
            <Row>
                <Col>
                    <div className={textAndPhotoStyles.title}>Coding Bunker</div>
                    <div className={textAndPhotoStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas.</div>
                </Col>
                <div className={textAndPhotoStyles.imgContainer}>
                    <img className={textAndPhotoStyles.img} src={props.img} />
                </div>
            </Row>
        </Container>
    </div>
)