import React, {Component, PropTypes} from 'react'

export default class SearchBar extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		search_value: PropTypes.string.isRequired,
		behaviour: PropTypes.object.isRequired
	};

	render() {
		const {
			placeholder,
			search_value,
			behaviour
		} = this.props;

		return (
			<div>
				<span className="search-icon"></span>
				<div>
					<input placeholder={placeholder} value={search_value} onChange={(e) => behaviour.onInputChange(e)} />
					<button className="is-icon cross-icon" onClick={behaviour.onResetSearchValue}></button>
				</div>
			</div>
		);
	}
}