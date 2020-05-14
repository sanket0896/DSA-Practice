/**
 * Number of islands
Problem Description
Given a matrix of integers A of size N x M consisting of 0 and 1. A group of connected 1's forms an island. From a cell (i, j) such that A[i][j] = 1 you can visit any cell that shares a corner with (i, j) and value in that cell is 1.  More formally, from any cell (i, j) if A[i][j] = 1 you can visit:  
(i-1, j) if (i-1, j) is inside the matrix and A[i-1][j] = 1.
(i, j-1) if (i, j-1) is inside the matrix and A[i][j-1] = 1.
(i+1, j) if (i+1, j) is inside the matrix and A[i+1][j] = 1.
(i, j+1) if (i, j+1) is inside the matrix and A[i][j+1] = 1.
(i-1, j-1) if (i-1, j-1) is inside the matrix and A[i-1][j-1] = 1.
(i+1, j+1) if (i+1, j+1) is inside the matrix and A[i+1][j+1] = 1.
(i-1, j+1) if (i-1, j+1) is inside the matrix and A[i-1][j+1] = 1.
(i+1, j-1) if (i+1, j-1) is inside the matrix and A[i+1][j-1] = 1.
 Return the number of islands. NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.  


Problem Constraints
1 <= N, M <= 100 0 <= A[i] <= 1  


Input Format
The only argument given is the integer matrix A.


Output Format
Return the number of islands.


Example Input
Input 1:
 A = [ 
       [0, 1, 0]
       [0, 0, 1]
       [1, 0, 0]
     ]
Input 2:
 A = [   
       [1, 1, 0, 0, 0],
       [0, 1, 0, 0, 0],
       [1, 0, 0, 1, 1],
       [0, 0, 0, 0, 0],
       [1, 0, 1, 0, 1],
     ]
 


Example Output
Output 1:
 2
Output 2:
 5
 


Example Explanation
Explanation 1:
 The 1's at position A[0][1] and A[1][2] forms one island.
 Other is formed by A[2][0].
Explanation 2:
 There 5 island in total.
 */


/**
 *  SOLUTION
 *  
 *  1. Go through all elemnts of the matrix
 *  2. Whenevr 1 is encountered, increment answer counter and visit all its neighbours recursively
 *  3. When a cell is visited, mark it as 0 so that it doesn't get picked up next time
 */

function solve(A){
    let n = A.length;
    if(n===0)return 0;
    let m = A[0].length;
    let count = 0;

    for(let i = 0; i < n; ++i){
        for(let j = 0; j < m; ++j){
            if(A[i][j] === 1){
                ++count;
                traverseNeighbours(i, j);
            }
        }
    }

    return count;

    function traverseNeighbours(row, col){
        if(row < 0 || row >= n || col < 0 || col >= m || A[row][col] === 0){
            return;
        }
        A[row][col] = 0;
        traverseNeighbours(row-1, col);
        traverseNeighbours(row, col+1);
        traverseNeighbours(row+1, col);
        traverseNeighbours(row, col-1);
        traverseNeighbours(row-1, col+1);
        traverseNeighbours(row+1, col+1);
        traverseNeighbours(row-1, col-1);
        traverseNeighbours(row+1, col-1);
    }
}

A = [   
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
  ]

console.log(solve(A));
