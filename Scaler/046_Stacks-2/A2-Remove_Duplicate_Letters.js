/**
 * Remove Duplicate Letters
 * 
Given a string A consisting of lowercase English alphabets. Find and return lexicographically smallest string B after removing duplicate letters from A so that every letter appears once and only once. 
Input Format
The only argument given is string A.
Output Format
Return lexicographically smallest string B after removing duplicate letters from A.
Constraints
1 <= length of the string <= 200000
A consists of lowercase English alphabets only. 
For Example
Input 1:
    A = "cbacdcbc"
Output 1:
    B = "acdb"

Input 2:
    A = "bcabc"
Output 2:
    B = "abc"
 */
function solve(A){
    let stack = [];
    let visited = new Map();
    let count = new Map();

    for(let i = 0; i < A.length; ++i){
        visited.set(A[i], false);
        count.set(A[i], count.has(A[i]) ? count.get(A[i]) + 1 : 1);
    }

    for(let i = 0; i < A.length; ++i){
        // let curr char
        let ch = A[i];
        // reduce char count
        count.set(ch, count.get(ch) - 1);

        if(visited.get(ch)){
            continue;
        }

        // check if stackTop char is larger than currChar
        while(stack.length > 0 && ch < stack[stack.length - 1]){
            let sTop = stack[stack.length - 1];

            if(count.get(sTop) > 0){
                stack.pop();
                visited.set(sTop, false);
            }else{
                break;
            }
        }

        stack.push(ch);
        visited.set(ch, true);
    }

    return stack.join('');
}

console.log(solve('cbacdcbc'));
