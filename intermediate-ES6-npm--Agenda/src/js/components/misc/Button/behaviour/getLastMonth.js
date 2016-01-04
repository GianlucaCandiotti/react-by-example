import moment from 'moment';

export default (Component) => {
	return {
		onClick: () => {
			const selected_date =  moment(Component.state.selected_date);
			selected_date.subtract(1, 'M');
			Component.updateData(selected_date);
		}
	}
};