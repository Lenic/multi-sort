import { defaultComparer, defaultPropertyComparer } from './defaultComparer';

import quick from './quickSort';
import heapSort from './heapSort';
import quickSort from './quickSort';

export default function sort(list, type = 'heap', comparer = defaultComparer) {
  if (list.length <= 1) {
    return list;
  }

  let executor = comparer;
  if (typeof comparer === 'string') {
    executor = defaultPropertyComparer(v => v[comparer]);
  } else if (comparer.length === 1) {
    executor = defaultPropertyComparer(comparer);
  }

  if (type === 'heap') {
    heapSort(list, executor);
  } else if (type === 'quick') {
    quickSort(list, executor);
  }

  return list;
}
