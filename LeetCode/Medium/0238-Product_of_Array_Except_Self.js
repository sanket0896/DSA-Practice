// 238. Product of Array Except Self
// Solution
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod = 1;
    let prodNo0 = 1;
    let c0 = 0;
    
    nums.forEach(el => {
        if(el !== 0){
            ++c0;
            prodNo0 *= el;
        }
        prod *= el;
    })
    
    return nums.map(el => {
        if(el !== 0){
            return prod/el;
        }else{
            if(c0 === 1){
                return prodNo0;
            }else{
                return prod;
            }
        }
    });
};