import _ from 'underscore';

import sort from '../src';

const original = _.range(1000000);

const helper = (type, list, action) => {
  console.time(type);
  action(list);
  console.timeEnd(type);
}

helper('heap', _.clone(original), v => sort(v, 'heap'));
helper('quick', _.clone(original), v => sort(v, 'quick'));
helper('underscore', _.clone(original), v => _.sortBy(v, x => x));
