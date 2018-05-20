import _ from 'underscore';

import { sort } from '../src';
import { defaultPropertyComparer } from '../src/defaultComparer';

const original = _.range(1000000);

const comparer = defaultPropertyComparer(x => x)
  , comparerOdd = defaultPropertyComparer(x => -x);

const helper = (type, list, action) => {
  console.time(type);
  action(list);
  console.timeEnd(type);
}

helper('heap.long-array', _.clone(original), v => sort(v, x => -x, 'heap'));
helper('quick.long-array', _.clone(original), v => sort(v, x => -x, 'quick'));
helper('underscore.long-array', _.clone(original), v => _.sortBy(v, x => x));

const cycle = (type, list, count) => {
  console.time(type);
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      sort(list, comparer, type);
    } else {
      sort(list, comparerOdd, type);
    }
  }
  console.timeEnd(type);
}

console.log(`\n${_.chain(_.range(80)).map(() => '-').value().join('')}\n`);

const shortRange = _.range(10).reverse();

cycle('heap.short-array', _.clone(shortRange), 1000000);
cycle('quick.short-array', _.clone(shortRange), 1000000);
