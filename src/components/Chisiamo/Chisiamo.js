import React from "react";
import { Container } from "react-bootstrap";
import "./Chisiamo.scss"

const Chisiamo = () =>{
    return(
        <div>
            <img src={require("../../images/banner.png")} alt=""/>
            <Container fluid className="contenitore-testo">
                <span>Chi siamo</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis, dignissimos dolores eaque explicabo, hic, illum incidunt iure iusto libero maxime molestias nemo nesciunt perferendis quaerat quidem quisquam sunt voluptatum.Accusantium debitis, dignissimos dolores eaque explicabo, hic, illum incidunt iure iusto libero maxime molestias nemo nesciunt dignissimos dolores eaque explicabo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis, dignissimos dolores eaque explicabo, hic, illum incidunt iure iusto libero maxime molestias nemo nesciunt perferendis quaerat quidem quisquam sunt voluptatum.Accusantium debitis, dignissimos dolores eaque explicabo, hic, illum incidunt iure iusto libero maxime molestias nemo nesciunt dignissimos dolores eaque explicabo.</p>
            </Container>
        </div>
    )
}
export default Chisiamo;