# ⚙️ JavaScript Event Loop, Microtasks & Macrotasks (Deep Dive)

> 🚀 Advanced JavaScript concept — highly asked in interviews

---

## 🧠 Big Picture

JavaScript is:

> **Single-threaded but non-blocking**

* Single-threaded → one **Call Stack**
* Non-blocking → uses:

  * Web APIs
  * Task Queues
  * Event Loop

---

## 🧩 Core Components

### 1️⃣ Call Stack (Execution Engine)

* Executes JavaScript code
* Follows **LIFO (Last In First Out)**

```js
console.log("A");
console.log("B");
```

---

### 2️⃣ Web APIs (Browser Environment)

Not part of JavaScript itself.

Examples:

* `setTimeout`
* `fetch`
* DOM events (`click`, `scroll`)

👉 Used to handle **async operations outside the main thread**

---

### 3️⃣ Task Queues (VERY IMPORTANT)

There are **TWO types**:

#### 🔸 Microtask Queue (High Priority)

* `Promise.then`
* `Promise.catch`
* `queueMicrotask`

#### 🔹 Macrotask Queue (Callback Queue)

* `setTimeout`
* `setInterval`
* DOM events

---

### 4️⃣ Event Loop (The Brain 🧠)

Continuously checks:

> “Is the Call Stack empty?”

If YES:

1. Run **ALL microtasks**
2. Run **ONE macrotask**
3. Repeat

---

## 🔄 Correct Flow (NOT Linear ❗)

```text
           ┌────────────────────┐
           │     Call Stack     │
           └─────────┬──────────┘
                     │
        async tasks leave stack
                     │
                     ▼
           ┌────────────────────┐
           │      Web APIs      │
           └─────────┬──────────┘
                     │
          task completed
                     │
                     ▼
     ┌──────────────────────────────┐
     │         Task Queues          │
     │  ┌────────────────────────┐ │
     │  │  Microtask Queue       │ │ ← HIGH PRIORITY
     │  │ (Promises, etc.)       │ │
     │  └────────────────────────┘ │
     │  ┌────────────────────────┐ │
     │  │  Macrotask Queue       │ │ ← LOW PRIORITY
     │  │ (setTimeout, etc.)     │ │
     │  └────────────────────────┘ │
     └──────────────┬──────────────┘
                    │
               Event Loop
                    │
        (checks continuously)
                    │
                    ▼
           ┌────────────────────┐
           │     Call Stack     │
           └────────────────────┘
```

👉 This is a **loop**, not a one-way pipeline.

---

## ⚡ Execution Priority Rule

> **Microtasks ALWAYS run before Macrotasks**

---

## 🔥 Example 1 (Core Understanding)

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

### ✅ Output:

```
1
4
3
2
```

---

## 🧠 Why?

1. Sync code → `1`, `4`
2. Microtasks → `3`
3. Macrotasks → `2`

---

## 🔥 Example 2 (Interview Favorite)

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise1"))
  .then(() => console.log("promise2"));

console.log("end");
```

### ✅ Output:

```
start
end
promise1
promise2
timeout
```

---

## 🧠 Promises vs Callbacks

| Feature        | Callbacks       | Promises         |
| -------------- | --------------- | ---------------- |
| Queue Type     | Macrotask       | Microtask        |
| Priority       | ❌ Lower         | ✅ Higher         |
| Readability    | ❌ Callback hell | ✅ Clean chaining |
| Error Handling | ❌ Messy         | ✅ `.catch()`     |

---

### 🔹 Callback Example

```js
setTimeout(() => {
  console.log("done");
}, 1000);
```

---

### 🔸 Promise Example

```js
Promise.resolve().then(() => {
  console.log("done");
});
```

---

## 💡 Key Insight

> Even `setTimeout(fn, 0)` is NOT immediate.

It still goes through:

```
Web API → Queue → Event Loop → Call Stack
```

---

## 🔁 Event Loop Algorithm (Mental Model)

```text
WHILE (true):
  IF (call stack is empty):
     run ALL microtasks
     run ONE macrotask
```

---

## 🍔 Real-Life Analogy

* 👨‍🍳 Chef → Call Stack
* 🏭 Machines → Web APIs
* 🧍 Waiting Line → Task Queues
* 🧑‍💼 Manager → Event Loop

👉 Chef does one task at a time
👉 Machines handle slow work
👉 Manager decides what runs next

---

## 🎯 Interview One-Liner

> JavaScript uses an event loop to manage execution. Synchronous code runs in the call stack, while asynchronous tasks are handled by Web APIs and placed into queues. Microtasks (Promises) are executed before macrotasks (setTimeout), ensuring prioritized execution.

---
