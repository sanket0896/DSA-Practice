/**
 * Longest Palindromic Subsequence
Problem Description
Given a string A. Find the longest palindromic subsequence (A subsequence which does not need to be contiguous and is a palindrome). You need to return the length of longest palindromic subsequence.  


Problem Constraints
1 <= length of(A) <= 103


Input Format
First and only integer is a string A.


Output Format
Return an integer denoting the length of longest palindromic subsequence.


Example Input
Input 1:
 A = "bebeeed"
Input 2:
 A = "aedsead"
 


Example Output
Output 1:
 4
Output 2:
 5
 


Example Explanation
Explanation 1:
 The longest palindromic subsequence is "eeee", which has a length of 4.
Explanation 2:
 The longest palindromic subsequence is "aedea", which has a length of 5.
 */

function solve(A) {
    let B = A.split("").reverse().join("");
    return LCS(A, B);

    function LCS(X, Y) {
        const xl = X.length;
        const yl = Y.length;

        let dp = [
            new Array(yl + 2).fill(0),
            new Array(yl + 2).fill(0)
        ]

        for(let p = 1; p <= xl; ++p){
            for(let n = 1; n <= yl; ++n){
                if(X[p-1] === Y[n-1]){
                    dp[1][n] = dp[0][n-1] + 1;
                }else{
                    dp[1][n] = Math.max(dp[1][n-1], dp[0][n]);
                }
            }
            dp[0] = [...dp[1]];
        }

        return dp[1][yl];
    }
}

A = "aedsead"
console.log(solve(A));
