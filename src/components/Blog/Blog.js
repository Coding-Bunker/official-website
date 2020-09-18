import React from "react";
import nodejs from '../../images/nodejs.jpg';
import pasquale from '../../images/pasquale.png';
import "./Blog.scss"
import calendar from '../../images/calendar.png';
import clock from '../../images/clock.png';
import arrowRight from '../../images/right-arrow.png';

const backgroundStyle = {
    background: "black",
    color: "white",
    height: "500px"
}

const align = {
    marginLeft: "15px"
}

const Blog = () =>{
    return (
        <div className="blog-section" style={ backgroundStyle }>
            <div className="left">
                <h1>Il Blog <span>(di cosa parliamo)</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor.</p>
                <p><strong>Trattiamo questi temi:</strong></p>
                <div className="griglia">
                    <span className="argomento">PROGRAMMAZIONE</span>
                    <span className="argomento" style={align}>A.I.</span>
                    <span className="argomento" style={align}>BLOCKCHAIN</span>
                    <br />
                    <span className="argomento">SVILUPPO PERSONALE</span>
                    <span className="argomento">DESIGN</span>
                    <span className="argomento">LAVORO</span>
                    <br />
                    <span className="argomento">COMMUNITY</span>
                    <span className="argomento">INNOVAZIONE</span>
                    <span className="argomento">INTERVISTE</span>
                </div>
            </div>
            <div className="right">
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
                <div class="vai-al-blog">
                    <p><strong>Vai al Blog</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Blog;
