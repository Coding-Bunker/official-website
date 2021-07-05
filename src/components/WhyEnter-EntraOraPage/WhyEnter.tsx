import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WhyEnterEntraOraStyle from './WhyEnter.module.scss'

interface Props {
	title: string
	description: string
	img: string
}

const WhyEnter: React.FC<Props> = ({ title, img }) => {
	return (
		<div className={WhyEnterEntraOraStyle.WhyEnterContainer}>
			<Container fluid>
				<Row>
					<Col sm={12} md={12} lg={6} xl={6}>
						<div className={WhyEnterEntraOraStyle.TextContainer}>
							<span className={WhyEnterEntraOraStyle.Title}>{title}</span>
							<p className={WhyEnterEntraOraStyle.Description}>
								Se sei bloccato con dei problemi sul codice che ti stanno facendo impazzire,
								<br />
								<br />
								Se hai la passione per l&rsquo;informatica ma ti senti solo perché non conosci
								nessuno con cui parlare e confrontarti sui tuoi argomenti preferiti,
								<br />
								<br />
								Se vuoi scoprire tante nuove informazioni e tool che non avevi mai sentito prima,
								<br />
								<br />
								Se vuoi contribuire a dei progetti open source, che ti permettono di imparare, di
								fare pratica reale e di lavorare in un vero team,
								<br />
								<br />
								Se vuoi aprirti a nuove opportunità lavorative e formative,
								<br />
								<br />
								Allora devi assolutamente entrare a far parte della community di Coding Bunker.
							</p>
						</div>
					</Col>

					<Col sm={12} md={12} lg={6} xl={6}>
						<div className={WhyEnterEntraOraStyle.ImageContainer}>
							<img className={WhyEnterEntraOraStyle.Skater} src={img} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default WhyEnter
