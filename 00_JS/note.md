## JavaScript Module Notes

This module is about JavaScript questions and concepts.

---

## ❓ Question:

If JavaScript uses a **call stack (LIFO)**, doesn’t that mean the last thing added runs first?
Isn’t that bad for execution order?

---

## ✅ Answer (My Understanding)

At first, this feels wrong.

* Stack = **Last In First Out (LIFO)**
* So it seems like the **last thing added would run first**

👉 But this is a misunderstanding of what the call stack actually stores.

---

## 🧠 Key Insight

> The call stack does NOT store independent tasks — it stores **execution context (what is currently running)**

---

## 🔍 Example

```js
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

---

### Execution Flow

```text
[ one() ]
[ two() ]
[ console.log ]
```

Now execution finishes in reverse:

```text
console.log → done
two → done
one → done
```

---

## 💡 Why LIFO is actually correct

When a function calls another function:

* You must finish the **current (inner) function first**
* Then return to the previous one

👉 This naturally follows **LIFO**

---

## 🧠 Analogy (that helps me)

It’s like opening tabs:

* Open `one()` → new tab
* Open `two()` → another tab

👉 You must **close the current tab first** before going back

---

## ❌ What if it was FIFO instead?

If it worked like a queue:

* `one()` → `two()` → `console.log`

Then execution would try to run in order:

```text
one → two → console.log
```

👉 But `two()` depends on `one()`
👉 `console.log` depends on `two()`

This would break execution ❌

---

## 🔥 Final Understanding

> LIFO in the call stack is NOT a problem — it is exactly what allows JavaScript to correctly handle nested function execution.

---

## 🎯 One-line Answer (Interview Ready)

> The call stack uses LIFO because JavaScript must complete the most recent function execution before returning to the previous one, which naturally follows stack behavior.
