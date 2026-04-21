# Queues

## Summary

Queue practice focused on FIFO behavior and efficient insertion/removal using a linked list.

## Files

- `queueImplementation.js`: queue implemented with a linked list (`first`, `last`, `length`)
- `queue-linked-list-intuition.md`: intuition notes for enqueue/dequeue flow and design choices

## Core Idea

- Queue follows **FIFO (First In, First Out)**
- Main operations are `enqueue`, `dequeue`, and `peek`
- With linked lists, enqueue at tail and dequeue at head both stay `O(1)`

## Why Not Plain Arrays for Dequeue-heavy Queues

- `push` is `O(1)`
- `shift` is `O(n)` because remaining elements are re-indexed
- That makes arrays less ideal for queue operations that frequently remove from the front

## Complexity Summary

- `enqueue`: `O(1)`
- `dequeue`: `O(1)`
- `peek`: `O(1)`
- Space: `O(n)`
