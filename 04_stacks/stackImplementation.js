class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        // create node
        const newNode = new Node(value);
        // handle empty stack
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // otherwise insert at top
            newNode.next = this.top;
            this.top = newNode;
        }

        // update length
        this.length++;
        // return stack if you want chaining
        return this;
    }
    pop() {
        // handle empty stack
        if (this.length === 0) {
            return null;
        }
        // store current top
        const poppedNode = this.top;
        // or 
        // const holdingPointer = this.top;
        // move top
        this.top = this.top.next;
        // handle stack becoming empty
        if (this.top === null) {
            this.bottom = null;
        }
        // update length
        this.length--;
        // return
        return this;
        // return poppedNode;
    }
}

const myStack = new Stack();
  console.log(myStack.push("google"));
  console.log(myStack.push("google2"));
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.pop());