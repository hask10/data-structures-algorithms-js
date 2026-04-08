/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// bruteforce solution
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length-1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // ✅ direct return
            }
        }
    }
};
//Time complexity: O(n^2) - nested loops
//Space complexity: O(1) - no additional data structures used

// optimized solution using a hash map
var twoSum2 = function(nums, target) {
    const numMap = new Map(); // create a hash map to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // calculate the complement
        
        if (numMap.has(complement)) { // check if the complement exists in the map
            return [numMap.get(complement), i]; // return the indices of the complement and current number
        }
        
        numMap.set(nums[i], i); // add the current number and its index to the map
    }   
};
//Time complexity: O(n) - single pass through the array
//Space complexity: O(n) - in the worst case, all numbers are stored in the map

// using objects
var twoSum3 = function(nums, target) {
    const numMap = {}; // create an object to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // calculate the complement
        
        if (complement in numMap) { // check if the complement exists in the object
            return [numMap[complement], i]; // return the indices of the complement and current number
        }
        
        numMap[nums[i]] = i; // add the current number and its index to the object
    }   
};
//Time complexity: O(n) - single pass through the array
//Space complexity: O(n) - in the worst case, all numbers are stored in the object

//example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum2([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum3([2, 7, 11, 15], 9)); // Output: [0, 1]  