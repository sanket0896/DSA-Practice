/**
 *  525. Contiguous Array
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
 */

function solve(A) {
    let al = A.length;
    c0 = 0;
    c1 = 0;
    let map = {0:0};
    let max = 0;

    for(let i = 0; i < al; ++i){
        A[i] === 1 ? ++c1 : ++c0;
        A[i] = c1-c0;
        if(map[A[i]] !== undefined){
            max = max < (i - map[A[i]] + 1) ? (i - map[A[i]] + 1) : max;
        }else{
            map[A[i]] = i+1;
        }
    }

    return max;
}

A = [1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1];
console.log(solve(A));
