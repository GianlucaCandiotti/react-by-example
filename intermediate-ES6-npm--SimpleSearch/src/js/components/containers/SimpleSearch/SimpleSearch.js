import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

import SearchBar from '../../misc/SearchBar/SearchBar';
import ItemsList from '../../misc/ItemsList';

import searchBarDefaultBehaviour from '../../misc/SearchBar/behaviours/default';

export default class SimpleSearch extends Component {
	static defaultProps = {
		items: [
			"Pizza",
			"Burguers",
			"Fries",
			"Fried Chicken",
			"Fajitas",
			"Nuggets",
			"Bacon",
			"Tacos",
			"Wings",
			"Onion Rings"
		]
  };

  static propTypes = {
  	items: PropTypes.array
  };

	state = {
		search_value: ""
	};

	render() {
		const {
			search_value
		} = this.state;

		const {
			items
		} = this.props;

		const searchBar_default_behaviour = searchBarDefaultBehaviour(this);

		const filtered_items = _.filter(items, (item) => {
			return _.contains(item.toLowerCase(), search_value.toLowerCase());
		});

		return (
			<div>
				<SearchBar placeholder="Search for items" search_value={search_value} behaviour={searchBar_default_behaviour}/>
				<ItemsList items={filtered_items}/>
			</div>
		);
	}
}