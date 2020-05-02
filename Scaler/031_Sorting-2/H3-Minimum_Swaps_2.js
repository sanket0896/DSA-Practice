/**
 * Minimum Swaps 2
 * 
Problem Description
Given an array of integers A of size N that is a permutation of [0, 1, 2, ..., (N-1)]. It is allowed to swap any two elements (not necessarily consecutive). Find the minimum number of swaps required to sort the array in ascending order.  


Problem Constraints
1 <= N <= 100000
0 <= A[i] < N


Input Format
The only argument given is the integer array A.


Output Format
Return the minimum number of swaps.


Example Input
Input 1:
A = [1, 2, 3, 4, 0]
Input 2:
A = [2, 0, 1, 3]
 


Example Output
Output 1:
4
Output 2:
2
 


Example Explanation
Explanation 1:
You cannot sort it with lesser swaps.
 */

function solve(A) {
    const al = A.length;
    let ans = 0;
    
    let i = 0;
    while(i < al){
        if(i !== A[i]){
            swap(i, A[i]);
            ++ans;
        }else{
            ++i;
        }
    }

    return ans;

    function swap(x,y){
        const t = A[x];
        A[x] = A[y];
        A[y] = t;
    }
}

A = [2, 0, 1, 3];

console.log(solve(A));
