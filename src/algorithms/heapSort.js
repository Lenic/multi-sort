function heap(list, left, length, comparer, constant = 0) {
  let i = left
    , childIndex = -1;

  for (; (childIndex = (i - constant) * 2 + 1 + constant) < length; i = childIndex) {
    if (
      (childIndex + 1 < length) &&
      comparer(list.get(childIndex), list.get(childIndex + 1)) === -1
    ) {
      childIndex++;
    }

    if (comparer(list.get(i), list.get(childIndex)) === -1) {
      list.swap(i, childIndex);
    }
  }
}

export default function heapSort(list, comparer) {
  segment(list, 0, list.length - 1, comparer);
}

export function segment(list, left, right, comparer) {
  const length = right - left + 1;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heap(list, i + left, length + left, comparer, left);
  }

  let lastIndex = -1;
  for (let i = 0; i < length; i++) {
    lastIndex = length - i - 1;

    list.swap(left, lastIndex + left);

    heap(list, left, lastIndex + left, comparer, left);
  }
}
