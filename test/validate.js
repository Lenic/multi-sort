import _ from 'underscore';

import { sort } from '../src';

const original = [10, 9, 8, 6, 5, 7, 4, 3, 2, 1, 0];

const comparer = x => x
  , comparerOdd = x => -x;

(function (list, comparer, comparerOdd) {
  console.log('heap.list.begin', list);

  sort(list, comparer, 'heap');

  console.log('heap.list.sort.first', list);

  sort(list, comparerOdd, 'heap');

  console.log('heap.list.sort.odd', list);
  console.log();
})(_.clone(original), comparer, comparerOdd);

(function (list, comparer, comparerOdd) {
  console.log('quick.list.begin', list);

  sort(list, comparer, 'quick');

  console.log('quick.list.sort.first', list);

  sort(list, comparerOdd, 'quick');

  console.log('quick.list.sort.odd', list);
  console.log();
})(_.clone(original), comparer, comparerOdd);


(function (list, comparer, comparerOdd) {
  console.log('underscore.list.begin', list);

  list = _.sortBy(list, comparer);

  console.log('underscore.list.sort.first', list);

  list = _.sortBy(list, comparerOdd);

  console.log('underscore.list.sort.odd', list);
  console.log();
})(_.clone(original), comparer, comparerOdd);
