import './Countdown.css'
import React, { Component } from 'react';

const AnimatedCard = ({ animation, digit }) => (
	<div className={`flipCard ${animation}`}>
		<span>{digit}</span>
	</div>
);

const StaticCard = ({ position, digit }) => (
	<div className={position}>
		<span>{digit}</span>
	</div>
);

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
	let currentDigit = digit;
	let previousDigit = digit - 1;

	if (unit === 'days') {
		previousDigit = previousDigit === 0 ? 30 : previousDigit;
	} else if (unit !== 'months') {
		previousDigit = previousDigit === -1 ? 59 : previousDigit;
	} else {
		previousDigit = previousDigit === 0 ? 12 : previousDigit;
	}

	if (currentDigit < 10) {
		currentDigit = `0${currentDigit}`;
	}
	if (previousDigit < 10) {
		previousDigit = `0${previousDigit}`;
	}

	const digit1 = shuffle ? previousDigit : currentDigit;
	const digit2 = !shuffle ? previousDigit : currentDigit;

	const animation1 = shuffle ? 'fold' : 'unfold';
	const animation2 = !shuffle ? 'fold' : 'unfold';

	return (
		<div className={'flipUnitContainer'}>
			<StaticCard position={'upperCard'} digit={currentDigit} />
			<StaticCard position={'lowerCard'} digit={previousDigit} />
			<AnimatedCard digit={digit1} animation={animation1} />
			<AnimatedCard digit={digit2} animation={animation2} />
		</div>
	);
};

class FlipClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			months: 0,
			monthsShuffle: true,
			days: 0,
			daysShuffle: true,
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true,
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.updateTime(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	updateTime() {
		const time = new Date();
		const months = time.getMonth() + 1; // getMonth() devuelve valores de 0 a 11
		const days = time.getDate();
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		if (months !== this.state.months) {
			const monthsShuffle = !this.state.monthsShuffle;
			this.setState({ months, monthsShuffle });
		}

		if (days !== this.state.days) {
			const daysShuffle = !this.state.daysShuffle;
			this.setState({ days, daysShuffle });
		}

		if (hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({ hours, hoursShuffle });
		}

		if (minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({ minutes, minutesShuffle });
		}

		if (seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({ seconds, secondsShuffle });
		}
	}

	render() {
		const { months, days, hours, minutes, seconds, monthsShuffle, daysShuffle, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;

		return (
			<div className={'flipClock'}>
				<FlipUnitContainer unit={'months'} digit={months} shuffle={monthsShuffle} />
				<FlipUnitContainer unit={'days'} digit={days} shuffle={daysShuffle} />
				<FlipUnitContainer unit={'hours'} digit={hours} shuffle={hoursShuffle} />
				<FlipUnitContainer unit={'minutes'} digit={minutes} shuffle={minutesShuffle} />
				<FlipUnitContainer unit={'seconds'} digit={seconds} shuffle={secondsShuffle} />
			</div>
		);
	}
}

export default FlipClock;
