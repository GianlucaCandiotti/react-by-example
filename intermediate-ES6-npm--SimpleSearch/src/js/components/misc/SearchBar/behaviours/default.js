export default (Component) => {
	return {
		onInputChange: (e) => {
			Component.setState({
				search_value: e.target.value
			});
		},
		onResetSearchValue: () => {
			Component.setState({
				search_value: ""
			});
		}
	}
};