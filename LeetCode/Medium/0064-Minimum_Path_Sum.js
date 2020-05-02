/**
 * 64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

function solve(A){
    let m = A.length;
    if(!m) return 0;
    let n = A[0].length;

    for(let i = m-1; i >= 0; --i){
        for(let j = n - 1; j >= 0; --j){
            let right = j+1 < n ? A[i][j+1] : -1;
            let  bottom= i+1 < m ? A[i+1][j] : -1;

            if(right === -1 || bottom === -1){
                let s = right+bottom;
                A[i][j] += s !== -2 ? Math.max(right, bottom) : 0;
            }else{
                A[i][j] += Math.min(right, bottom);
            }
        }
    }

    return A[0][0];    
}

A = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
console.log(solve(A));
