/**
 * Edit Distance
Problem Description
Given two strings A and B, find the minimum number of steps required to convert A to B. (each operation is counted as 1 step.) You have the following 3 operations permitted on a word: 
Insert a character
Delete a character
Replace a character
 


Problem Constraints
1 <= length(A), length(B) <= 450


Input Format
The first argument of input contains a string, A.
The second argument of input contains a string, B.


Output Format
Return an integer, representing the minimum number of steps required.


Example Input
Input 1:
 A = "abad"
 B = "abac"
Input 2:
 A = "Anshuman"
 B = "Antihuman


Example Output
Output 1:
 1
Output 2:
 2


Example Explanation
Exlanation 1:
 A = "abad" and B = "abac"
 After applying operation: Replace d with c. We get A = B.
 
Explanation 2:
 A = "Anshuman" and B = "Antihuman"
 After applying operations: Replace s with t and insert i before h. We get A = B.
 */

function solve(A, B) {
    const al = A.length;
    const bl = B.length;

    let dp = [
        new Array(bl+1).fill(0).map((el,i) => i),
        new Array(bl+1).fill(0)
    ];

    for(let p = 1; p <= al; ++p){
        for(n = 0; n <= bl; ++n){
            
            if(n === 0){
                dp[1][n] = dp[0][n] + 1;
                continue;
            }

            if(A[p-1] === B[n-1]){
                dp[1][n] = dp[0][n-1];
            }else{
                dp[1][n] = Math.min(dp[1][n-1], dp[0][n-1], dp[0][n]) + 1;
            }
        }

        dp[0] = [...dp[1]];
    }

    return dp[1][bl];
}

A = "Anshuman"
B = "abac"

console.log(solve(A,B));
