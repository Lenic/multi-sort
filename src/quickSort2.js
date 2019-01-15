function ltComparer(x, y) {
  if (!x || !y) {
    return false;
  }

  return x < y;
}

export default function quickSort(
  list,
  comparer = ltComparer,
  beginIndex = 0,
  endIndex = list.length - 1
) {
  if (!list || list.length < 2) {
    return;
  }

  if (beginIndex >= endIndex) {
    return;
  }

  const povitIndex = split(list, beginIndex, endIndex, comparer);

  quickSort(list, comparer, beginIndex, povitIndex - 1);
  quickSort(list, comparer, povitIndex + 1, endIndex);
}

function split(list, beginIndex, endIndex, comparer) {
  if (beginIndex >= endIndex) {
    return;
  }

  let ltIndex = beginIndex + 1;
  const povit = list[beginIndex];

  for (let i = ltIndex; i <= endIndex; i++) {
    if (comparer(list[i], povit)) {
      [list[ltIndex], list[i]] = [list[i], list[ltIndex]];
      ltIndex++;
    }
  }

  const povitIndex = ltIndex - 1;
  [list[povitIndex], list[beginIndex]] = [povit, list[povitIndex]];

  return povitIndex;
}
