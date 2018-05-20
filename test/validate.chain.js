import _ from 'underscore';

import { chain } from '../src';
import { defaultPropertyComparer } from '../src/utils/defaultComparer';

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
  const convertedList = _.clone(list);
  console.log('quick.list.begin', _.map(convertedList, 'index'));

  chain(convertedList).sort(comparerX).sort(comparerY).sort(comparerIndex).exec();

  console.log('quick.list.sort.end', _.map(convertedList, 'index'));
  console.log();
})(_.clone(original));

(function (list) {
  const convertedList = _.clone(list);
  console.log('segment.quick.list.begin', _.map(convertedList, 'index'));

  chain(convertedList).sort(comparerX).sort(comparerY).sort(comparerIndex).execSegment(2, 8);

  console.log('segment.quick.list.sort.end', _.map(convertedList, 'index'));
  console.log();
})(_.clone(original));

(function (list) {
  const convertedList = _.clone(list);
  console.log('quick.shadow.list.begin', _.map(convertedList, 'index'));

  const list2 = chain(convertedList)
    .sort(comparerX)
    .sort(comparerY)
    .sort(comparerIndex)
    .exec('quick', true);

  console.log('quick.shadow.list.sort.end.original', _.map(convertedList, 'index'));
  console.log('quick.shadow.list.sort.end.converted', _.map(list2, 'index'));
  console.log();
})(_.clone(original));

(function (list) {
  const convertedList = _.clone(list);
  console.log('segment.shadow.quick.list.begin', _.map(convertedList, 'index'));

  const list2 = chain(convertedList)
    .sort(comparerX)
    .sort(comparerY)
    .sort(comparerIndex)
    .execSegment(2, 8, 'quick', true);

  console.log('segment.shadow.quick.list.sort.end.original', _.map(convertedList, 'index'));
  console.log('segment.shadow.quick.list.sort.end.converted', _.map(list2, 'index'));
  console.log();
})(_.clone(original));
