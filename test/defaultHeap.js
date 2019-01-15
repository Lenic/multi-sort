const sort = require('../dist/src/heapSort2.js').default;
const original = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22];

sort(original);

console.log(JSON.stringify(original));
