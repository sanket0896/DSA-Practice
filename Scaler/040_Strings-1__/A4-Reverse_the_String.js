/**
 * Reverse the String
Given a string A. Return the string A after reversing the string word by word. NOTE:
A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.

Input Format
The only argument given is string A.
Output Format
Return the string A after reversing the string word by word.
For Example
Input 1:
    A = "the sky is blue"
Output 1:
    "blue is sky the"

Input 2:
    A = "this is ib"
Output 2:
    "ib is this"
 */

function solve(A) {
    A.trim();

    let len = A.length;

    if(len === 0){
        return '';
    }

    let str = A[0];
    
    for(let i = 1; i < len; ++i){
        if(A[i] === ' ' && A[i-1] === ' '){
            continue;
        }
        str += A[i];
    }

    A = str;
    len = A.length;
    str = '';

    let l = 0;
    let r = len - 1;
    
    A = reverse(A, l, r);

    l = 0;
    r = 0;
    
    while(r <= len){
        if(A[r] === ' ' || r === len){            
            str += reverse(A,l,r-1);
            if(r < len){
                str += ' ';
            }
            l = r+1;
        }
        ++r;
    }

    return str;

    function reverse(str, l, r) {
        
        res = '';
        while(l <= r){
            res += str[r];
            --r;
        }
        return res;
    }
}

A = 'this is ib';
console.log(solve(A));
