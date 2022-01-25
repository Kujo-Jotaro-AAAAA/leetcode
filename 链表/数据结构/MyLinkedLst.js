/**
 * 节点
 */
class MyLinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.nexxt = next;
  }
  toString(callback) {
    return callback ? callback(this.val) : this.val;
  }
}
/**
 * 链表
 */
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(val) {
    const newNode = new MyLinkedList(val, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  append(val) {
    const newNode = new MyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;
    let cur = this.head;
    while (cur) {
      if (callback && callback(cur)) {
        return cur;
      }
      if (value !== undefined && cur.value === value) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }
  /**
   * 删除尾部
   */
  deleteTail() {
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deleteTail;
    }
    let cur = this.head;
    while (cur.next) {
      if (!cur.next.next) {
        cur.next = null; // 找到最后一位, 进行删除
      } else {
        cur = cur.next;
      }
    }
    this.tail = cur;
    return deleteTail;
  }
  deleteHead() {
    if (this.head === null) return false;
    const deleteHead = this.head;
    if (this.head.next !== null) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deleteHead;
  }
  /**
   * 数组转换成链表
   */
  formArray(arr) {
    arr.forEach((v) => this.append(v));
    return this;
  }
  /**
   * 链表转数组
   */
  toArray() {
    const arr = [];
    const cur = this.head;
    while (cur) {
      arr.push(cur);
      cur = cur.next;
    }
    return arr;
  }
  toString(callback) {
    return this.toArray.map((v) => v.toString(callback)).toString();
  }
  reserve() {
    const pre = null;
    let cur = this.head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    this.tail = this.head;
    this.head = pre;
    return this;
  }
  delete(value) {
    if (!this.head) return null;
    let deleteNode = null;
    let cur = this.head;
    while (cur.next) {
      if (cur.next == value) {
        deleteNode = cur.next;
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    if (this.tail.val === value) {
      this.tail = cur;
    }
    return deleteNode;
  }
}
