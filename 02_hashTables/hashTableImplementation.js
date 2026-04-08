// Hash Table Exercise
// A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. The main advantage of a hash table is that it provides fast insertion and retrieval of values based on keys.

// In this exercise, we will implement a simple hash table in JavaScript. We will create a class called HashTable that has methods for setting and getting key-value pairs.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      //if the address/index is empty, create a new bucket (array) at that address
      this.data[address] = [];
    } //bcz of potential collisions, we push the key-value pair into the bucket (array) at that address
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) { // to retrieve a value, we first hash the key to find the correct bucket (array) at the hashed address
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // if the bucket exists, we loop through the bucket to find the key-value pair and return the value
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')