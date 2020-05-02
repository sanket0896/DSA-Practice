/**
 * Min Sum Path in Matrix
Problem Description
Given a M x N grid A filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path. Return the minimum sum of the path. NOTE: You can only move either down or right at any point in time.  


Problem Constraints
1 <= M, N <= 1000 -1000 <= A[i][j] <= 1000  


Input Format
First and only argument is a 2-D grid A.


Output Format
Return an integer denoting the minimum sum of the path.


Example Input
Input 1:
 A = [
       [1, 3, 2]
       [4, 3, 1]
       [5, 6, 1]
     ]
Input 2:
 A = [
       [1, -3, 2]
       [2, 5, 10]
       [5, -5, 1]
     ]
 


Example Output
Output 1:
 8
Output 2:
 -1
 


Example Explanation
Explanation 1:
 The path will be: 1 -> 3 -> 2 -> 1 -> 1.
Input 2:
 The path will be: 1 -> -3 -> 5 -> -5 -> 1.
 */

 function solve(A) {
    const n = A.length;
    if(n === 0) return 0;
    const m = A[0].length;

    let dp = new Array(m+1);
    dp[m] = 0;
    for(let i = m-1; i >= 0; --i){
        dp[i] = A[n-1][i] + dp[i+1];
    }
    dp[m] = Infinity;
    let test = [];

    for(let i = n-2; i >= 0; --i){
        for(let j = m-1; j >= 0; --j){
            dp[j] = A[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }

    return dp[0];
 }

 A = [
    [1, 3, 2],
    [4, 3, 1],
    [5, 6, 1],
  ]

  console.log(solve(A));
  