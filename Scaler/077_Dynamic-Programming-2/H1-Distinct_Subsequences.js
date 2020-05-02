/**
 * Distinct Subsequences
Problem Description
Given two sequences A and B, count number of unique ways in sequence A, to form a subsequence that is identical to the sequence B. Subsequence : A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not). 


Problem Constraints
1 <= length(A), length(B) <= 700


Input Format
The first argument of input contains a string A.
The second argument of input contains a string B.


Output Format
Return an integer representing the answer as described in the problem statement.


Example Input
Input 1:
 A = "abc"
 B = "abc"
Input 2:
 A = "rabbbit" 
 B = "rabbit" 


Example Output
Output 1:
 1
Output 2:
 3


Example Explanation
Explanation 1:
 Both the strings are equal.
Explanation 2:
 These are the possible removals of characters:
    => A = "ra_bbit" 
    => A = "rab_bit" 
    => A = "rabb_it"

 Note: "_" marks the removed character.
 */


function solve(A, B) {
    const al = A.length;
    const bl = B.length;

    let dp = [
        new Array(bl+1).fill(0),
        new Array(bl+1).fill(0),
    ];
    dp[0][0] = 1;
    dp[1][0] = 1;

    for(let p = 1; p <= al; ++p){
        for(let n = 1; n <= bl; ++n){
            if(p < n){
                dp[1][n] = 0;
            }

            if(A[p - 1] === B[n - 1]){
                dp[1][n] = dp[0][n-1] + dp[0][n];
            }else{
                dp[1][n] = dp[0][n];
            }
        }

        dp[0] = [...dp[1]];
    }

    return dp[1][bl];
}


A = "rabra" 
B = "ra"

console.log(solve(A, B));
