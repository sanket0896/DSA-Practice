/**
 * Find a peak element
 * 
Given an array of integers A, find and return the peak element in it. An array element is peak if it is NOT smaller than its neighbors. For corner elements, we need to consider only one neighbor. For example, for input array {5, 10, 20, 15}, 20 is the only peak element. Following corner cases give better idea about the problem.
1) If input array is sorted in strictly increasing order, the last element is always a peak element. 
For example, 5 is peak element in {1, 2, 3, 4, 5}.
2) If input array is sorted in strictly decreasing order, the first element is always a peak element. 
10 is the peak element in {10, 9, 8, 7, 6}.
Note: It is guranteed that the answer is unique. 
Input Format
The only argument given is the integer array A.
Output Format
Return the peak element.
Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^9 
For Example
Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    5

Input 2:
    A = [5, 17, 100, 11]
Output 2:
    100
 */

function solve(A) {
    const al = A.length;

    if(al === 0){
        return -1;
    }else if(al === 1){
        return A[0];
    }else if(A[0] >= A[1]){
        return A[0];
    }else if(A[al-1] >= A[al-2]){
        return A[al-1]
    }

    let low = 0;
    let high = al - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low+high)/2);

        if(A[mid] >= A[mid-1] && A[mid] >= A[mid+1]){
            ans = A[mid];
            break;
        }else if(A[mid] <= A[mid+1]){
            low = mid + 1;
        }else if(A[mid] <= A[mid-1]){
            high = mid - 1;
        }
    }

    return ans;
}

A = [ 18, 33, 100, 135, 203, 270, 292, 310, 356, 392, 400, 429, 436, 461, 427, 403, 399, 375, 251, 245, 173, 130, 43 ];

console.log(solve(A));
