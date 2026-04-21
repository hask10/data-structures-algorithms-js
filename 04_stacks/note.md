# Stacks

## Summary

Stack practice focused on LIFO behavior and implementing stack operations with both linked lists and arrays.

## Files

- `stackImplementation.js`: stack implemented with a linked list (`top`, `bottom`, `length`)
- `stackImplementationArrays.js`: stack implemented using an internal array
- `intuitive-stack-linked-list.md`: intuition notes for why `top` should map to list head for efficient `push`/`pop`

## Core Idea

- Stack follows **LIFO (Last In, First Out)**
- Main operations are `push`, `pop`, and `peek`
- For linked-list implementation, treating `top` as head keeps `push` and `pop` at `O(1)`

## Complexity Summary

- `push`: `O(1)`
- `pop`: `O(1)`
- `peek`: `O(1)`
- Space: `O(n)`
