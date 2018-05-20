import ArrayX from '../../src/utils/arrayX';

(function () {
  const list = new ArrayX(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

  list.swap(1, 4);
  console.log('Swaped B & E:', list.$list);
  console.log();

  list.swap(1, 3);
  console.log('Swaped E & D:', list.$list);
  console.log();

  list.swap(1, 3);
  console.log('Swaped D & E:', list.$list);
  console.log();

  console.log('Same reference', list.$list === list.toArray());
  console.log();
})();

(function () {
  const list = new ArrayX(['A', 'B', 'C', 'D', 'E', 'F', 'G'], true);

  list.swap(1, 4);
  console.log('Original list:', list.$list);
  console.log('Swaped B & E:', list.toArray());
  console.log();

  list.swap(1, 3);
  console.log('Original list:', list.$list);
  console.log('Swaped E & D:', list.toArray());
  console.log();

  list.swap(1, 3);
  console.log('Original list:', list.$list);
  console.log('Swaped D & E:', list.toArray());
  console.log();

  console.log('Same reference', list === list.toArray());
  console.log();
})();
