/**
 * Longest Common Prefix
 * 
Problem Description
Given the array of strings A, you need to find the longest string S which is the prefix of ALL the strings in the array. Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2. For Example: longest common prefix of "abcdefgh" and "abcefgh" is "abc".  


Problem Constraints
0 <= sum of length of all strings <= 1000000


Input Format
The only argument given is an array of strings A.


Output Format
Return the longest common prefix of all strings in A.


Example Input
Input 1:
A = ["abcdefgh", "aefghijk", "abcefgh"]
Input 2:
A = ["abab", "ab", "abcd"];
 


Example Output
Output 1:
"a"
Output 2:
"ab"
 


Example Explanation
Explanation 1:
Longest common prefix of all the strings is "a".
Explanation 2:
Longest common prefix of all the strings is "ab".
 */

function solve(A) {
    const al = A.length;
    let smallest = A[0];
    let ans = '';

    for(let i = 1; i < al; ++i){
        smallest = A[i].length < smallest.length ? A[i] : smallest;
    }

    let diff = false;
    for(let k = 0; k < smallest.length; ++k){
        for(let i = 0; i < al; ++i){
            if(A[i][k] !== smallest[k]){
                diff = true;
                break;
            }
        }
        if(diff){
            ans = smallest.slice(0,k);
            break;
        }
        if(k === smallest.length - 1){
            ans = smallest;
        }
    }
    return ans;
}

A = ["abab", "abab", "abab"];
console.log(solve(A));
