/**
 * Odd Palindrome
Problem Description
A palindrome string is a string which reads the same forward and backward. If a palindrome string is of odd length l, then (l+1)/2th character (1 index based) is said to be the centre of the palindrome. You are given a string A. Return an array X of integers where X[i] = (number of odd length palindrome subsequence of A with A[i] as the centre) modulo (109 + 7). A subsequence of A is a string which can be derived from A by deleting some of its character. 


Problem Constraints
1 <= length(A) <= 1000
Every character of A will be a lowercase English letter 'a' - 'z'.


Input Format
First and only argument is a string A.


Output Format
Return an integer array X as mentioned in the question.


Example Input
Input 1:
 A = "xyzx"
Input 2:
 A = "ababzz"


Example Output
Output 1:
 [1, 2, 2, 1]
Output 2:
 [1, 2, 2, 1, 1, 1]


Example Explanation
Explanation 1:
 
 Index(i)  |   Palindrome subsequences with centre i
   0       |   a        
   1       |   y, xyx
   2       |   z, xzx
   3       |   x
 So, output array is [1, 2, 2, 1]

Explanation 2:
 Index(i)  |  Palindrome subsequences with centre i
   0       |  a    
   1       |  b, aba
   2       |  a, bab
   3       |  b
   4       |  z
   5       |  z
 So, output array is [1, 2, 2, 1, 1, 1]  
 */

function solve(A) {
    let al = A.length;
    let B = A.split('').reverse().join('');
    const mod = Math.pow(10,9) + 7;

    let dp = [
        new Array(al + 1).fill(0),
        new Array(al + 1).fill(0),
    ];

    let ans = new Array(al);

    ans[0] = 1;

    for(let i = 1; i < al; ++i){
        ans[i] = 1 + commonSeqCount(A, B, i - 1, al-1-i);
    }

    return ans;

    function commonSeqCount(X, Y, currIdx, reqdIdx) {
        for(n = 1; n <= reqdIdx; ++n){
            if(X[currIdx] === Y[n-1]){
                dp[1][n] = modSum(dp[1][n-1], dp[0][n]) + 1;
            }else{
                dp[1][n] = modSum(dp[1][n-1], dp[0][n] - dp[0][n-1]);
            }
        }
        dp[0] = [...dp[1]];
        dp[1].fill(0);
        return dp[0][reqdIdx];
    }

    function modSum(a, b) {
        if(a<0){
            a = (a+mod) % mod;
        }

        if(b<0){
            b = (b+mod) % mod;
        }
        return (a + b) % mod;
    }
}

A = "ababzz"
console.log(solve(A));
