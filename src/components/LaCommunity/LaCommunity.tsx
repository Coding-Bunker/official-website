import React from "react";
import "./LaCommunity.scss"
import {Button} from "react-bootstrap";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

interface Props{
    title:string,
    description:string,
    members:string,
    num_members:bigint,
    text_button:string,
}

function Map(){
    return (
        <GoogleMap
            defaultZoom = {10}
            defaultCenter = {{lat: 41.902782, lng: 12.496365}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LaCommunity = (props:Props) =>{
    return(
        <div className="La-Community">
            <div className="Contenitore-Titoli">
                <div className="Divisore" />
                <span className="Titolo">{props.title}</span>
                <div className="Divisore" />
            </div>

            <div className="Contenitore-Descrizione">
                <span className="Descrizione">{props.description}</span>
            </div>

            <div className="Contenitore-Membri">
                <span className="Membri">{props.members}</span><span className="Num_Membri">{props.num_members}</span>
            </div>

            <div className="Contenitore-Bottone">
                <Button variant="light" className="Bottone">{props.text_button}</Button>
            </div>

            <div className="Contenitore-Mappa" style={{ width:"65%", height:"50%" }}>
                <WrappedMap
                    containerElement = {<div style={{ height:"900px" }} />}
                    mapElement = {<div style={{ height:"100%" }} />}
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement = {<div style={{ height:"100%" }} />}
                />
            </div>
        </div>
    )
}
export default LaCommunity