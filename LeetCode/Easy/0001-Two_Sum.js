/**
 * 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [0, 0];
    let map = new Map();
    
    for(let i = 0; i < nums.length; ++i){
        if(map.has(nums[i])){
            ans[0] = map.get(nums[i]);
            ans[1] = i;
            break;
        }else{
            map.set(target-nums[i], i);
        }
    }
    
    return ans;
    
    function cmp(a,b){
        return a.d === b.d ? 0 : ( a.d > b.d ? 1 : -1);
    }
};