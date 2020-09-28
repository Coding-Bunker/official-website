import React, { useState, useEffect } from 'react'
import growingNumberStyles from './GrowingNumber.module.scss'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

export default class GrowingNumber extends React.Component {
	constructor(props) {
		super(props)
		this.state = {number: 0}
	}

	componentDidMount() {
		this.firstInterval = setInterval(() => this.add(), 50);
		this.secondInterval = setInterval(() => this.add(), 400)
		this.thirdInterval = setInterval(() => this.add(), 500)
		this.fourthInterval = setInterval(() => this.add(), 600)
		this.fifthInterval = setInterval(() => this.add(), 700)
		this.sixthInterval = setInterval(() => this.add(), 800)
	}

	add() {
		this.setState({number: this.state.number + 1})
		if (this.state.number == this.props.number - 5) {
			clearInterval(this.firstInterval)
		}
		else if (this.state.number == this.props.number - 4) {
			clearInterval(this.secondInterval)
		}
		else if (this.state.number == this.props.number - 3) {
			clearInterval(this.thirdInterval)
		}
		else if (this.state.number == this.props.number - 2) {
			clearInterval(this.fourthInterval)
		}
		else if (this.state.number == this.props.number - 1) {
			clearInterval(this.fifthInterval)
		}
		else if (this.state.number == this.props.number) {
			clearInterval(this.sixthInterval)
		}
	}

	render() {
		return (
			<div>
				{this.state.number}
			</div>
		)
	}
}