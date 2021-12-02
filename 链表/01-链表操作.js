class NodeItem {
  item = null;
  next = null;
  constructor(item) {
    this.item = item;
  }
}
class LinkedList {
  head = null;
  length = 0;
  append(item) {
    const node = new NodeItem(item);
    if (this.length === 0) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }
  insert(item, posi) {
    const node = new NodeItem(item);
    if (posi < 0 || posi > this.length) return false;
    if (posi === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      let prev = null;
      let index = 0;
      while (index++ < posi) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = node;
      node.next = curr;
    }
    length++;
  }
  // 获取某节点下的值
  get(posi) {
    if (posi < 0 || posi > this.length) return false;
    let index = 0;
    let curr = this.head;
    while (index++ < posi) {
      curr = curr.next;
    }
    return curr.item;
  }
  // 获取值在哪个节点下, 仅实现简单类型
  indexOf(item) {
    let index = 0;
    let curr = this.head;
    if (item === curr.item) {
      return 0;
    }
    while (index < this.length) {
      if (curr.item === item) {
        return index;
      } else {
        curr = curr.next;
        index++;
      }
    }
    return -1;
  }
  // 更新某个位置上的值
  update(posi, item) {
    if (posi < 0 || posi > this.length) return false;
    if (posi === 0) {
      this.head.item = item;
    } else {
      let curr = this.head;
      let index = 0;
      while (index++ < posi) {
        curr = curr.next;
      }
      curr.item = item;
    }
  }
  // 移除某位置上的某元素
  removeAt(posi) {
    if (posi < 0 || posi > this.length) return false;
    let curr = this.head;
    if (posi.length === 0) {
      this.head = curr.next;
    } else {
      let index = 0;
      let prev = null;
      while (index++ < posi) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.length--;
    return true;
  }
  // 删除某元素
  remove(item) {
    const idx = this.indexOf(item);
    this.removeAt(idx);
    return idx;
  }
}
const linkedList = new LinkedList();

linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
