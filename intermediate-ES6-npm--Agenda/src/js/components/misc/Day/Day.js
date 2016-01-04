import React, {Component, PropTypes} from 'react';

export default class Day extends Component {
	static propTypes = {
		day: PropTypes.number,
		selected: PropTypes.bool,
		marked: PropTypes.bool,
		disabled: PropTypes.bool,
		selectDay: PropTypes.func
	};

	render() {
		const {
			day,
			selected,
			marked,
			disabled,
			behaviour
		} = this.props;

		return (
			<button onClick={disabled === false ? () => behaviour.onClick(day) : ''} style={{backgroundColor: selected ? 'yellow' : marked ? 'red' : disabled ? 'grey' : ''}} disabled={disabled}>
				{day}
			</button>
		);
	}
}