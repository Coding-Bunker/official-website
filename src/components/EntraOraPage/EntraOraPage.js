import React from "react";
import "./EntraOraPage.scss";
import discord from "../../images/discord.png";
import entraOra from "../../images/entra-ora.png";
import jobPositions from "../../images/jobpositions.png";
import progettiOpenSource from "../../images/progetti-open-source.png";
import tutoringAndCourses from "../../images/tutoring-and-courses.png"

const EntraOraPage = () => {
    return(
        <section className="entra-ora">
            <div className="main">
                <div className="plugin-discord">
                    <iframe src="https://discordapp.com/widget?id=707223405153484802&theme=dark" width="500" height="650" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <div className="call-to-action">
                    <div className="logo"><img src={discord} alt="discord logo" /></div>
                    <p>Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non</p>
                    <button>Entra ora</button>
                </div>
            </div>
            <div className="perche-entrare">
                <div className="testo">
                    <h1>Perché entrare</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin suscipit fermentum quam ac blandit. Morbi eu turpis in ante facilisis aliquam. Maecenas laoreet sit amet turpis et suscipit. Fusce nibh mi, semper a sodales et, accumsan congue ligula. Praesent elementum metus quis magna tincidunt, et facilisis neque egestas. Integer sodales non tortor quis volutpat.</p>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed fringilla sollicitudin tincidunt. Etiam faucibus lacinia nisi et bibendum.</p>
                </div>
                <div className="immagine">
                    <img src={entraOra} alt="entra ora immagine" />
                </div>
            </div>
            <div className="annunci">
                <div className="intestazione">
                    <div className="linea"/>
                    <span className="titolo">Annunci</span>
                    <div className="linea"/>
                </div>
                <div className="sottotitolo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin suscipit fermentum quam ac blandit. Morbi eu turpis in ante facilisis aliquam.
                </div>
                <div className="immagini">
                    <div className="immagine">
                        <img src={jobPositions} alt="Job positions" />
                        <div className="didascalia">Job positions</div>
                    </div>
                    <div className="immagine">
                        <img src={progettiOpenSource} alt="Progetti open source" />
                        <div className="didascalia">Progetti open-source</div>
                    </div>
                    <div className="immagine">
                        <img src={tutoringAndCourses} alt="Tutoring and courses" />
                        <div className="didascalia">Tutoring & corsi</div>
                    </div>
                </div>
                <div className="testo">Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin suscipit fermentum quam ac blandit. Morbi eu turpis in ante facilisis aliquam. Maecenas laoreet sit amet turpis et suscipit. Fusce nibh mi, semper a sodales et, accumsan congue ligula.</div>
                <button>Diventa partner</button>
            </div>
        </section>
    )
}
export default EntraOraPage;