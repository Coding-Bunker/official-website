import React from 'react'

import PastEventCard from '../PastEventCard/PastEventCard'

import './PastScrollable.scss'
import MeImg from '../../images/me.jpg'
import PasqualeImg from '../../images/pasquale.png'
import CbImg from '../../images/cb.png'

const PastScrollable = ({ description }) => {
	return (
		<div className="Pastscrollable">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Eventi passati</span>
				<div className="linea" />
			</div>

			<div className="sottotitolo">{description}</div>

			<section className="card-list">
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: MeImg, name: 'Gieri', surname: 'Salame' },
						{ img: PasqualeImg, name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={CbImg}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: MeImg, name: 'Gieri', surname: 'Salame' },
						{ img: PasqualeImg, name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={CbImg}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: MeImg, name: 'Gieri', surname: 'Salame' },
						{ img: PasqualeImg, name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={CbImg}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: MeImg, name: 'Gieri', surname: 'Salame' },
						{ img: PasqualeImg, name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={CbImg}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: MeImg, name: 'Gieri', surname: 'Salame' },
						{ img: PasqualeImg, name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={CbImg}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
			</section>

			<div className="contenitore-tutti-eventi">
				<div>Vedi tutti gli eventi</div>
			</div>
		</div>
	)
}

export default PastScrollable
