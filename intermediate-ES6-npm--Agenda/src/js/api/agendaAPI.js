import R from 'ramda';

export default () => {
	const data = [{
	"id": 1,
	"title": "est risus auctor",
	"description": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
	"day": 28,
	"month": 0,
	"year": 2015
}, {
	"id": 2,
	"title": "sapien varius ut blandit non",
	"description": "Proin risus. Praesent lectus.",
	"day": 30,
	"month": 2,
	"year": 2016
}, {
	"id": 3,
	"title": "eget tincidunt eget tempus",
	"description": "Fusce consequat.",
	"day": 19,
	"month": 2,
	"year": 2015
}, {
	"id": 4,
	"title": "ante vestibulum ante",
	"description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	"day": 7,
	"month": 8,
	"year": 2015
}, {
	"id": 5,
	"title": "nullam molestie nibh",
	"description": "Nullam molestie nibh in lectus. Pellentesque at nulla.",
	"day": 28,
	"month": 6,
	"year": 2015
}, {
	"id": 6,
	"title": "turpis elementum ligula vehicula",
	"description": "Nulla ut erat id mauris vulputate elementum.",
	"day": 10,
	"month": 10,
	"year": 2016
}, {
	"id": 7,
	"title": "id justo sit",
	"description": "Aliquam erat volutpat.",
	"day": 14,
	"month": 8,
	"year": 2015
}, {
	"id": 8,
	"title": "nibh in lectus pellentesque at",
	"description": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	"day": 14,
	"month": 1,
	"year": 2016
}, {
	"id": 9,
	"title": "nisl ut volutpat",
	"description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
	"day": 5,
	"month": 0,
	"year": 2016
}, {
	"id": 10,
	"title": "donec quis orci",
	"description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
	"day": 21,
	"month": 11,
	"year": 2016
}, {
	"id": 11,
	"title": "quisque ut erat",
	"description": "Nulla mollis molestie lorem.",
	"day": 20,
	"month": 10,
	"year": 2015
}, {
	"id": 12,
	"title": "montes nascetur ridiculus mus",
	"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
	"day": 5,
	"month": 9,
	"year": 2015
}, {
	"id": 13,
	"title": "rhoncus aliquam lacus morbi quis",
	"description": "Morbi non quam nec dui luctus rutrum.",
	"day": 30,
	"month": 6,
	"year": 2016
}, {
	"id": 14,
	"title": "sed vestibulum sit amet cursus",
	"description": "In hac habitasse platea dictumst.",
	"day": 4,
	"month": 11,
	"year": 2016
}, {
	"id": 15,
	"title": "luctus nec molestie",
	"description": "Proin eu mi.",
	"day": 19,
	"month": 10,
	"year": 2016
}, {
	"id": 16,
	"title": "faucibus orci luctus et",
	"description": "Duis mattis egestas metus. Aenean fermentum.",
	"day": 1,
	"month": 1,
	"year": 2015
}, {
	"id": 17,
	"title": "orci luctus et",
	"description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
	"day": 27,
	"month": 5,
	"year": 2015
}, {
	"id": 18,
	"title": "id massa id nisl",
	"description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
	"day": 2,
	"month": 6,
	"year": 2015
}, {
	"id": 19,
	"title": "sapien arcu sed",
	"description": "Nam dui.",
	"day": 15,
	"month": 1,
	"year": 2016
}, {
	"id": 20,
	"title": "viverra dapibus nulla",
	"description": "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	"day": 17,
	"month": 7,
	"year": 2015
}, {
	"id": 21,
	"title": "vestibulum eget vulputate ut ultrices",
	"description": "Aenean lectus. Pellentesque eget nunc.",
	"day": 29,
	"month": 8,
	"year": 2015
}, {
	"id": 22,
	"title": "risus dapibus augue",
	"description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	"day": 10,
	"month": 8,
	"year": 2016
}, {
	"id": 23,
	"title": "massa donec dapibus",
	"description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
	"day": 17,
	"month": 9,
	"year": 2016
}, {
	"id": 24,
	"title": "vestibulum sed magna at nunc",
	"description": "Nulla ut erat id mauris vulputate elementum.",
	"day": 30,
	"month": 7,
	"year": 2016
}, {
	"id": 25,
	"title": "est congue elementum in",
	"description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
	"day": 7,
	"month": 11,
	"year": 2016
}, {
	"id": 26,
	"title": "placerat ante nulla justo aliquam",
	"description": "Nunc purus. Phasellus in felis.",
	"day": 3,
	"month": 7,
	"year": 2015
}, {
	"id": 27,
	"title": "sem sed sagittis nam",
	"description": "Vivamus tortor.",
	"day": 1,
	"month": 7,
	"year": 2016
}, {
	"id": 28,
	"title": "pulvinar nulla pede ullamcorper augue",
	"description": "Nulla suscipit ligula in lacus.",
	"day": 2,
	"month": 11,
	"year": 2015
}, {
	"id": 29,
	"title": "augue quam sollicitudin",
	"description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
	"day": 15,
	"month": 5,
	"year": 2016
}, {
	"id": 30,
	"title": "nisl nunc rhoncus dui vel",
	"description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
	"day": 2,
	"month": 8,
	"year": 2016
}];

	return {
		getItemsByMonth: (month, year) => {
			return R.filter(item => item.month === month && item.year === year, data);
		}
	}
}