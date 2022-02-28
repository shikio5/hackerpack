// binary search practice
// 
/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/
 var searchRange = function(nums, target) {
    
    return [findFirstIndex(nums, target), findLastIndex(nums, target)];
    
};


function findFirstIndex(nums, target){
    let index = -1;
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let pivot = left + Math.trunc((right-left)/2);
        
        if (nums[pivot] >= target) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
        
        if (nums[pivot] == target) {
            index = pivot;
        } 
    }
    
    return index;
}


function findLastIndex(nums, target){
    let index = -1;
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let pivot = left + Math.trunc((right-left)/2);
        
        if (nums[pivot] > target) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
        
        if (nums[pivot] == target) {
            index = pivot;
        } 
    }
    
    return index;
}

console.log(searchRange([5,7,7,8,8,10], 8), [3,4]);
console.log(searchRange([5,7,7,8,8,10], 7), [1,2]);
console.log(searchRange([1,2,3,5,8,9,9], 9), [5,6]);
console.log(searchRange([1,2,3,5,8,9,9], 3), [2,2]);