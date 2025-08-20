import chalk from 'chalk';

console.log(chalk.blue('Original: Before the setTimeout call'));

setTimeout(() => {
	console.log(chalk.blue('Original: Runs after at least 2 seconds'));
}, 2000);

console.log(chalk.blue('Original: After the setTimeout call'));

console.log(chalk.blue('Original: Before the blocking loop'));

let seconds = 0;
let previous = new Date().getTime();

for (let x = 1; x < 70_000_000; x++) {
	let now = new Date().getTime();
	if (now - previous > 1000) {
		seconds++;
		console.log(chalk.blue(`Original: ${seconds} second${seconds > 1 ? 's have' : ' has'} passed`));
		previous = now;
	}
}
console.log(chalk.blue('Original: After the blocking loop'));

console.log('Functional version!');
seconds = 0;
console.log(chalk.red('FV: Before the setTimeout call'));

setTimeout(() => {
	console.log(chalk.red('FV: Runs after at least 2 seconds'));
}, 2000);

console.log(chalk.red('FV: After the setTimeout call'));

function timer() {
	for (let x = 1; x < 70_000_000; x++) {
		let now = new Date().getTime();
		if (now - previous > 1000) {
			seconds++;
			console.log(chalk.red(`FV: ${seconds} second${seconds > 1 ? 's have' : ' has'} passed`));
			previous = now;
		}
	}
}

console.log(chalk.red('FV: Before the blocking loop'));
// Continues to block, so the original setTimeout still hasn't run
timer();

// Yields until the next event loop, giving the original setTimeout time to run
// setTimeout(timer, 0);
console.log(chalk.red('FV: After the blocking loop'));
