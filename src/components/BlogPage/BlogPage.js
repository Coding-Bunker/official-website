import React from "react";
import "./BlogPage.scss";
import pasquale from '../../images/pasquale.png';
import arrowRight from '../../images/right-arrow.png';
import PostCard from '../PostCard/PostCard';
import nodejs from '../../images/nodejs.jpg';

const BlogPage = () =>{
    return (
        <div className="blog-page-component">
            <div className="heading">
                <div className="left">
                    <h1>Come installare Node.js</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas urna pretium velit convallis egestas. Nam congue pretium turpis, eget cursus neque luctus at.</h5>
                    <div className="autore-blog">
                        <img src={pasquale} alt="autore articolo" /> 
                        Pasquale Giorgio
                    </div>
                    <button className="leggi-blog">Leggi <img src={arrowRight} alt="" /></button>
                </div>
                <div className="right">
                    <img src={nodejs} alt="" />
                </div>
            </div>
            <div className="categorie">
                <h1>Categorie</h1>
                <div className="griglia">
                    <span className="argomento">PROGRAMMAZIONE</span>
                    <span className="argomento">A.I.</span>
                    <span className="argomento">BLOCKCHAIN</span>
                    <span className="argomento">SVILUPPO PERSONALE</span>
                    <span className="argomento">DESIGN</span>
                    <br />
                    <span className="argomento">LAVORO</span>
                    <span className="argomento">COMMUNITY</span>
                    <span className="argomento">INNOVAZIONE</span>
                    <span className="argomento">INTERVISTE</span>
                </div>
            </div>
            <div className="ultimi-articoli">
                <h1>Ultimi articoli</h1>
                <div className="grid">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <a href="#" target="_blank" className="vedi-tutti">Vedi tutti</a>
            </div>
            <div className="i-piu-letti">
                <h1>I più letti</h1>
                <div className="grid">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <a href="#" target="_blank" className="vedi-tutti">Vedi tutti</a>
            </div>
            <div className="interviste">
                <h1>Interviste</h1>
                <div className="grid">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <a href="#" target="_blank" className="vedi-tutti">Vedi tutti</a>
            </div>
            <div className="button">
                <button className="altri-articoli">
                    Vedi altri articoli
                </button>
            </div>
        </div>
    )
}

export default BlogPage;