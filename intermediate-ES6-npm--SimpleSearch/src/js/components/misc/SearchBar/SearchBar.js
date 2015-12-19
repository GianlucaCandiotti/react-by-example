import React, { Component, PropTypes } from 'react'

export default class SearchBar extends Component {

	static propTypes = {
		placeholder: PropTypes.string,
		search_value: PropTypes.string,
		behaviour: PropTypes.object
	};

	render() {
		const {
			placeholder,
			search_value,
			behaviour
		} = this.props;

		return (
			<div>
				<button className="is-icon search-icon"></button>
				<div>
					<input placeholder={placeholder} value={search_value} onChange={(e) => behaviour.onInputChange(e)} />
					<button className="is-icon cross-icon" onClick={behaviour.onResetSearchValue}></button>
				</div>
			</div>
		);
	}

}