import _ from 'underscore';

import chain from '../src/chain';
import { segment as quickSort } from '../src/quickSort';
import { defaultPropertyComparer } from '../src/defaultComparer';

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
  { x: 1, y: 2, index: 10 },
];

const comparerX = defaultPropertyComparer(v => v.x)
  , comparerY = defaultPropertyComparer(v => -v.y)
  , comparerIndex = defaultPropertyComparer(v => v.index);

(function (list) {
  console.log('quick.list.begin', _.map(list, 'index'));

  chain(list).sort(comparerX).sort(comparerY).sort(comparerIndex).exec();

  console.log();
  console.log('quick.list.sort.end', _.map(list, 'index'));
})(_.clone(original));
