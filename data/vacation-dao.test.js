import { expect, test } from '@jest/globals';
import { getSpotCount } from './vacation-dao.js';
import vacationSpots from './vacation-data.json' with { type: 'json' };

test('getSpotCount', () => {
	expect(getSpotCount()).toEqual(vacationSpots.length);
});
