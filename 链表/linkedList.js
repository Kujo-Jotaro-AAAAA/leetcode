class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.index = -1;
  }
  addAtHead(item) {
    const curr = new ListNode(item, this.head);
  }
}
/* 
var MyLinkedList = function() {
  this.head = this.tail = null;
  this.index = -1;
};

MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index > this.index) return -1;
  if(this.index == index) return this.tail.val;
  let cur = this.head;
  while(index--){
      cur = cur.next;
  }
  return cur.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  const temp = new ListNode(val,this.head);
  this.head = temp;
  if(++this.index == 0) this.tail = this.head;
};

MyLinkedList.prototype.addAtTail = function(val) {
  const temp = new ListNode(val,null);
  if(!this.head){
       this.head = this.tail = temp;
  }else{
      this.tail.next = temp;
      this.tail = temp;
  }
  this.index++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(this.index + 1 < index) return -1;
  if(index <= 0) return this.addAtHead(val);
  if(this.index + 1 == index) return this.addAtTail(val);
  if(index < this.index + 1){
      let target = this.head;
      while(--index){
          target = target.next;
      }
      target.next = new ListNode(val,target.next);
      this.index++;
  }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || this.index < index) return -1;
  if(index == 0){
      this.head = this.head.next;
  }else{
      let target = this.head;
      while(--index){
          target = target.next
      }
      if(this.tail === target.next) this.tail = target;
      target.next = target.next.next;
  }
  this.index--;
}; */
