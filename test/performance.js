import _ from 'underscore';

import { sort } from '../src';
import { defaultPropertyComparer } from '../src/utils/defaultComparer';

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
helper('heap.long-array.shadow', _.clone(original), v => sort(v, x => -x, 'heap', true));
helper('quick.long-array.shadow', _.clone(original), v => sort(v, x => -x, 'quick', true));
helper('underscore.long-array', _.clone(original), v => _.sortBy(v, x => x));

const cycle = (type, list, count, isShadow = false) => {
  console.time(type);
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      sort(list, comparer, type, isShadow);
    } else {
      sort(list, comparerOdd, type, isShadow);
    }
  }
  console.timeEnd(type);
}

console.log(`\n${_.chain(_.range(80)).map(() => '-').value().join('')}\n`);

const shortRange = _.range(10).reverse();

cycle('heap.short-array', _.clone(shortRange), 1000000);
cycle('quick.short-array', _.clone(shortRange), 1000000);
cycle('heap.short-array.shadow', _.clone(shortRange), 1000000, true);
cycle('quick.short-array.shadow', _.clone(shortRange), 1000000, true);
