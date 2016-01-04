import React, {Component, PropTypes} from 'react';

export default class Item extends Component {
	static propTypes = {
		data: PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string
		}),
	};

	render() {
		const {
			data
		} = this.props;

		return (
			<div>
				<h2>{data.title}</h2>
				<p>{data.description}</p>
			</div>
		);
	}
}
