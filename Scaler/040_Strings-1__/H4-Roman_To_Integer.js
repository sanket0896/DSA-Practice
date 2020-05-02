/**
 * Roman To Integer
 * 
Given a string A representing a roman numeral. Convert A into integer. A is guaranteed to be within the range from 1 to 3999. NOTE: Read more details about roman numerals at Roman Numeric System 
Input Format
The only argument given is string A.
Output Format
Return an integer which is the integer verison of roman numeral string.
For Example
Input 1:
    A = "XIV"
Output 1:
    14

Input 2:
    A = "XX"
Output 2:
    20
 */

function solve(A) {
    const al = A.length;

    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let ans = 0;

    for(let i = 0; i < al - 1; ++i){
        if(map[A[i+1]] > map[A[i]]){
            ans -= map[A[i]];
        }else{
            ans += map[A[i]]
        }
    }

    ans += map[A[al - 1]];

    return ans;
}

A = "XX";
console.log(solve(A));
