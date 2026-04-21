class Stack {
  constructor() {
    // initialize array properties
    this.array = [];
  }

  peek() {
    // return the top item
    return this.array[this.array.length - 1];
  }

  push(value) {
    // add to the top
    this.array.push(value);
    return this;
  }

  pop() {
    // remove from the top
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());