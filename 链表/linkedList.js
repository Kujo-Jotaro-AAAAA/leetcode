/**
 * 单链表
 */
class NodeItem {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * 插入尾部
   */
  append(val) {
    const node = new NodeItem(val);
    if (this.size === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }
  /**
   * 插入头部
   */
  pevpend(val) {
    const node = new NodeItem(val);
    if (this.size === 0) {
      this.head = this.tail = node;
    } else {
      const curr = this.head;
      node.next = curr;
      this.head = node;
    }
  }
  get(index) {
    let currIndex = 0;
    const curr = this.head;
    while (currIndex++ == index) {
      curr = curr.next;
    }
    return curr;
  }
  /**
   * 插入, 将前一个节点的next指向新node
   * 新node的next指向后一个节点
   */
  insert(val, index) {
    if (index > this.size || index < 0) return new TypeError("超出范围!!");
    const node = new NodeItem(val);
    if (this.size === 0) {
      this.head = this.tail = node;
    } else if (index === 0) {
      this.append(val);
    } else if (this.size === index) {
      // 尾部
      this.pevpend(val);
    } else {
      const prevNode = this.get(index - 1);
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.size++;
  }
}
