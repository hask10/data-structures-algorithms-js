// create a function that reverses a string:
// Hi My name is Hamad should be :
// damah si eman yM iH
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
//Time Complexity: O(n) where n is the length of the string
//Space Complexity: O(n) because we are creating a new string to store the reversed string

// 🔴 The Hidden Problem (IMPORTANT)
// because strings are immutable in JavaScript, when we do: internally the new string is created and the old string is copied each time we concatenate a character to the new string. So the time complexity of this method is actually O(n²) because we are doing n concatenations and each concatenation takes O(n) time to copy the old string.
// 👉 This line:

// result += str[i];

// Each time:

// A new string is created
// Old string is copied
// What actually happens internally:

// Iteration 1 → "o"
// Iteration 2 → "ol" (copy "o" + "l")
// Iteration 3 → "oll" (copy "ol" + "l")
// ...

// 👉 Total work becomes:

// 1 + 2 + 3 + ... + n = O(n²)
// 🔹 So Reality is:
// Method	Time Complexity	Notes
// split + reverse + join	O(n)	Efficient, optimized
// manual += loop	❌ O(n²)	Hidden cost

//Better Solution:

function reverseString2(str) {
    let reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}
//Time Complexity: O(n) where n is the length of the string
//Space Complexity: O(n) because we are creating a new array to store the characters of the string and then a new string to store the reversed string
// convert the string to an array, reverse the array, and then join it back to a string. This method is more efficient because it avoids the hidden cost of string concatenation in a loop.
function reverseString3(str) {
    return str.split('').reverse().join('');
}
//Time Complexity: O(n) where n is the length of the string
//Space Complexity: O(n) because we are creating a new array to store the characters of the string and then a new string to store the reversed string