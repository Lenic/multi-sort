export default class ArrayX {
  constructor(list, isShadow = false) {
    this.$list = list;
    this.$isShadow = isShadow;

    if (isShadow) {
      this.$indexes = new Array(list.length);
    }

    this.length = this.$list.length;
  }

  get(index) {
    return this.$list[this.getIndex(index)];
  }

  getIndex(index) {
    if (!this.$isShadow) {
      return index;
    }

    const redirectedIndex = this.$indexes[index];
    if (redirectedIndex === undefined) {
      return index;
    } else {
      return redirectedIndex;
    }
  }

  swap(left, right) {
    if (!this.$isShadow) {
      [this.$list[left], this.$list[right]] = [this.$list[right], this.$list[left]];
    } else {
      let redirectedLeft = this.getIndex(left)
        , redirectedRight = this.getIndex(right);

      this.$indexes[left] = redirectedRight;
      this.$indexes[right] = redirectedLeft;
    }

    return this;
  }

  toArray() {
    if (!this.$isShadow) {
      return this.$list;
    }

    const list = [];

    for (let index = 0; index < this.$list.length; index++) {
      list.push(this.get(index));
    }

    return list;
  }
}
