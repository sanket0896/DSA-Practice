/**
 * Stairs
 * 
You are climbing a stair case and it takes A steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 
 Input Format:
The first and the only argument contains an integer A, the number of steps.
Output Format:
Return an integer, representing the number of ways to reach the top.
Constrains:
1 <= A <= 36
Example : Input 1:
A = 2
Output 1:
2
Explanation 1:
[1, 1], [2]
Input 2:
A = 3
Output 2:
3
Explanation 2:
[1 1 1], [1 2], [2 1]
 */

function solve(A) {
    
    if(A === 0 || A === 1){
        return 1;
    }
    let x = 1;
    let y = 1;
    let sum = 2;
    
    for(let i = 2; i <= A; ++i){
        let t = x + y;
        x = y;
        y = t;
    }
    
    return y;
}

console.log(solve(7));
