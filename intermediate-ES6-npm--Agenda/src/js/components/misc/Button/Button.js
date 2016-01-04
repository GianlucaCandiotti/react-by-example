import React, {Component, PropTypes} from 'react';

export default class Button extends Component {
	static propTypes = {
		text: PropTypes.string,
		behaviour: PropTypes.object
	};

	render() {
		const {
			text,
			behaviour
		} = this.props;
		
		return (
			<button onClick={behaviour.onClick}>
				{text}
			</button>
		);
	}
}
