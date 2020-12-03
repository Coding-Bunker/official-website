/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'

const time = 7500

const GrowingNumber = ({ number: initialNumber }) => {
	const [number, setNumber] = useState(0)

	let increment = 0

	if (initialNumber < 10) {
		increment = 1
	} else if (initialNumber >= 10 && initialNumber < 100) {
		increment = 5
	} else if (initialNumber >= 100 && initialNumber < 1000) {
		increment = 10
	} else if (initialNumber >= 1000 && initialNumber < 5000) {
		increment = 15
	} else if (initialNumber >= 5000) {
		increment = 50
	}

	useEffect(() => {
		const firstTime = (time * 50) / 100 / (initialNumber - 4)
		const secondTime = (time * 4) / 100
		const thirdTime = (time * 6) / 100
		const fourthTime = (time * 15) / 100
		const fifthTime = (time * 25) / 100

		const firstInterval = setInterval(() => add(), firstTime)
		const secondInterval = setInterval(() => add(), secondTime)
		const thirdInterval = setInterval(() => add(), thirdTime)
		const fourthInterval = setInterval(() => add(), fourthTime)
		const fifthInterval = setInterval(() => add(), fifthTime)

		const add = () => {
			setNumber(number + increment)

			if (initialNumber === 984) {
				// eslint-disable-next-line no-console
				console.log(increment)
			}

			if (number > initialNumber - 4) {
				clearInterval(firstInterval)
				// eslint-disable-next-line react-hooks/exhaustive-deps
				increment = 1
			}
			if (number > initialNumber - 3) {
				clearInterval(secondInterval)
				increment = 1
			}
			if (number > initialNumber - 2) {
				clearInterval(thirdInterval)
				increment = 1
			}
			if (number > initialNumber - 1) {
				clearInterval(fourthInterval)
			}
			if (number >= initialNumber) {
				clearInterval(fifthInterval)
				setNumber(initialNumber)
			}
		}
	}, [])

	return <div>{number}</div>
}

export default GrowingNumber

/*

export default class GrowingNumber extends React.Component {
	constructor(props) {
		super(props)
		this.state = { number: 0 }
		this.time = 7500

		if (props.number < 10) {
			this.incremento = 1
		} else if (props.number >= 10 && props.number < 100) {
			this.incremento = 5
		} else if (props.number >= 100 && props.number < 1000) {
			this.incremento = 10
		} else if (props.number >= 1000 && props.number < 5000) {
			this.incremento = 15
		} else if (props.number >= 5000) {
			this.incremento = 50
		}
	}

	componentDidMount() {
		// onChange(isVisible) {
		// if (isVisible) {
		const firstTime = (this.time * 50) / 100 / (this.props.number - 4)
		const secondTime = (this.time * 4) / 100
		const thirdTime = (this.time * 6) / 100
		const fourthTime = (this.time * 15) / 100
		const fifthTime = (this.time * 25) / 100

		this.firstInterval = setInterval(() => this.add(), firstTime)
		this.secondInterval = setInterval(() => this.add(), secondTime)
		this.thirdInterval = setInterval(() => this.add(), thirdTime)
		this.fourthInterval = setInterval(() => this.add(), fourthTime)
		this.fifthInterval = setInterval(() => this.add(), fifthTime)
		// }
	}

	add() {
		this.setState({
			number:
				this.state.number +
				this.incremento,
		})

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
			this.setState({ number: this.props.number })
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

*/
