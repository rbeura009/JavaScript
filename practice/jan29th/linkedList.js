class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    let prev = null;
    let current = this.head;

    if (!this.head) return undefined;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  shift() {
    let newhead = this.head.next;
    let oldhead = this.head;
    oldhead.next = null;
    this.head = newhead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return oldhead;
  }

  get(index) {
    let aindex = parseInt(index);
    if (!isNaN(aindex) || (aindex >= 0 && aindex < this.length)) {
      let i = 0;
      let current = this.head;
      while (i !== index) {
        current = current.next;
        i++;
      }
      return current;
    }

    return undefined;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = null;
    let prev = null;
    let i = 0;

    while (i < this.length) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new LinkedList();
list.push("tobey");
list.push("andrew");
list.push("tom");
list.push("spidey");
