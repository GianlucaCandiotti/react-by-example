import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Agenda from './Agenda';

export default (function(mountAgenda) {

	mountAgenda(jQuery, window, document);

}(function($, window, document) {

	$(function() {

		const mount_point = document.getElementById('mount-point');

		ReactDOM.render(
			<Agenda />,
			mount_point
		);

	});

}));

