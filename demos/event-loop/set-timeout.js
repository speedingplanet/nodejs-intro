console.log('Before the setTimeout call');

setTimeout(() => {
	console.log('Runs after at least 2 seconds');
}, 2000);

console.log('After the setTimeout call');
