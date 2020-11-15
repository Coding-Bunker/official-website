import React from 'react'
import './PastScrollable.scss'

import PastEventCard from '../PastEventCard/PastEventCard'

const PastScrollable = () => {
	return (
		<div className="Pastscrollable">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Eventi passati</span>
				<div className="linea" />
			</div>

			<section className="card-list">
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: require('../../images/me.jpg'), name: 'Gieri', surname: 'Salame' },
						{ img: require('../../images/pasquale.png'), name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={require('../../images/cb.png')}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: require('../../images/me.jpg'), name: 'Gieri', surname: 'Salame' },
						{ img: require('../../images/pasquale.png'), name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={require('../../images/cb.png')}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: require('../../images/me.jpg'), name: 'Gieri', surname: 'Salame' },
						{ img: require('../../images/pasquale.png'), name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={require('../../images/cb.png')}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: require('../../images/me.jpg'), name: 'Gieri', surname: 'Salame' },
						{ img: require('../../images/pasquale.png'), name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={require('../../images/cb.png')}
					title="Gieri"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					linkTo=" "
				/>
				<PastEventCard
					showMore="Scopri"
					people={[
						{ img: require('../../images/me.jpg'), name: 'Gieri', surname: 'Salame' },
						{ img: require('../../images/pasquale.png'), name: 'Pasquale', surname: 'Giorgio' },
					]}
					img={require('../../images/cb.png')}
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
