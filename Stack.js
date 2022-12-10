class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop(element);
  }

  peak() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.isEmpty();
stack.push(23);
stack.push(23);
stack.push(23);
console.log(stack.size());
stack.print();
