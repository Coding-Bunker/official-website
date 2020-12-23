import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import textAndPhotoStyles from './TextAndPhoto.module.scss'

export default props => (
  <div className={textAndPhotoStyles.containerSection}>
      <Row>
          <Col className={textAndPhotoStyles.textContainer}>
              <div className={textAndPhotoStyles.title}>{props.title}</div>
                 <div className={textAndPhotoStyles.description}>{props.description}</div>
                 <div className={textAndPhotoStyles.linkContainer}>
                 <div className={textAndPhotoStyles.link}>
                    <Link to={props.linkTo}>{props.linkText} ></Link>
                 </div>
               </div>
          </Col>
          <Col className={textAndPhotoStyles.imgContainer} style={{padding: 0}}>

            <img className={textAndPhotoStyles.img} src={props.img} />
          </Col>
      </Row>

  </div>

)
