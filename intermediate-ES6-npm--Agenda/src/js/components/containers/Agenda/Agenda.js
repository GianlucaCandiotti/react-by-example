import React, {Component, PropTypes} from 'react';
import R from 'ramda';
import moment from 'moment';

import Calendar from '../../misc/Calendar/Calendar';
import ItemsList from '../../misc/ItemsList/ItemsList';

import CalendarAgendaBehaviour from '../../misc/Calendar/behaviour/agenda';
import DayDefaultBehaviour from '../../misc/Day/behaviour/default';
import buttonGetLastMonthBehaviour from '../../misc/Button/behaviour/getLastMonth';
import buttonGetNextMonthBehaviour from '../../misc/Button/behaviour/getNextMonth';

import agendaAPImodule from '../../../api/agendaAPI';
const agendaAPI = agendaAPImodule();

export default class Agenda extends React.Component {
	state = {
		selected_date: moment(),
		current_month_items: []
	};

	componentDidMount() {
		const	month = this.state.selected_date.month(),
					year = this.state.selected_date.year(),
					current_month_items = agendaAPI.getItemsByMonth(month, year);

		this.setState({
			current_month_items: current_month_items
		});
	};

	updateData(selected_date) {
		if(selected_date.month() === moment().month()){
			selected_date.date(moment().date());
		}else{
			selected_date.date(1);
		}

		const	month = selected_date.month(),
					year = selected_date.year(),
					current_month_items = agendaAPI.getItemsByMonth(month, year);

		this.setState({
			selected_date: selected_date,
			current_month_items: current_month_items
		});
	}

	render() {
		const {
			selected_date,
			current_month_items
		} = this.state;

		const calendar_agenda_behaviour     = CalendarAgendaBehaviour(this),
					day_default_behaviour         = DayDefaultBehaviour(this),
					button_getLastMonth_behaviour = buttonGetLastMonthBehaviour(this),
					button_getNextMonth_behaviour = buttonGetNextMonthBehaviour(this);

		const itemsList_data = R.filter(item => item.day === selected_date.date(), current_month_items);

		return (
			<div>
				<Calendar	selected_date={selected_date}
									current_month_items={current_month_items}
									weeks={6}
									behaviour={calendar_agenda_behaviour}
									day_behaviour={day_default_behaviour}
									first_button_behaviour={button_getLastMonth_behaviour}
									second_button_behaviour={button_getNextMonth_behaviour} />
				<ItemsList data={itemsList_data}/>
			</div>
		);
	}
}
