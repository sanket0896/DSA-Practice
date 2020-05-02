/**
 * Minimum Characters required to make a String Palindromic
 * 
Problem Description
Given a string A of size N consisting only of uppercase alphabets. The only operation allowed is to insert characters in the beginning of the string. Find and return how many minimum characters are needed to be inserted to make the string a palindrome string. 


Problem Constraints
1 <= N <= 105


Input Format
The only argument given is a string A.


Output Format
Return an integer denoting the minimum characters that are needed to be inserted to make the string a palindrome string.


Example Input
A = "ABC"


Example Output
2


Example Explanation
Insert 'B' at beginning, string becomes: "BABC".
Insert 'C' at beginning, string becomes: "CBABC".
 */

function solve(A) {
    const al = A.length;
    
    if(al === 0){
        return 0;
    }

    let ans = 0;
    
    for(let i = al - 1; i >= 0; --i){
        if(isPalindrome(0,i)){
            ans = al - (i + 1)
            break;
        }
    }

    return ans;

    function isPalindrome(l,r) {
        let res = true;
        while(l <= r){
            if(A[l] !== A[r]){
                res = false;
            }
            ++l;
            --r;
        }
        return res;
    }
}

A = "aaaa";

console.log(solve(A));
