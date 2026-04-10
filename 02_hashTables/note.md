# Hash Tables

## Summary

Hash tables store data as key-value pairs and are built to make lookup, insert, and delete very fast in normal use.

## Files

- `hashTableImplementation.js`: a basic custom hash table implementation in JavaScript

## Core Idea

- A hash function converts a key into an array index
- That is why a hash table can often go to the needed location quickly instead of scanning everything

## Why People Say `O(1)`

When people say hash table operations are `O(1)`, they usually mean the common and intended case:

- the hash function spreads keys well
- the load factor stays controlled
- collisions stay small on average
- the table resizes when it gets too full

Under those assumptions:

- lookup is expected `O(1)`
- insert is expected `O(1)`
- delete is expected `O(1)`

So the clean way to say it is:

- hash tables are designed for expected `O(1)` operations

## Important Terms

- `n`: number of stored elements
- `m`: size of the underlying array
- load factor: `n / m`

## Resizing

- The array size matters because the hash result depends on it
- If the table grows, existing items must be rehashed into new positions
- Real implementations resize to keep performance stable

## Amortized Cost

Amortized means:

- one operation can be expensive
- but over many operations, the average cost per operation stays small

For hash tables:

- most inserts are cheap
- sometimes one insert triggers resizing and rehashing
- over many inserts, the average insert cost is still amortized `O(1)`

## Trade-off

- Hash tables use extra space to keep operations fast
- The goal is faster average access, not the smallest memory usage

## When Performance Gets Worse

If the assumptions above stop being true:

- many collisions can happen
- one bucket can grow too large
- operations can degrade to `O(n)`

So the full picture is:

- expected lookup / insert / delete: `O(1)`
- worst-case lookup / insert / delete: `O(n)`
- amortized insert with resizing: `O(1)`
