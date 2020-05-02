/**
 * First non-repeating character in a stream of characters
 * 
Given a string A denoting a stream of lowercase alphabets. You have to make new string B. B is formed such that we have to find first non-repeating character each time a character is inserted to the stream and append it at the end to B. if no non-repeating character is found then append '#' at the end of B. 
Input Format
The only argument given is string A.
Output Format
Return a string B after processing the stream of lowercase alphabets A.
Constraints
1 <= length of the string <= 100000
For Example
Input 1:
    A = "abadbc"
Output 1:
    "aabbdd"

    Explanation:
    "a"      -   first non repeating character 'a'
    "ab"     -   first non repeating character 'a'
    "aba"    -   first non repeating character 'b'
    "abad"   -   first non repeating character 'b'
    "abadb"  -   first non repeating character 'd'
    "abadbc" -   first non repeating character 'd'

Input 2:
    A = "abcabc"
Output 2:
    "aaabc#"

    Explanation
    "a"      -   first non repeating character 'a'
    "ab"     -   first non repeating character 'a'
    "abc"    -   first non repeating character 'a'
    "abca"   -   first non repeating character 'b'
    "abcab"  -   first non repeating character 'c'
    "abcabc" -   no non repeating character so '#'
 */

function solve(A) {
    const al = A.length;
    let ans = '';
    let q = [];
    let freq = {};

    for(i = 0; i < al; ++i){
        freq[A[i]] = freq[A[i]] ? ++freq[A[i]] : 1;

        if(freq[A[i]] === 1){
            q.push(A[i]);
        }else{
            if(q.length && q[0] === A[i]){
                while(q.length && freq[q[0]] !== 1){
                    q.shift();
                }
            }
        }
        ans += q.length ? q[0] : '#';
    }

    return ans;
}

A = "abcabc";

console.log(solve(A));
