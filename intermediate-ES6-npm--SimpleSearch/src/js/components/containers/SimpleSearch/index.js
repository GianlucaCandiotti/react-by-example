import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import SimpleSearch from './SimpleSearch';

export default (function(mountSimpleSearch) {

	mountSimpleSearch(jQuery, window, document);

}(function($, window, document) {

	$(function() {

		const mount_point = document.getElementById('mount-point');

		ReactDOM.render(
			<SimpleSearch />,
			mount_point
		);

	});

}));

