/**
 * Longest Common Subsequence
Problem Description
Given two strings A and B. Find the longest common subsequence ( A sequence which does not need to be contiguous), which is common in both the strings. You need to return the length of such longest common subsequence.  


Problem Constraints
1 <= Length of A, B <= 1005


Input Format
First argument is a string A.
Second argument is a string B.


Output Format
Return an integer denoting the length of the longest common subsequence.


Example Input
Input 1:
 A = "abbcdgf"
 B = "bbadcgf"
Input 2:
 A = "aaaaaa"
 B = "ababab"
 


Example Output
Output 1:
 5
Output 2:
 3
 


Example Explanation
Explanation 1:
 The longest common subsequence is "bbcgf", which has a length of 5.
Explanation 2:
 The longest common subsequence is "aaa", which has a length of 3.
 */


function solve(A, B) {
    const al = A.length;
    const bl = B.length;

    let dp = [
        new Array(bl+1).fill(0),
        new Array(bl+1).fill(0),
    ];

    for(let p = 1; p <= al; ++p){
        for(let n = 1; n <= bl; ++n){
            if(A[p - 1] !== B[n - 1]){
                dp[1][n] = Math.max(dp[0][n], dp[1][n-1]);
            }else{
                dp[1][n] = dp[0][n-1] + 1;
            }
        }
        dp[0] = [...dp[1]];
    }

    return dp[1][bl];
}

A = "bebdeeedaddecebbbbbabebedc"
B = "abaaddaabbedeedeacbcdcaaed"

console.log(solve(A,B));
