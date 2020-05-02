/**
 * Unique Paths in a Grid
Problem Description
Given a grid of size n * m, lets assume you are starting at (1,1) and your goal is to reach (n, m). At any instance, if you are on (x, y), you can either go to (x, y + 1) or (x + 1, y). Now consider if some obstacles are added to the grids. How many unique paths would there be? An obstacle and empty space is marked as 1 and 0 respectively in the grid. 


Problem Constraints
1 <= n, m <= 100
A[i][j] = 0 or 1


Input Format
Firts and only argument A is a 2D array of size n * m.


Output Format
Return an integer denoting the number of unique paths from (1, 1) to (n, m).


Example Input
Input 1:
 A = [
        [0, 0, 0]
        [0, 1, 0]
        [0, 0, 0]
     ]
Input 2:
 A = [
        [0, 0, 0]
        [1, 1, 1]
        [0, 0, 0]
     ]


Example Output
Output 1:
 2
Output 2:
 0


Example Explanation
Explanation 1:
 Possible paths to reach (n, m): {(1, 1), (1, 2), (1, 3), (2, 3), (3, 3)} and {(1 ,1), (2, 1), (3, 1), (3, 2), (3, 3)}  
 So, the total number of unique paths is 2. 
Explanation 2:
 It is not possible to reach (n, m) from (1, 1). So, ans is 0.
 */

function solve(A) {
    const n = A.length;
    if(n === 0) return 0;
    const m = A[0].length;

    if(A[0][0] === 1 || A[n-1][m-1] === 1){
        return 0;
    }

    let dp = new Array(m+1).fill(0);
    dp[m] = 1;

    for(let i = n-1; i >= 0; --i){
        for(let j = m-1; j >= 0; --j){
            if(A[i][j]){
                dp[j] = 0;
            }else{
                dp[j] += dp[j+1];
            }
        }
        dp[m] = 0;
    }

    return dp[0];

}

A = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
 ]
B = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
 ]

 console.log(solve(A));
 