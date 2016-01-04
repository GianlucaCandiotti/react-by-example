import React, {Component, PropTypes} from 'react';
import R from 'ramda';
import moment from 'moment';

import Button from '../Button/Button';

export default class Calendar extends Component {
	static propTypes = {
		selected_date: PropTypes.object.isRequired,
		current_month_items: PropTypes.array,
		weeks: PropTypes.number.isRequired,
		behaviour: PropTypes.object.isRequired,
		day_behaviour: PropTypes.object,
		first_button_behaviour: PropTypes.object,
		second_button_behaviour: PropTypes.object
	};

	render() {
		const {
			selected_date,
			weeks,
			behaviour,
			day_behaviour,
			first_button_behaviour,
			second_button_behaviour
		} = this.props;

		const	first_weekday = moment(selected_date).date(1).weekday(),
					last_weekday = moment(selected_date).date(selected_date.daysInMonth()).weekday(),
					days_current_month = selected_date.daysInMonth(),
					days_last_month = moment(selected_date).subtract(1, 'M').daysInMonth(),
					calendar_days = [];

		for(let i = days_last_month - first_weekday + 1; i <= days_last_month; i++){
			calendar_days.push({day: i, disabled: true});
		}

		for(let i = 1; i <= days_current_month; i++){
			calendar_days.push({day: i, disabled: false});
		}

		const remaining_calendar_days = weeks * 7 - calendar_days.length;

		for(let i = 1; i <= remaining_calendar_days; i++){
			calendar_days.push({day: i, disabled: true});
		}

		const calendar = behaviour.preRender(calendar_days, this);

		return (
			<div>
				<div>{ selected_date.format('YYYY') }</div>
				<div>
					<Button text="last month" behaviour={first_button_behaviour} />
					<Button text="next month" behaviour={second_button_behaviour} />
					<div>{ selected_date.format('MMMM Do') }</div>
				</div>
				{calendar}
			</div>
		);
	}
}