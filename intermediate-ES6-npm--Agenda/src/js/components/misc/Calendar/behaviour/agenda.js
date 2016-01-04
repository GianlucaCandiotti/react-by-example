import React from 'react';
import R from 'ramda';

import Week from '../../Week/Week';

export default (Component) => {
	return {
		preRender: (calendar_days, Component) => {
			const {
				selected_date,
				current_month_items,
				day_behaviour
			} = Component.props;

			const forEachIndexed = R.addIndex(R.forEach),
						weeks = [];
			let week_data = [];

			forEachIndexed((date, i) => {
					week_data.push({
						day: date.day,
						selected: (selected_date.date() === date.day && date.disabled === false) ? true : false,
						marked: R.find(R.propEq('day', date.day), current_month_items) && date.disabled === false ? true : false,
						disabled: date.disabled
					});
					if(++i % 7 === 0){
						weeks.push(<Week key={weeks.length} data={week_data} day_behaviour={day_behaviour} />);
						week_data = [];
					}
			}, calendar_days);
			return weeks;
		}
	}
}