/**
 * Minimum Number of Squares
 * 
Given an integer N. Return count of minimum numbers, sum of whose squares is equal to N. Example: N=6 Possible combinations are :
(12 + 12 + 12 + 12 + 12 + 12)
(12 + 12 + 22)
So, minimum count of numbers is 3 (i.e. 1,1,2). Note: 1 ≤ N ≤ 105
 */

function solve(A) {

    let memo = {0:0};

    for(let i = 1; i <= A; ++i){
        let min = Infinity;
        let sqRoot = Math.floor(Math.sqrt(i));
        for(let j = 1; j <= sqRoot; ++j){
            let count = memo[i - (j*j)];    
            min = count < min ? count : min;
        }
        memo[i] = ++min;
    }

    return memo[A]
}

console.log(solve(12));
