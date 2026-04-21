# 🧱 Implementing Stack Using Linked List (My Intuitive Approach)

> 🚀 I’m trying to understand this like an engineer, not just memorize code

---

## 🧠 What is a Stack?

A **Stack** follows:

> **LIFO (Last In, First Out)**

### Real-life examples I relate to:

* Stack of plates 🍽️
* Browser history 🔙
* Books piled up 📚

---

## 🎯 Core Operations I care about

* `push(value)` → add item to top
* `pop()` → remove item from top
* `peek()` → see top item

---

## 🔗 Why I’m using a Linked List

Because:

* Insert at head → **O(1)**
* Remove from head → **O(1)**

👉 No shifting like arrays (which is annoying)

---

## 🧠 My Key Design Decision

### ❓ Where should the "top" be?

I thought about two options:

* Top = head ✅
* Top = tail ❌

### Why I chose head?

| Operation | Head | Tail   |
| --------- | ---- | ------ |
| Push      | O(1) | O(1)   |
| Pop       | O(1) | ❌ O(n) |

👉 Removing from tail in a singly linked list means traversal → not ideal

---

## ✅ Final Decision

> I will treat **head as the top of the stack**

---

## 🧱 Node Structure (basic building block)

```js
{
  value: "A",
  next: null
}
```

---

## 🏗️ Stack Structure (what I track)

* `top` → head of list
* `bottom` → last node
* `length` → number of items

---

## 🧪 Empty Stack (starting point)

```text
top = null
bottom = null
length = 0
```

---

## 👀 peek()

👉 Just returns what’s on top

```js
return this.top;
```

Simple.

---

## 📥 push(value) — My Thought Process

### Case 1: Stack is empty

```text
top ──┐
      ▼
     [A|null]
      ▲
bottom┘
```

👉 Both top and bottom point to same node

---

### Case 2: Stack already has items

Before:

```text
top
 A -> null
bottom = A
```

Push `"B"`:

```text
top
 B -> A -> null
      ^
    bottom
```

---

### 🧠 My Push Logic

1. Create a new node
2. If stack is empty:

   * top = new node
   * bottom = new node
3. Else:

   * newNode.next = current top
   * top = new node
4. Increment length

---

## 📤 pop() — My Thought Process

### Case 1: Multiple items

Before:

```text
top
 B -> A -> null
      ^
    bottom
```

Pop:

```text
top
 A -> null
 ^
bottom
```

---

### Case 2: Only one item

Before:

```text
top ──┐
      ▼
     [A|null]
      ▲
bottom┘
```

After pop:

```text
top = null
bottom = null
length = 0
```

---

### 🧠 My Pop Logic

1. If empty → return null
2. Store current top
3. Move top → top.next
4. Decrement length
5. If stack becomes empty:

   * bottom = null
6. Return removed node

---

## ⚡ Time Complexity (what I should remember)

| Operation | Complexity |
| --------- | ---------- |
| push      | O(1)       |
| pop       | O(1)       |
| peek      | O(1)       |

---

## 🧠 My Mental Model

```text
Top → Newest element
Bottom → Oldest element

Stack grows and shrinks from ONE side only
```

---

## 🧪 Dry Run (to practice on paper)

Start:

```text
Empty stack
```

### push(10)

### push(20)

### push(30)

Result:

```text
30 -> 20 -> 10 -> null
```

---

### pop()

Removes → ?

### pop()

Removes → ?

### pop()

Removes → ?

### pop() again

👉 What should happen when it's empty?

---

## 🏗️ Code Skeleton (I’ll fill this myself)

```js
class Node {
  constructor(value) {
    // implement
  }
}

class Stack {
  constructor() {
    // implement
  }

  peek() {
    // return top
  }

  push(value) {
    // implement logic
  }

  pop() {
    // implement logic
  }
}
```

---

## 💡 Notes to Myself

* JS has **garbage collection** → no need to manually delete nodes
* Always handle:

  * empty stack
  * single element case

---

## 🔥 Golden Rule (my takeaway)

> Stack = operations from ONE side → linked list fits perfectly

---

## 🎯 Final Thought

> If operations happen at ONE end → Linked List works great
> If operations happen at BOTH ends → rethink (queue case 👀)
