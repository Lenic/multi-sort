import ArrayX from './utils/arrayX';
import heapSort, { segment as heap } from './algorithms/heapSort';
import quickSort, { segment as quick } from './algorithms/quickSort';
import { defaultComparer, defaultPropertyComparer } from './utils/defaultComparer';

function getComparer(comparer) {
  let executor = comparer;

  if (typeof comparer === 'string') {
    executor = defaultPropertyComparer(v => v[comparer]);
  } else if (comparer.length === 1) {
    executor = defaultPropertyComparer(comparer);
  }

  return executor;
}

export function sort(list, comparer = defaultComparer, type = 'quick', isShadow = false) {
  if (list.length <= 1) {
    return list;
  }

  const wrappedList = new ArrayX(list, isShadow);

  let executor = getComparer(comparer);
  if (type === 'heap') {
    heapSort(wrappedList, executor);
  } else if (type === 'quick') {
    quickSort(wrappedList, executor);
  }

  return isShadow ? wrappedList.toArray() : list;
}

export function segment(list, left, right, comparer = defaultComparer, type = 'quick', isShadow = false) {
  if (left >= right || right < 0) {
    return;
  }

  const length = right - left + 1;
  if (length <= 1) {
    return list;
  }

  const wrappedList = new ArrayX(list, isShadow);

  let executor = getComparer(comparer);
  if (type === 'heap') {
    heap(wrappedList, left, right, executor);
  } else if (type === 'quick') {
    quick(wrappedList, left, right, executor);
  }

  return isShadow ? wrappedList.toArray() : list;
}
