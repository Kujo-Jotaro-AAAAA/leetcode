class MyQueue {
  constructor(num) {
    this.array = new Array(num);
    this.front = 0;
    this.rear = 0;
  }
  enQueue(num) {
    if ((this.rear + 1) % this.array.length === this.front) return;
    this.array[this.rear] = num;
    this.rear = (this.rear + 1) % this.array.length;
    console.log("enQueue", this);
  }
  deQueue() {
    if (this.rear === this.front) return; // 队列空的, 因为循环队列的情况, 不能 === 0来判断
    let delNum = this.array[this.front];
    this.front = (this.front + 1) % this.array.length;
    console.log("deQueue", this);
    return delNum;
  }
  outPut() {
    for (let i = this.front; i != this.rear; i = (i + 1) % this.array.length) {
      console.log(this.array[i]);
    }
  }
}
const myQueue = new MyQueue(6);
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);
myQueue.enQueue(4);
myQueue.enQueue(5);
myQueue.enQueue(6); // 满了, 插不进了
