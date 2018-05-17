function quick(list, left, right, comparer) {
  if (list.length <= 1) {
    return;
  }

  const index = partition(list, left, right, comparer);

  if (left < index - 1) {
    quick(list, left, index - 1, comparer);
  }

  if (index < right) {
    quick(list, index, right, comparer);
  }
}

function partition(list, left, right, comparer) {
  const pivot = list[Math.floor((left + right) / 2)];

  let i = left
    , j = right;

  while (i <= j) {
    while (i <= right && comparer(list[i], pivot) === -1) {
      i++;
    }

    while (j >= left && comparer(list[j], pivot) === 1) {
      j--;
    }

    if (i <= j) {
      [list[i], list[j]] = [list[j], list[i]];

      i++;
      j--;
    }
  }

  return i;
}

export default function quickSort(list, comparer) {
  quick(list, 0, list.length - 1, comparer);
}

export const segment = quick;
