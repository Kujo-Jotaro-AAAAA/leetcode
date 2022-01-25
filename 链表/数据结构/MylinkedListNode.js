class MyLinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.nexxt = next;
  }
  toString(callback) {
    return callback ? callback(this.val) : this.val;
  }
}
