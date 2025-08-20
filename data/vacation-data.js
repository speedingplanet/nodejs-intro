const vacationType = {
	CITY: 'city',
	BEACH: 'beach',
	MOUNTAIN: 'mountain',
	CRUISE: 'cruise',
	LAKE: 'lake',
	COUNTRYSIDE: 'countryside',
	HISTORICAL: 'historical',
	CULTURAL: 'cultural',
	ADVENTURE: 'adventure',
};

let data = [
	{
		name: 'barcelona_spain',
		localLanguages: ['es', 'ca'],
		budget: 2,
		vacationType: [vacationType.CITY],
		location: {
			city: 'Barcelona',
			country: 'Spain',
		},
	},
	{
		name: 'cusco_peru',
		localLanguages: ['es', 'en'],
		budget: 3,
		vacationType: [vacationType.MOUNTAIN],
		location: {
			city: 'Cusco',
			country: 'Peru',
		},
	},
	{
		name: 'bora_bora_french_polynesia',
		localLanguages: ['fr', 'en'],
		budget: 5,
		vacationType: [vacationType.BEACH],
		location: {
			city: 'Bora Bora',
			country: 'French Polynesia',
		},
	},
	{
		name: 'Tuscany',
		localLanguages: ['Italian'],
		budget: 4,
		vacationType: [vacationType.COUNTRYSIDE, vacationType.WINE_TASTING],
		location: {
			city: 'Florence',
			country: 'Italy',
		},
	},
	{
		name: 'Kyoto',
		localLanguages: ['Japanese'],
		budget: 3,
		vacationType: [vacationType.CULTURAL, vacationType.HISTORICAL],
		location: {
			city: 'Kyoto',
			country: 'Japan',
		},
	},
	{
		name: 'Banff National Park',
		localLanguages: ['English'],
		budget: 3,
		vacationType: [vacationType.MOUNTAIN, vacationType.ADVENTURE],
		location: {
			city: 'Banff',
			country: 'Canada',
		},
	},
];
