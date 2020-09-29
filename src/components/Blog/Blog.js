import React from "react";
import Link from "gatsby"
import blog from "./Blog.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "../PostCard/PostCard"

const backgroundStyle = {
    background: "black",
    color: "white",
    height: "500px"
}

const align = {
    marginLeft: "15px"
}

const Argomento = props => {
    return <div className={blog.args}>{props.children.toUpperCase()}</div>
}

const Blog = () =>{

    let argomenti = [
        <Argomento>Programmazione</Argomento>,
        <Argomento>A.I.</Argomento>,
        <Argomento>Blockchain</Argomento>,
        <Argomento>Sviluppo</Argomento>,
        <Argomento>Design</Argomento>,
        <Argomento>Lavoro</Argomento>,
        <Argomento>Community</Argomento>,
        <Argomento>Innovazione</Argomento>,
        <Argomento>Interviste</Argomento>
    ]

    let newArgomenti = []

    for (let i = 0; i < argomenti.length; i++) {
        if (!((i + 1) % 3)) {
            newArgomenti.push([argomenti[i - 2], argomenti[i - 1], argomenti[i]])
        }
    }

    let definitiveArgomenti = []

    newArgomenti.forEach(treArgomenti => {
        definitiveArgomenti.push(<Row><Col>{treArgomenti[0]}</Col><Col>{treArgomenti[1]}</Col><Col>{treArgomenti[2]}</Col></Row>)
    })

    return (
        // <div className="blog-section" style={ backgroundStyle }>
        //     <div className="left">
        //         <h1>Il Blog <span>(di cosa parliamo)</span></h1>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor.</p>
        //         <p><strong>Trattiamo questi temi:</strong></p>
        //         <div className="griglia">
        //             <span className="argomento">PROGRAMMAZIONE</span>
        //             <span className="argomento" style={align}>A.I.</span>
        //             <span className="argomento" style={align}>BLOCKCHAIN</span>
        //             <br />
        //             <span className="argomento">SVILUPPO PERSONALE</span>
        //             <span className="argomento">DESIGN</span>
        //             <span className="argomento">LAVORO</span>
        //             <br />
        //             <span className="argomento">COMMUNITY</span>
        //             <span className="argomento">INNOVAZIONE</span>
        //             <span className="argomento">INTERVISTE</span>
        //         </div>
        //     </div>
        //     <div className="right">
        //         <div className="post-card">
        //             <div className="categoria-parent">
        //                 <div className="categoria-child">
        //                     <p>Programmazione</p>
        //                 </div>
        //             </div>
        //             <div className="immagine"><img src={nodejs} alt="" /></div>
        //             <div className="metadati">
        //                 <div className="titolo">Come installare Node.js</div>
        //                 <div className="estratto">Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Proin suscipit odales nulla id consectetur. Lorem ipsum dolor sit.</div>
        //                 <div className="div-info">
        //                     <div className="info">
        //                         <div className="data">
        //                             <img src={calendar} alt="" />  
        //                         </div>
        //                         <div className="tempo-di-lettura">
        //                             <img src={clock} alt="" />
        //                         </div>
        //                     </div>
        //                     <div className="info">
        //                         <div className="data" id="second">
        //                             Ieri    
        //                         </div>
        //                         <div className="tempo-di-lettura" id="third">
        //                             4 min
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <div className="autore">
        //                         <img src={pasquale} alt="autore articolo" /> 
        //                         Pasquale Giorgio
        //                     </div>
        //                     <div className="leggi">
        //                         <img src={arrowRight} alt="" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="vai-al-blog">
        //             <p><strong>Vai al Blog</strong></p>
        //         </div>
        //     </div>
        // </div>
        
        <div className={blog.section}>
            <Container fluid className={blog.container}>
                <Row>
                    <Col>
                        <div className={blog.title}>Il Blog</div>
                        <div className={blog.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sodales felis. Sed ut orci tellus. Nullam finibus dui arcu, quis hendrerit leo auctor sit amet. Quisque ultrices finibus sapien sed sagittis. Nam nec cursus erat, ut suscipit dolor. Etiam fringilla venenatis metus id suscipit. Maecenas ut leo sed urna iaculis ullamcorper at fringilla dui.</div>
                        <div className={blog.themes}>Trattiamo questi temi:</div>
                        <div className={blog.argsContainer}>{definitiveArgomenti}</div>
                    </Col>
                    <Col>
                        <PostCard className={blog.card} />
                        <div className={blog.button}>Vai al Blog</div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Blog;
