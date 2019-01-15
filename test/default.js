const sort = require("../dist/src/heapSort2.js").default;
// const sort = require("../dist/src/quickSort2.js").default;

const original = [
  { x: 1, y: 2, index: 0 },
  { x: 3, y: 2, index: 1 },
  { x: 5, y: 5, index: 2 },
  { x: 7, y: 2, index: 3 },
  { x: 9, y: 9, index: 4 },
  { x: 1, y: 6, index: 5 },
  { x: 9, y: 5, index: 6 },
  { x: 5, y: 2, index: 7 },
  { x: 1, y: 8, index: 8 },
  { x: 7, y: 4, index: 9 },
  { x: 1, y: 2, index: 10 }
];

sort(original, (x, y) => {
  if(x.x < y.x) {
    return true;
  }

  if(x.x === y.x && x.y < y.y) {
    return true;
  }

  if(x.x === y.x && x.y === y.y && x.index < y.index) {
    return true;
  }

  return false;
});

console.log(JSON.stringify(original, null, " "));
