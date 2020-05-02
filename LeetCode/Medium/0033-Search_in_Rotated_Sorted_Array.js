/**
 * 33. Search in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */

function solve(nums, target) {
    let low = 0;
    let high = nums.length-1;
    let first = nums[0];
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] > target){
            if(target < first && nums[mid] >= first){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }else if(nums[mid] < target){
            if(target >= first && nums[mid] < first){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
            ans = mid;
            break;
        }
    }

    return ans;
}

nums = [4,5,6,7,-2,-1,0,1,2];
target = 3;

console.log(solve(nums, target));
