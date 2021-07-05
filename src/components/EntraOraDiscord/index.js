import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import style from './style.module.scss'

const EntraOraDiscord = ({ logo }) => (
	<div className={style.container}>
		<Row>
			<Col className={style.left}>
				<iframe
					className={style.discord}
					title="Discord"
					src="https://discord.com/widget?id=707223405153484802&theme=dark"
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

				<div className={style.text}>
					Entra nel server Discord di Coding Bunker e goditi tutto il meglio di questa community e
					tutte le opportunità che ha da offrirti!
					<br />
					Per farlo, ti basta cliccare al link qui sotto.
				</div>

				<div className={style.button}>
					<Button
						variant="light"
						className={`${style.btn} entra-ora-btn`}
						href="https://discord.com/invite/Ct8WCnQ"
					>
						Entra Ora
					</Button>
				</div>
			</Col>
		</Row>
	</div>
)

export default EntraOraDiscord
