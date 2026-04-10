//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Naive/brute Force Solution: (needs improvement)
// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++) {
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// }
//Time Complexity: O(n^2) because we have nested loops
//Space Complexity: O(1) because we are not using any additional data structures

//Better Solution:

function firstRecurringCharacter(input) {
    const map = new Map();
    for (let i = 0; i < input.length; i++) {
        if (map.has(input[i])) {
            return input[i];
        } else {
            map.set(input[i], true);
        }
    }
    return undefined;   
}
//Time Complexity: O(n) because we are looping through the array once
//Space Complexity: O(n) because in the worst case, we are storing all the elements in the map

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])); // Output: 2
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])); // Output: 1
console.log(firstRecurringCharacter([2,3,4,5])); // Output: undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2