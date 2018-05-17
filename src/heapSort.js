function heap(list, left, length, comparer, constant = 0) {
  let i = left
    , childIndex = -1;

  for (; (childIndex = (i - constant) * 2 + 1 + constant) < length; i = childIndex) {
    if ((childIndex + 1 < length) && comparer(list[childIndex], list[childIndex + 1]) === -1) {
      childIndex++;
    }

    if (comparer(list[i], list[childIndex]) === -1) {
      [list[i], list[childIndex]] = [list[childIndex], list[i]];
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

    [list[left], list[lastIndex + left]] = [list[lastIndex + left], list[left]];

    heap(list, left, lastIndex + left, comparer, left);
  }
}
