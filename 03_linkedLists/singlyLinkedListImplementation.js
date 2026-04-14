// this is the shape of a linkedlist with one node, where the head and tail both point to the same node, which has a value of 10 and a next pointer of null. The length of the linked list is 1.
// Important: At the start, head and tail are the same node.
// {
//     head: { value: 10, next: null },
//     tail: { value: 10, next: null },
//     length: 1
// }
class NewNode {
    // each node has a value and a next pointer that points to the next node in the linked list. The last node in the linked list has a next pointer of null.
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        // create the first node with the given value and next pointer of null
        const newNode = new NewNode(value);
        //we could also create the new node directly in the head assignment like this: this.head = { value: value, next: null }; but using a separate class for the node is cleaner and more reusable.
        // set head to be the first node
        this.head = newNode;
        // set tail to be the same as head because we only have one node at the start
        this.tail = this.head;
        // set length to 1 because we have one node in the linked list at the start
        this.length = 1;
    }

    // to add a new node to the end of the linked list, we need to create a new node with the given value, connect the current tail's next pointer to the new node, update the tail to be the new node, and increase the length of the linked list by 1.
    append(value) {
        // 1. create new node
        const newNode = new NewNode(value);
        // 2. connect current tail to new node
        this.tail.next = newNode;
        // 3. update tail
        this.tail = newNode;
        // 4. increase length
        this.length++;
    }

    // to add a new node to the beginning of the linked list, we need to create a new node with the given value, connect the new node's next pointer to the current head, update the head to be the new node, and increase the length of the linked list by 1.
    Prepend(value) {
        // 1. create new node
        const newNode = new NewNode(value);
        //2. connect new node to current head
        newNode.next = this.head;
        // 3. update head
        this.head = newNode;
        // 4. increase length
        this.length++;
    }

    // to print the linked list, we need to start from the head and loop through the linked list until we reach the end (null), pushing each node's value into an array, which we return at the end.
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // to traverse to a specific index in the linked list, we need to start from the head and loop through the linked list until we reach the target index, keeping track of the current node and a counter that increments with each iteration. Once the counter reaches the target index, we return the current node.
    traverseToIndex(index) {
        // start from head
        let counter = 0;
        let currentNode = this.head;
        // move until counter reaches index
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        // return current node
        return currentNode; // return the node at the given index
        // using for loop:
        // let currentNode = this.head;
        // for (let i = 0; i < index; i++) {
        //     currentNode = currentNode.next;
        // }
        // return currentNode; // return the node at the given index
    }

    // to insert a node at a specific index, we need to find the node that comes before the target position (index - 1) and connect it to the new node, and then connect the new node to the node that comes after the target position (index).
    insert(index, value) {
        // if index is 0 -> prepend
        if (index === 0) {
            this.Prepend(value);
            return;
        }
        // if index is greater than or equal to length [index could be much larger for example 200 but we just append in that case to the end of the linked list] -> append
        if (index >= this.length) {
            this.append(value);
            return;
        }
        // create new node
        const newNode = new NewNode(value);
        // find leader (node before target position -- index - 1)
        let leader = this.traverseToIndex(index - 1);

        // connect new node to the node that comes after the leader
        let holdingPointer = leader.next; // we need to store the reference to the node that comes after the leader before we overwrite it with the new node
        newNode.next = holdingPointer;

        // connect leader to new node
        leader.next = newNode;
        // increase length
        this.length++;
    }

    //remove
    remove(index) {
        //in js we just remove the reference to the node we want to remove and connect the previous node to the next node, and the garbage collector will take care of removing the node from memory. We don't need to manually free memory like in some other languages.
        // if index is 0 -> remove head
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
        // find the node before the one to be removed
        let leader = this.traverseToIndex(index - 1);
        // store the reference to the node to be removed
        let unwantedNode = leader.next;
        // connect the leader to the node after the one to be removed
        leader.next = unwantedNode.next;
        // decrease length
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.Prepend(1);
console.log(myLinkedList.printList()); // Output: [1, 10, 5, 16]
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList()); // Output: [1, 10, 99, 5, 16]
// console.log(myLinkedList);