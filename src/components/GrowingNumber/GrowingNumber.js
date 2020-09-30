import React from 'react'
import VizSensor from "react-visibility-sensor"

export default class GrowingNumber extends React.Component {
	constructor(props) {
		super(props)
		this.state = {number: 0}
		this.time =  7500

		if (props.number < 10) {
			this.incremento = 1
		}
		else if (props.number >= 10 && props.number < 100) {
			this.incremento = 5
		}
		else if (props.number >= 100 && props.number < 1000) {
			this.incremento = 10
		} 
		else if (props.number >= 1000 && props.number < 5000) {
			this.incremento = 15
		}
		else if (props.number >= 5000) {
			this.incremento = 50
		}

	}

	componentDidMount(){
	// onChange(isVisible) {
		// if (isVisible) {
			let firstTime = ((this.time * 50) / 100) / (this.props.number - 4),
			secondTime = (this.time * 4) / 100,
			thirdTime = (this.time * 6) / 100,
			fourthTime = (this.time * 15) / 100,
			fifthTime = (this.time * 25) / 100

			this.firstInterval = setInterval(() => this.add(), firstTime);
			this.secondInterval = setInterval(() => this.add(), secondTime)
			this.thirdInterval = setInterval(() => this.add(), thirdTime)
			this.fourthInterval = setInterval(() => this.add(), fourthTime)
			this.fifthInterval = setInterval(() => this.add(), fifthTime)
		// }
	}

	add() {
		this.setState({number: this.state.number + this.incremento /*Math.floor(this.props.number / this.constPotentissima)*/})
		
		if (this.props.number == 984) {
			console.log(this.incremento)
		}
		
		if (this.state.number > this.props.number - 4) {
			clearInterval(this.firstInterval)
			this.incremento = 1
		}
		if (this.state.number > this.props.number - 3) {
			clearInterval(this.secondInterval)
			this.incremento = 1
		}
	 	if (this.state.number > this.props.number - 2) {
			clearInterval(this.thirdInterval)
			this.incremento = 1
		}
		if (this.state.number > this.props.number - 1) {
			clearInterval(this.fourthInterval)
		}
		if (this.state.number >= this.props.number) {
			clearInterval(this.fifthInterval)
			this.setState({number: this.props.number})
		}
	}

	render() {
		return (
			<div>
				{/* <VizSensor onChange={this.onChange}> */}
					{this.state.number}
				{/* </VizSensor> */}
			</div>
		)
	}
}
