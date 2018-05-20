import _ from 'underscore';

import { segment } from '../src';
import { defaultPropertyComparer } from '../src/utils/defaultComparer';

const original = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const comparer = defaultPropertyComparer(x => x)
  , comparerOdd = defaultPropertyComparer(x => -x);

(function (list, comparer, comparerOdd) {
  console.log('heap.list.begin', list);

  segment(list, 4, 8, comparer, 'heap');

  console.log('heap.list.sort.first', list);

  segment(list, 4, 8, comparerOdd, 'heap');

  console.log('heap.list.sort.odd', list);
  console.log();
})(_.clone(original), comparer, comparerOdd);

(function (list, comparer, comparerOdd) {
  console.log('quick.list.begin', list);

  segment(list, 4, 8, comparer, 'quick');

  console.log('quick.list.sort.first', list);

  segment(list, 4, 8, comparerOdd, 'quick');

  console.log('quick.list.sort.odd', list);
  console.log();
})(_.clone(original), comparer, comparerOdd);

(function (list, comparer, comparerOdd) {
  console.log('heap.shadow.list.begin', list);

  let convertedList = segment(list, 4, 8, comparer, 'heap', true);

  console.log('heap.shadow.list.sort.first', convertedList);

  convertedList = segment(convertedList, 4, 8, comparerOdd, 'heap', true);

  console.log('heap.shadow.list.sort.odd', convertedList);
  console.log();
})(_.clone(original), comparer, comparerOdd);

(function (list, comparer, comparerOdd) {
  console.log('quick.shadow.list.begin', list);

  let convertedList = segment(list, 4, 8, comparer, 'quick', true);

  console.log('quick.shadow.list.sort.first', convertedList);

  convertedList = segment(convertedList, 4, 8, comparerOdd, 'quick', true);

  console.log('quick.shadow.list.sort.odd', convertedList);
  console.log();
})(_.clone(original), comparer, comparerOdd);

