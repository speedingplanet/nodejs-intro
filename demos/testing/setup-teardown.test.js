import chalk from 'chalk';
import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from '@jest/globals';

describe('Test suite 1', () => {
	beforeAll(() => {
		console.log(chalk.blue('Test suite 1, beforeAll()'));
	});

	afterAll(() => {
		console.log(chalk.blue('Test suite 1, afterAll()'));
	});

	beforeEach(() => {
		console.log(chalk.red('Test suite 1, beforeEach()'));
	});

	afterEach(() => {
		console.log(chalk.red('Test suite 1, afterEach()'));
	});

	test('Suite 1, test 1', () => {});
	test('Suite 1, test 2', () => {});
	test('Suite 1, test 3', () => {});
});

describe('Test suite 2', () => {
	test('Suite 2, test 1', () => {
		console.log('Proves that beforeAll/afterAll are scoped to a describe()');
	});
});

describe('Test suite 3: outer', () => {
	// Runs only once
	beforeAll(() => console.log(chalk.yellow('Test suite 3, outer beforeAll()')));

	// Runs for each test() regardless of nesting level
	beforeEach(() => console.log(chalk.green('Test suite 3, outer beforeEach()')));
	test('Suite 3, outer, test 1', () => {});

	describe('Test suite 3: nested level 1', () => {
		test('Suite 3, nested L1, test 1', () => {});

		describe('Test suite 3: nested level 2', () => {
			test('Suite 3, nested L2, test 1', () => {});
		});
	});
});
