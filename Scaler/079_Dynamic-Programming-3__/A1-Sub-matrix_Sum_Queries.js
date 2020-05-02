/**
 * SuE-matrix Sum Queries
Problem Description
Given a matrix of integers A of size N x M and multiple queries Q, for each query find and return the submatrix sum. Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out. NOTE:
Rows are numbered from top to bottom and columns are numbered from left to right.
Sum may be large so return the answer mod 109 + 7.
 


Problem Constraints
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
1 <= Q <= 100000
1 <= B[i] <= D[i] <= N
1 <= C[i] <= E[i] <= M


Input Format
The first argument given is the integer matrix A.
The second argument given is the integer array B.
The third argument given is the integer array C.
The fourth argument given is the integer array D.
The fifth argument given is the integer array E.
(B[i], C[i]) represents the top left corner of the i'th query.
(D[i], E[i]) represents the bottom right corner of the i'th query.


Output Format
Return an integer array containing the submatrix sum for each query.


Example Input
Input 1:
 A = [   [1, 2, 3]
         [4, 5, 6]
         [7, 8, 9]   ]
 B = [1, 2]
 C = [1, 2]
 D = [2, 3]
 E = [2, 3]
Input 2:
 A = [   [5, 17, 100, 11]
         [0, 0,  2,   8]    ]
 B = [1, 1]
 C = [1, 4]
 D = [2, 2]
 E = [2, 4]
  


Example Output
Output 1:
 [12, 28]
Output 2:
 [22, 19]
  


Example Explanation
Explanation 1:
 For query 1: Submatrix contains elements: 1, 2, 4 and 5. So, their sum is 12.
 For query 2: Submatrix contains elements: 5, 6, 8 and 9. So, their sum is 28.
Explanation 2:
 For query 1: Submatrix contains elements: 5, 17, 0 and 0. So, their sum is 22.
 For query 2: Submatrix contains elements: 11 and 8. So, their sum is 19.
 */

function solve(A, B, C, D, E) {
    const n = A.length;
    if(n === 0) return 0;
    const m = A[0].length;
    const ql = B.length;
    const mod = Math.pow(10, 9) + 7;

    let ans = new Array(ql).fill(0);

    for(let i = 1; i < n; ++i){
        A[i][0] = modSum(A[i][0], A[i-1][0]);
    }

    for(let i = 1; i < m; ++i){
        A[0][i] = modSum(A[0][i], A[0][i-1]);
    }

    for(let i = 1; i < n; ++i){
        for(let j = 1; j < m; ++j){
            A[i][j] = modSum(A[i][j], A[i-1][j] + A[i][j-1], -A[i-1][j-1]);
        }
    }

    for(let i = 0; i < ql; ++i){
        const b = B[i] - 1;
        const c = C[i] - 1;
        const d = D[i] - 1;
        const e = E[i] - 1;

        ans[i] = modSum(
            A[d][e], 
            b-1 >= 0 ? -A[b-1][e] : 0,
            c-1 >= 0 ? -A[d][c-1] : 0,
            b-1 >= 0 && c-1 >= 0 ? A[b-1][c-1] : 0
        );
    }

    return ans;

    function modSum(...args) {

        return ( args.reduce((acc, el) => {
            if(el < 0){
                el = ( el + mod ) % mod;
            }

            return (acc + el) % mod;
        }, 0) ) % mod;
    }
}


A = [   [1, 2, 3],
[4, 5, 6],
[7, 8, 9] ,  ]
B = [1, 2]
C = [1, 2]
D = [2, 3]
E = [2, 3]
console.log(solve(A,B,C,D,E));
