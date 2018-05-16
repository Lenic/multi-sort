function heap(list, index, length, comparer) {
  let i = index
    , childIndex = -1;

  for (; (childIndex = i * 2 + 1) < length; i = childIndex) {
    if ((childIndex + 1 < length) && comparer(list[childIndex], list[childIndex + 1]) === -1) {
      childIndex++;
    }

    if (comparer(list[i], list[childIndex]) === -1) {
      [list[i], list[childIndex]] = [list[childIndex], list[i]];
    }
  }
}

export default function heapSort(list, comparer) {
  for (let i = Math.floor(list.length / 2) - 1; i >= 0; i--) {
    heap(list, i, list.length, comparer);
  }

  let lastIndex = -1;
  for (let i = 0; i < list.length; i++) {
    lastIndex = list.length - i - 1;

    [list[0], list[lastIndex]] = [list[lastIndex], list[0]];

    heap(list, 0, lastIndex, comparer);
  }
}
