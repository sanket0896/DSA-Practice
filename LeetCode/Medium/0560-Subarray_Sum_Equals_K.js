/**
 *   560. Subarray Sum Equals K
 * 
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum1 = function(nums, k) {
    let len = nums.length;
    let ans = 0;
    
    for(let i = 1; i < len; ++i){
        nums[i] += nums[i-1];
    }
    mergeAndCount(0, len - 1);
    
    return ans;
    

    function mergeAndCount(s, e) {
        if(s === e){
            if(nums[s] === k){
                ++ans;
            } 
                
            return [nums[s]];
        }

        let left = mergeAndCount(s, Math.floor((s+e)/2));
        let right = mergeAndCount(Math.floor((s+e)/2) + 1, e);

        // Count
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length){
            let sum = right[j] - left[i];
            
            if(sum < k){
                ++j;
            }else if(sum > k){
                ++i;
            }else{
                let lc = findReps(left, i);
                let rc = findReps(right, j);
                ans += lc * rc;
                i += lc;
                j += rc;
            }
        }

        // Merge
        let merged = [];
        i = 0;
        j = 0;

        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                merged.push(left[i]);
                ++i;
            }else{
                merged.push(right[j]);
                ++j;
            }
        }

        if(i < left.length){
            merged = merged.concat(left.slice(i));
        }else if(j < right.length){
            merged = merged.concat(right.slice(j));
        }

        return merged;
    }

    function findReps(arr, i) {
        let t = arr[i];
        let count = 0;
        while (i < arr.length) {
            if(arr[i] !== t){
                break;
            }
            ++count;
            ++i;
        }
        return count;
    }
};

var subarraySum2 = function(nums, k) {
    let len = nums.length;
    let map = {0:1};
    let sum = 0;
    let ans = 0;

    for(let i = 0; i < len; ++i){
        sum += nums[i];
        ans += map[sum - k] || 0;
        map[sum] = !!map[sum] ? map[sum]+1 : 1;
    }

    return ans;
}

A = [0,0,0,0,0,0,0,0,0,0]
B = 0

console.log(subarraySum2(A,B));
