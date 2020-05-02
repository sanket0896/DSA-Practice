/**
 * Let's Party
 * 
In Danceland, one person can party either alone or can pair up with another person. Can you find in how many ways they can party if there are N people in Danceland? Input Format
Given only argument A of type Integer, number of people in Danceland.
Output Format
Return a single integer N mod 10003, i.e number of ways people of Danceland can party.
Constraints
1 <= N <= 1e5 
Example Input 1: N = 3 Example Output 1: 4 Explanation 1: Let suppose three people are A, B, and C. There are only 4 ways to party as, (A, B, C) All party alone (AB, C) A and B party together and C party alone (AC, B) A and C party together and B party alone (BC, A) B and C party together and A party alone here 4 % 10003 = 4, so answer is 4.
 */

function solve(A){
    if(A === 1 || A === 2){
        return A;
    }
    let minus2 = 1;
    let minus1 = 2;
    let mod = Math.pow(10,4) + 3;
    
    for(let i = 3; i <= A; ++i){
        let t = minus1 + modMul((i-1), minus2);
        minus2 = minus1;
        minus1 = t;
    }
    
    return minus1 % mod;
    
    function modMul(a,b){
        return ((a % mod) * (b % mod)) % mod;
    }
}
A = 3;
console.log(solve(17));
