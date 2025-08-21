import vacationSpots from './vacation-data.json' with { type: 'json' };

// console.log(vacationSpots);
// console.log(`We have ${vacationSpots.length} spots listed.`);

export function getAllSpots() {
	return vacationSpots;
}

export function getSpotCount() {
	return vacationSpots.length;
}

export function addSpot() {}

export function editSpot() {}

export function deleteSpot() {}

export function findSpots() {}
