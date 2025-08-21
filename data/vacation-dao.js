import loadedVacationSpots from './vacation-data.json' with { type: 'json' };

/**
 * @typedef {Object} Location
 * @property {string} city
 * @property {string} country
 */

/**
 * @typedef {Object} VacationSpot
 * @property {number} id
 * @property {string} name
 * @property {Array<string>} localLanguages
 * @property {number} budget
 * @property {Array<string>} vacationType
 * @property {Location} location
 */

/**
 * @typedef {Object} InputVacationSpot
 * @property {string} name
 * @property {?Array<string>} localLanguages
 * @property {?number} budget
 * @property {?Array<string>} vacationType
 * @property {?Location} location
 */

/** @type {Array<VacationSpot>} */
let vacationSpots = [...loadedVacationSpots];

/**
 * Exists to enable testing.
 * Loading vacationSpots should be mockable, but Jest
 * can't seem to do it when working with ECMAScript modules
 *
 * @param {Array<VacationSpot>} spots
 */
export function loadData(spots) {
	vacationSpots = spots;
}

/** @returns {VacationSpot[]}  */
export function getAllSpots() {
	return vacationSpots;
}

export function getSpotById(id) {
	let foundSpotIndex = checkId(id);
	return vacationSpots[foundSpotIndex];
}

/** @returns {number} */
export function getSpotCount() {
	return vacationSpots.length;
}

/**
 * @param {InputVacationSpot} tmpSpot
 * @returns {VacationSpot}
 */
export function addSpot(tmpSpot) {
	let nextId = getNextId();
	let insertSpot = { ...tmpSpot, id: nextId };
	vacationSpots.push(insertSpot);
	return insertSpot;
}

/**
 * @param {number} id
 * @param {Partial<VacationSpot>} partialSpot
 * @returns {VacationSpot}
 */
export function editSpot(id, partialSpot) {
	let foundSpotIndex = checkId(id);
	let foundSpot = vacationSpots[foundSpotIndex];
	let updatedSpot = { ...foundSpot, ...partialSpot };
	vacationSpots[foundSpotIndex] = updatedSpot;
	return updatedSpot;
}

/**
 * @param {number} id
 * @returns {boolean}
 */
export function deleteSpot(id) {
	let foundSpotIndex = checkId(id);
	let result = vacationSpots.splice(foundSpotIndex, 1);
	return result.length === 1;
}

function checkId(id) {
	let numberId = Number(id);
	let foundSpotIndex = vacationSpots.findIndex((vs) => vs.id === numberId);
	if (foundSpotIndex === -1) {
		throw Error(`Could not find vacation spot with id ${id}`);
	}

	return foundSpotIndex;
}

function getNextId() {
	// Potentially inefficient, what if there are millions of records?
	let ids = vacationSpots.map((v) => v.id);
	return Math.max(...ids) + 1;
}
