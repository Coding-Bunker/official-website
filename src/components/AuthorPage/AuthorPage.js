import React from 'react'
import './AuthorPage.scss'
import PostCard from '../PostCard/PostCard'
import ludovico from '../../images/ludovico.png'
import facebookIcon from '../../images/facebook-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import instagramIcon from '../../images/instagram-icon.png'

const AuthorPage = () => {
	return (
		<div className="blog-page-component">
			<div className="heading">
				<div className="left">
					<img src={ludovico} alt="" />
				</div>
				<div className="right">
					<div className="autore">
						<h1>Ludovico Besana</h1>
						<span> | </span>
						<span>Founder</span>
					</div>
					<p>
						Software Tester & Full Stack Developer
						<br />
						Freelance | Junior QA Engineer presso <br />
						AppQuality
					</p>
					<div className="social-icons">
						<img src={facebookIcon} alt="" />
						<img src={linkedinIcon} alt="" />
						<img src={instagramIcon} alt="" />
					</div>
				</div>
			</div>
			<div className="i-miei-articoli">
				<h1>I miei articoli</h1>
				<div className="grid">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
				<a href="/post" target="_blank" className="vedi-tutti">
					Vedi altri articoli
				</a>
			</div>
			<div className="consigliati">
				<h1>Consigliati per te</h1>
				<div className="grid">
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</div>
	)
}

export default AuthorPage
