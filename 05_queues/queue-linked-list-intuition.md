# 🧱 Implementing Queue Using Linked List (My Intuitive Approach)

> 🚀 Trying to understand it properly instead of memorizing code

---

## 🧠 What is a Queue?

A **Queue** follows:

> **FIFO (First In, First Out)**

### Real-life examples I relate to:

* People standing in line 🧍🧍🧍
* Ticket counter 🎟️
* Food line 🍔

---

## 🎯 Core Operations I care about

* `enqueue(value)` → add item to the **back**
* `dequeue()` → remove item from the **front**
* `peek()` → see the front item

---

## ⚠️ First Thought: Can I use Arrays?

Let me try:

```js
["A", "B", "C"]
```

* Add → `push()` ✅
* Remove → `shift()` ❌

👉 Problem:

* `shift()` is **O(n)** (everything shifts left)

---

## ❌ Conclusion

> Arrays are not ideal for queues (because removing from front is expensive)

---

## 🔗 Why I’m using a Linked List

Because:

* Insert at tail → **O(1)**
* Remove at head → **O(1)**

👉 Perfect for queue behavior

---

## 🧠 My Design Decision

I need to track:

* `first` → front of queue
* `last` → back of queue
* `length`

---

## 🧱 Node Structure (same as stack)

```js
{
  value: "A",
  next: null
}
```

---

## 🏗️ Queue Structure

```text
first            last
  ↓                ↓
[A] -> [B] -> [C] -> null
```

---

## 🧪 Empty Queue

```text
first = null
last = null
length = 0
```

---

## 👀 peek()

👉 Just return the front:

```js
return this.first;
```

---

## 📥 enqueue(value) — My Thought Process

👉 Add to the **back**

---

### Case 1: Empty Queue

```text
first ──┐
        ▼
       [A|null]
        ▲
last ───┘
```

👉 Both first and last point to same node

---

### Case 2: Already has items

Before:

```text
first
 A -> null
last = A
```

enqueue("B"):

```text
first
 A -> B -> null
        ^
       last
```

---

### 🧠 My Enqueue Logic

1. Create new node
2. If queue is empty:

   * first = new node
   * last = new node
3. Else:

   * last.next = new node
   * last = new node
4. Increment length

---

## 📤 dequeue() — My Thought Process

👉 Remove from the **front**

---

### Case 1: Multiple items

Before:

```text
first
 A -> B -> C
```

dequeue():

```text
first
 B -> C
```

---

### Case 2: One item only

Before:

```text
first ──┐
        ▼
       [A|null]
        ▲
last ───┘
```

After dequeue:

```text
first = null
last = null
length = 0
```

---

### 🧠 My Dequeue Logic

1. If empty → return null
2. Store current first
3. Move first → first.next
4. Decrement length
5. If queue becomes empty:

   * last = null
6. Return removed node

---

## ⚡ Time Complexity (what I should remember)

| Operation | Complexity |
| --------- | ---------- |
| enqueue   | O(1)       |
| dequeue   | O(1)       |
| peek      | O(1)       |

---

## 🧠 My Mental Model

```text
Front → Oldest element
Back → Newest element

Queue grows from back and shrinks from front
```

---

## 🧪 Dry Run (I should practice this)

Start:

```text
Empty queue
```

### enqueue(10)

### enqueue(20)

### enqueue(30)

Result:

```text
10 -> 20 -> 30
```

---

### dequeue()

Removes → ?

### dequeue()

Removes → ?

### dequeue()

Removes → ?

### dequeue() again

👉 What happens when it's empty?

---

## 🏗️ Code Skeleton (I’ll implement this)

```js
class Node {
  constructor(value) {
    // implement
  }
}

class Queue {
  constructor() {
    // first, last, length
  }

  peek() {
    // return first
  }

  enqueue(value) {
    // add to back
  }

  dequeue() {
    // remove from front
  }
}
```

---

## 💡 Notes to Myself

* Handle edge cases:

  * empty queue
  * single element
* No need to manually delete nodes (JS garbage collection)

---

## 🔥 Golden Rule (my takeaway)

> Queue needs operations at BOTH ends → linked list is the right choice

---

## 🎯 Final Thought

> Arrays struggle with queues because of shifting, but linked lists handle it cleanly with constant time operations.
