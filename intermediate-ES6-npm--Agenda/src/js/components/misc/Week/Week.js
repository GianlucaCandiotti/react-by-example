import React, {Component, PropTypes} from 'react';
import R from 'ramda';

import Day from '../Day/Day';

export default class Week extends Component {
	static propTypes = {
		data: PropTypes.array,
		day_behaviour: PropTypes.object
	};

	render() {
		const {
			data,
			day_behaviour
		} = this.props;

		const mapIndexed = R.addIndex(R.map),
					week = mapIndexed((date, i) => {
			return <Day	key={i}
									day={date.day}
									selected={date.selected}
									marked={date.marked}
									disabled={date.disabled}
									behaviour={day_behaviour}/>
		}, data)

		return (
			<div>{week}</div>
		);
	}
}
