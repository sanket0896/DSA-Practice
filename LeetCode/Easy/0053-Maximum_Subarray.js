/**
 * 53. Maximum Subarray
 * 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

function solve(nums){
    
    let max = -Infinity;
    let len = nums.length;
    let currMax = 0;

    for(let i = 0; i < len; ++i){
        currMax+= nums[i];

        if(currMax > max){
            max = currMax;
        }
        if(currMax < 0){
            currMax = 0;
        }
    }

    return max;
}
A = [4,-2,13]
console.log(solve(A));
