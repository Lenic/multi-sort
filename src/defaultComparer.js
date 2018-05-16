export function defaultComparer(left, right) {
  if (left < right) {
    return -1;
  } else if (left === right) {
    return 0;
  } else {
    return 1;
  }
}

export function defaultPropertyComparer(propertyFn) {
  return function defaultPropertyComparerExecutor(left, right) {
    const leftValue = propertyFn(left),
      rightValue = propertyFn(right);

    if (leftValue < rightValue) {
      return -1;
    } else if (leftValue === rightValue) {
      return 0;
    } else {
      return 1;
    }
  };
}
