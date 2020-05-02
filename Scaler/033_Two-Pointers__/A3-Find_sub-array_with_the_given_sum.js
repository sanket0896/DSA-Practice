/**
 * Find sub-array with the given sum
 * 
Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B. If the answer does not exist return an array with a single element "-1". Note: First sub-array means the sub-array for which starting index in minimum. 
Input Format
The first argument given is the integer array A.
The second argument given is integer B.
Output Format
Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".
Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^9 
1 <= B <= 10^9
For Example
Input 1:
    A = [1, 2, 3, 4, 5]
    B = 5
Output 1:
    [2, 3]

Input 2:
    A = [5, 10, 20, 100, 105]
    B = 110
Output 2:
    [-1]
 */

function solve(A, B) {
    const al = A.length;
    let ans = [-1];

    let prefixSum = new Array(al);
    prefixSum.fill(0);
    prefixSum[0] = A[0];

    for(let i = 1; i < al; ++i){
        prefixSum[i] = prefixSum[i-1] + A[i];
    }

    let i = 0;
    let j = 0;
    
    while(i <= j && j < al){
        let sum = prefixSum[j] - (i > 0 ? prefixSum[i-1] : 0);
        if(sum === B){
            ans = A.slice(i,j+1);
            break;
        }else if(sum < B){
            ++j;
        }else if(sum > B){
            ++i;
        }
    }

    return ans;
}

A = [5, 10, 20, 100, 105]
B = 110

console.log(solve(A,B));
