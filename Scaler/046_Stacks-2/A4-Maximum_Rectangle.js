/**
 * Maximum Rectangle
Given a 2D binary matrix of integers A containing 0's and 1's of size N x M. Find the largest rectangle containing only 1's and return its area. Note: Rows are numbered from top to bottom and columns are numbered from left to right. 
Input Format
The only argument given is the integer matrix A.
Output Format
Return the area of the largest rectangle containing only 1's.
Constraints
1 <= N, M <= 1000
0 <= A[i] <= 1
For Example
Input 1:
    A = [   [0, 0, 1]
            [0, 1, 1]
            [1, 1, 1]   ]
Output 1:
    4

Input 2:
    A = [   [0, 1, 0, 1]
            [1, 0, 1, 0]    ]
Output 2:
    1
 */

function solve(A) {
    let n = A.length;
    let m = A[0].length;
    let ans = -Infinity;
    let hist = new Array(m).fill(0);

    for(let i = 0; i < n; ++i){
        for(let j = 0; j < m; ++j){
            hist[j] = A[i][j] ? hist[j] + 1 : 0;
        }
        ans = Math.max(ans, maxHistArea(hist));
    }

    return ans;

    function maxHistArea(hist){
        let stack = [];
        let max = -Infinity;
        for(let i = 0; i < hist.length; ++i){
            while (stack.length && hist[i] <= hist[stack[stack.length - 1]]) {
                let el = stack.pop();
                let r = i;
                let l = !stack.length ? -1 : stack[stack.length - 1];
                
                max = Math.max(max, ((r-el) + (el - l - 1)) * hist[el]);
            }
            stack.push(i);
        }

        while (stack.length) {
            let el = stack.pop();
            let r = hist.length;
            let l = !stack.length ? -1 : stack[stack.length - 1];

            max = Math.max(max, ((r-el) + (el - l - 1)) * hist[el]);
        }

        return max;
    }
}

A = [   [0, 1, 0, 1],
[1, 0, 1, 0] ,   ]

console.log(solve(A));
