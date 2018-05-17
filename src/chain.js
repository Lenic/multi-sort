import sort from './index';

export class Chain {
  constructor(list) {
    this.$list = list;
    this.$comparers = [];
  }

  sort(comparer) {
    let executor = comparer;

    if (typeof comparer === 'string') {
      executor = defaultPropertyComparer(v => v[comparer]);
    } else if (comparer.length === 1) {
      executor = defaultPropertyComparer(comparer);
    }

    this.$comparers.push(executor);

    return this;
  }

  exec(type = 'quick') {
    if (!this.$comparers.length) {
      return;
    }

    const comparers = this.$comparers.concat([])
      , comparer = (x, y) => {
        let value = -1;

        for (let i = 0; i < comparers.length; i++) {
          value = comparers[i](x, y);
          if (value !== 0) {
            return value;
          }
        }

        return value;
      };

    sort(this.$list, comparer, type);
  }
}

export default list => new Chain(list);
