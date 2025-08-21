import { beforeEach, describe, expect, test } from '@jest/globals';
import originalVacationSpots from './vacation-data.json' with { type: 'json' };
import { getSpotCount, loadData } from './vacation-dao.js';

/**
 * @typedef {import('./vacation-dao.js').InputVacationSpot} InputVacationSpot
 * @typedef {import('./vacation-dao.js').VacationSpot} VacationSpot
 */

/** @type {InputVacationSpot} */
// eslint-disable-next-line no-unused-vars
let testSpot;

/** @type {Array<VacationSpot>} */
let vacationSpots;

describe('Vacation DAO', () => {
	beforeEach(async () => {
		testSpot = {
			name: 'Test spot',
			localLanguages: ['Elvish', 'Klingon'],
			budget: 3,
			vacationType: ['fantasy', 'sci-fi'],
			location: {
				city: 'Rivendell',
				country: "Qo'noS",
			},
		};

		vacationSpots = originalVacationSpots.slice(0, 5);
		loadData(vacationSpots);
	});

	test('getSpotCount', () => {
		expect(getSpotCount()).toEqual(vacationSpots.length);
	});

	test('addSpot', () => {});

	test('editSpot: basic update', () => {});

	test('deleteSpot', () => {});
});
