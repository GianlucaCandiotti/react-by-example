import moment from 'moment';

export default (Component) => {
	return {
		onClick: (day) => {
			const selected_date = moment(Component.state.selected_date);
			selected_date.date(day);
			Component.setState({
				selected_date: selected_date
			});
		}
	}
}