// Merge sorted arrays
// Given two sorted arrays, merge them together in a new array which is also sorted

// For Example:

// const array1 = [0, 3, 4, 31];
// const array2 = [4, 6, 30];

// should return [0, 3, 4, 4, 6, 30, 31]

function mergeSorted(arr1, arr2) {
    const merged=[];
    let i=0;
    let j=0;
    // if one of the arrays is empty, return the other array 
    // if first array is empty, return second array
    if(arr1.length===0) return arr2;
    // if 2nd array is empty, return first array
    if(arr2.length===0) return arr1;
    // loop through both arrays and compare the current elements, adding the smaller one to the merged array
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }
    // Add any remaining elements from either array
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}
//the issue is that if one of the arrays is longer than the other, the remaining elements of the longer array will not be added to the merged array. To fix this, we need to add two additional while loops to handle the remaining elements of each array after one of them has been fully traversed.
mergeSorted([0, 3, 4, 31], [4, 6, 30]);

// Time Complexity: O(n + m) where n and m are the lengths of the two input arrays. This is because we need to iterate through both arrays once to merge them.
// Space Complexity: O(n + m) where n and m are the lengths of the two input arrays. This is because we are creating a new array to hold the merged result, which will have a length equal to the sum of the lengths of the two input arrays.


//No Duplicates:
// The above implementation does not handle duplicates, if there are duplicate elements in the input arrays, they will be included in the merged array. If we want to avoid duplicates, we can modify the code as follows:
function mergeSorted2(arr1, arr2) {
    const merged=[];
    let i=0;
    let j=0;
    // if one of the arrays is empty, return the other array 
    // if first array is empty, return second array
    if(arr1.length===0) return arr2;
    // if 2nd array is empty, return first array
    if(arr2.length===0) return arr1;
    // loop through both arrays and compare the current elements, adding the smaller one to the merged array
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else if(arr1[i]===arr2[j]){ //no duplicates, add only one of the elements to the merged array
            merged.push(arr1[i]);
            i++;
            j++;
        }
        else{
            merged.push(arr2[j]);
            j++;
        }
    }
    // Add any remaining elements from either array
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}