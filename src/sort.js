import heapSort, { segment as heap } from './heapSort';
import quickSort, { segment as quick } from './quickSort';
import { defaultComparer, defaultPropertyComparer } from './defaultComparer';

function getComparer(comparer) {
  let executor = comparer;

  if (typeof comparer === 'string') {
    executor = defaultPropertyComparer(v => v[comparer]);
  } else if (comparer.length === 1) {
    executor = defaultPropertyComparer(comparer);
  }

  return executor;
}

export function sort(list, comparer = defaultComparer, type = 'quick') {
  if (list.length <= 1) {
    return list;
  }

  let executor = getComparer(comparer);
  if (type === 'heap') {
    heapSort(list, executor);
  } else if (type === 'quick') {
    quickSort(list, executor);
  }

  return list;
}

export function segment(list, left, right, comparer = defaultComparer, type = 'quick') {
  if (left >= right || right < 0) {
    return;
  }

  const length = right - left + 1;
  if (length <= 1) {
    return list;
  }

  let executor = getComparer(comparer);
  if (type === 'heap') {
    heap(list, left, right, executor);
  } else if (type === 'quick') {
    quick(list, left, right, executor);
  }

  return list;
}
