import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import style from './style.module.scss'

const EntraOraDiscord = ({ logo, text }) => (
	<div className={style.container}>
		<Row>
			<Col className={style.left}>
				<iframe
					className={style.discord}
					title="Discord"
					src="https://discord.com/widget?id=734875478179053629&theme=dark"
					width="350"
					height="500"
					allowtransparency="true"
					frameBorder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				/>
			</Col>
			<Col className={style.right}>
				<div className={style.imgContainer}>
					<img className={style.img} src={logo} alt="discord" />
				</div>
				<div className={style.text}>{text}</div>
				<div className={style.button}>
					<Button variant="light" className={`${style.btn} entra-ora-btn`}>
						Entra Ora
					</Button>
				</div>
			</Col>
		</Row>
	</div>
)

export default EntraOraDiscord
