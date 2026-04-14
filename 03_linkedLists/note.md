# Linked Lists

## Summary

Linked list practice focused on pointer updates, node traversal, and understanding where linked lists are faster or slower than arrays.

## Files

- `singlyLinkedListImplementation.js`: custom singly linked list with append, prepend, insert, remove, and traversal helpers

## Core Idea

- A singly linked list stores values in nodes
- Each node has a `value` and a `next` pointer
- The list keeps `head`, `tail`, and `length` to manage updates efficiently

## Operations in This Module

- `append(value)`: add to tail in `O(1)`
- `Prepend(value)`: add to head in `O(1)`
- `traverseToIndex(index)`: walk node-by-node in `O(n)`
- `insert(index, value)`: `O(1)` at head or tail edge cases, otherwise `O(n)` due to traversal
- `remove(index)`: `O(1)` for head removal, otherwise `O(n)` due to traversal
- `printList()`: build and return an array view in `O(n)`

## Trade-off

- Linked lists are good when frequent inserts/removes happen at known positions like the head
- Random access is slower than arrays because you cannot jump directly to an index

## Complexity Summary

- Access by index: `O(n)`
- Search: `O(n)`
- Insert/delete at head: `O(1)`
- Append at tail (with tracked `tail`): `O(1)`
- Insert/delete in middle: `O(n)`
