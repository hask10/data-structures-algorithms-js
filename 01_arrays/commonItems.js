//Contains common item
// Given 2 arrays, create a function that
// let's a user know (true/false) whether
// these two arrays contain any common items

// For Example:

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// should return false.

// -----------

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// should return true.

function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }   
    return false;
}

//Time Complexity: O(a*b) where a and b are the lengths of the two arrays
//Space Complexity: O(1) because we are not using any data structure

//Better Solution
function containsCommonItem2(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

//Time Complexity: O(a+b) where a and b are the lengths of the two arrays
//Space Complexity: O(a) because we are using a map to store the items of the first array
// Note: We can also use a Set instead of a map to store the items of the first array, which would have the same time and space complexity./

// Python: 
// # Using Dictionary (Hash Map)
// def contains_common_item(arr1, arr2):
//     map_dict = {}
//     for item in arr1:
//         if item not in map_dict:
//             map_dict[item] = True
    
//     for item in arr2:
//         if item in map_dict:
//             return True
//     return False

// # Time Complexity: O(a+b)
// # Space Complexity: O(a)

// Even simpler with sets (Python's fastest approach):
// def contains_common_item(arr1, arr2):
//     return bool(set(arr1) & set(arr2))  # intersection

// # Time Complexity: O(a+b)
// # Space Complexity: O(a)