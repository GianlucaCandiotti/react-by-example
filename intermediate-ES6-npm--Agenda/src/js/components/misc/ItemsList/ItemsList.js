import React, {Component, PropTypes} from 'react';
import R from 'ramda';

import Item from '../Item/Item';

export default class ItemsList extends Component {
	static propTypes = {
		data: PropTypes.array
	};

	render() {
		const {
			data
		} = this.props;

		const	mapIndexed = R.addIndex(R.map),
					items_list = mapIndexed((item, i) => {
						return <li key={i}><Item data={item} /></li>;
					}, data);

		return (
			<ul>{items_list}</ul>
		);
	}
}
