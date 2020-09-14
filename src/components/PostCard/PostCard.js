import React from "react";
import nodejs from '../../images/nodejs.jpg';
import pasquale from '../../images/pasquale.png';
import "./PostCard.scss"
import calendar from '../../images/calendar.png';
import clock from '../../images/clock.png';
import arrowRight from '../../images/right-arrow.png';

const PostCard = () =>{
    return (
        <div className="post-card-component">
            <div className="post-card">
                <div className="categoria-parent">
                    <div className="categoria-child">
                        <p>Programmazione</p>
                    </div>
                </div>
                <div className="immagine"><img src={nodejs} alt="" /></div>
                <div className="metadati">
                    <div className="titolo">Come installare Node.js</div>
                    <div className="estratto">Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Proin suscipit odales nulla id consectetur. Lorem ipsum dolor sit.</div>
                    <div className="div-info">
                        <div className="info">
                            <div className="data">
                                <img src={calendar} alt="" />  
                            </div>
                            <div className="tempo-di-lettura">
                                <img src={clock} alt="" />
                            </div>
                        </div>
                        <div className="info">
                            <div className="data" id="second">
                                Ieri    
                            </div>
                            <div className="tempo-di-lettura" id="third">
                                4 min
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="autore">
                            <img src={pasquale} alt="autore articolo" /> 
                            Pasquale Giorgio
                        </div>
                        <div className="leggi">
                            <img src={arrowRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;