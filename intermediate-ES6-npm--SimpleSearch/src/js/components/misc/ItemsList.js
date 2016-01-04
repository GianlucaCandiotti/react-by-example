import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

import Item from './Item';

export default class ItemList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	render() {
		const {
			items
		} = this.props;

		const mapped_items = _.map(items, (item, i) => {
			return <li key={i}><Item item={item} /></li>;
		});

		return (
			<ul>
				{mapped_items}
			</ul>
		);
	}
}