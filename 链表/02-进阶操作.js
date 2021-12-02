/**
 * 单节点类
 */
class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString = () => {
    return this.value;
  };
}
/**
 * 链表
 */
class LinkedLists {
  constructor() {
    /**
     * 头部的列子可能更像在中间节点强制重新渲染
     * [head ...state... middle ...state... tail]  => render from head -> middle -> tail
     */
    this.head = null;
    /**
     * tail 尾部可以结合栈做一些很有意思的事，比如
     *  react fiber 结构中的链表使用lastEffect 作为一个尾部节点来持续更新追踪新的副作用
     *  => useEffect(() => {
     *  setState(tailState) // lastEffect.next = tailState, lastEffect = tailState
     * })
     */
    this.tail = null;
  }
  /**
   * 尾部增加节点
   * @param {*} value
   * @returns { LinkedLists }
   */
  append = (value) => {
    const node = new LinkedList(value, null);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  };
  /**
   * 头部增加节点
   * @param {*} value
   * @returns { LinkedLists }
   */
  prepend = (value) => {
    let node = new LinkedList(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    return this;
  };
  /**
   * 是否包含节点
   * @param {*} value
   * @returns {boolean}
   */
  contains = (value) => {
    let head = this.head;
    while (head) {
      if (head.value === value) return true;
      head = head.next;
    }
    return false;
  };
  /**
   * 删除头部
   * @returns {LinkedList | null}
   */
  deleteHead = () => {
    if (!this.head) return null;
    let deleteHeadNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = this.tail = null;
    }
    return deleteHeadNode;
  };
  /**
   * 删除尾部
   * @returns {LinkedList | null}
   */
  deleteTail = () => {
    if (!this.tail) return null;
    let deleteTailNode = this.tail;

    if (this.tail === this.head) {
      this.tail = this.head = null;
      return deleteTailNode;
    }
    return this.remove(this.tail.value);
  };
  /**
   * 删除链表节点
   * @param {*} value
   * @returns {LinkedList | null}
   */
  remove = (value) => {
    let h = this.head;
    if (!h) return false;
    if (h.value === value) {
      const value = h;
      this.head = h.next;
      return value;
    }
    while (h && h.next) {
      if (h.next.value === value) {
        let value = h.next;
        h.next = h.next.next;
        if ((h.next = this.tail)) {
          this.tail = h.next;
        }
        return value;
      }
      h = h.next;
    }
    return null;
  };
  /**
   * 查找
   * @param {*} value
   * @returns {LinkedList | null}
   */
  find = (value) => {
    let head = this.head;
    while (head) {
      if (head.value === value) return head;
      head = head.next;
    }
    return null;
  };
  /**
   * 头部递归
   * @param {*} cb
   * @returns {void}
   */
  traverse = (cb) => {
    let head = this.head;
    while (head) {
      cb(head.value);
      head = head.next;
    }
  };
  /**
   * 尾部递归
   * @param {*} cb
   * @returns {void}
   */
  reverseTraverse = (cb) => {
    const head = this.reverseNode();
    while (head) {
      cb(head.value);
      head = head.next;
    }
  };
  /**
   * 显示链表
   * @returns {Array}
   */
  toArray = () => {
    let h = this.head;
    let output = [];
    while (h) {
      output.push(h.value);
      h = h.next;
    }
    return output;
  };
  /**
   * 理解leetcode的测试用例创建
   * @param {*} arrayNodes
   * @returns {LinkedList}
   */
  fromArray = (arrayNodes) => {
    arrayNodes.forEach((arrayNode) => {
      this.append(arrayNode);
    });
    return this.head;
  };
  /**
   * 反转链表
   * @returns {LinkedList}
   */
  reverseNode = () => {
    const head = this.head;
    let pre = null;
    while (head.next) {
      head.next = pre;
      pre = head;
      head = head.next;
    }
    return head;
  };
  /**
   * 反转链表包含处理head、tail
   * @returns { LinkedLists }
   */
  reverse = () => {
    const tail = this.head;
    this.head = this.reverseNode();
    tail.next = null;
    this.tail = tail;
    return this;
  };
}
