function ltComparer(x, y) {
  if (!x || !y) {
    return false;
  }

  return x < y;
}

export default function heapSort(list, comparer = ltComparer) {
  for (let i = list.length; i > 1; i--) {
    heapify(list, comparer, i);
  }
}

function heapify(list, comparer, len) {
  const isOdd = len % 2,
    count = (isOdd ? len - 1 : len - 2) / 2;

  for (let i = count; i >= 0; i--) {
    pick(list, i, comparer, len);
  }

  [list[0], list[len - 1]] = [list[len - 1], list[0]];
}

function pick(list, count, comparer, len) {
  const topIndex = count * 2,
    leftIndex = topIndex + 1,
    rightIndex = topIndex + 2;

  const swap = index => {
    if (index < len && comparer(list[topIndex], list[index])) {
      [list[topIndex], list[index]] = [list[index], list[topIndex]];
    }
  };

  swap(rightIndex);
  swap(leftIndex);
}
