class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//FIFO : First In First Out
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    peek() {
        return this.first;
    }

    enqueue(value) {
        //add to the end of the queue
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = this.first;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        //remove from the beginning of the queue
        if (this.length === 0) {
            return null;
        }
        const holdingPointer = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
     }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("google"));
console.log(myQueue.enqueue("google2"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

// Time complexity : O(1) for peek, enqueue and dequeue
// Space complexity : O(n) for storing n items in the queue