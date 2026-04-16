# Linked Lists

## Summary

Linked list practice focused on pointer updates, traversal, and how singly vs doubly linked lists behave for insertions, removals, and reversals.

## Files

- `singlyLinkedListImplementation.js`: singly linked list with append, prepend, insert, remove, and two reverse implementations
- `doublyLinkedListImplementation.js`: doubly linked list with `next` and `prev` pointers plus forward/reverse traversal
- `reverse-linked-list-finally-clicked.md`: intuition notes for the 3-pointer reverse approach (`prev`, `curr`, `next`)

## Core Idea

- A singly linked list stores values in nodes
- Each node has a `value` and a `next` pointer
- A doubly linked list adds a `prev` pointer for backward movement
- The list keeps `head`, `tail`, and `length` to manage updates efficiently

## Operations in This Module

- `append(value)`: add to tail in `O(1)`
- `prepend(value)`: add to head in `O(1)`
- `traverseToIndex(index)`: walk node-by-node in `O(n)`
- `insert(index, value)`: `O(1)` at head or tail edge cases, otherwise `O(n)` due to traversal
- `remove(index)`: `O(1)` for head removal, otherwise `O(n)` due to traversal
- `reverse()` / `reverse2()`: reverse singly linked list by changing links, both `O(n)` time and `O(1)` extra space
- `printList()`: build and return an array view in `O(n)`
- `printListReverse()` (doubly list): traverse from tail to head in `O(n)`

## Trade-off

- Linked lists are good when frequent inserts/removes happen at known positions like the head
- Random access is slower than arrays because you cannot jump directly to an index
- Doubly linked lists make bidirectional traversal easier but use more memory per node

## Complexity Summary

- Access by index: `O(n)`
- Search: `O(n)`
- Insert/delete at head: `O(1)`
- Append at tail (with tracked `tail`): `O(1)`
- Insert/delete in middle: `O(n)`
- Reverse linked list: `O(n)` time, `O(1)` extra space
