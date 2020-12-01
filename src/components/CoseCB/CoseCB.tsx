import React from "react";
import "./CoseCB.scss"
import {Container} from "react-bootstrap";

interface Props{
    title:String,
    description:String,
}

const CoseCB = (props:Props) =>{
    return(
        <div className="CoseCB">
            <div className="Contenitore-Nero">
                <Container fluid className="Contenitore-Testo">
                    <div className="Contenitore-Titolo">
                        <h1 className="titoloCB">{props.title}</h1>
                    </div>
                    <div className="Contenitore-Descrizione">
                        <p className="descrizioneCB">{props.description} <br/> <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi beatae blanditiis commodi dolor ea eligendi eveniet, libero, molestiae numquam praesentium quod reiciendis rerum sequi, similique sit suscipit veniam.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default CoseCB