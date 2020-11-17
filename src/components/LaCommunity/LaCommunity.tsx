import React from "react";
import "./LaCommunity.scss"
import {Button} from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

interface Props{
    title:string,
    description:string,
    members:string,
    num_members:bigint,
    text_button:string,
}

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
            <div className="Contenitore-Mappa">
                <MapContainer className="Mappa" style={{height: 700, width:1250}} center={[41.8719, 12.5674]} zoom={6} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[41.9028, 12.4964]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={[45.4642, 9.1900]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={[38.1157, 13.3615]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={[39.2238, 9.1217]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
export default LaCommunity