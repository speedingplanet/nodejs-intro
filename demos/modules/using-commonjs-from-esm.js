// Import the entire module.exports object
// import calculator from './commonjs-module.cjs';

// If module.exports is an object, you can
// import specific keys of that object
import { add } from './commonjs-module.cjs';

// console.log('ESM version: 5 + 9 =', calculator.add(5, 9));
console.log('ESM version: 5 + 9 =', add(5, 9));
