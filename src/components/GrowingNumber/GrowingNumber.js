/* eslint-disable no-use-before-define */
import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const time = 3

const GrowingNumber = ({ number: initialNumber }) => {
	return (
		<>
			<VisibilitySensor>
				{({ isVisible }) => {
					if (isVisible) {
						return <CountUp end={initialNumber} duration={time} delay={0.2} />
					}

					return <div>0</div>
				}}
			</VisibilitySensor>
		</>
	)
}

export default GrowingNumber
