/**
 * Sum the Difference
 * 
Given an Array of numbers You have to find all possible non-empty subsets of the array of numbers and then, for each subset, find the difference between the largest and smallest numbers in that subset Then add up all the differences to get the number. As the number may be large, output the number modulo 1e9 + 7 (1000000007).
Example:

A = [1, 2]

All subsets
[1]    largest-smallest = 1 - 1 = 0
[2]    largest-smallest = 2 - 2 = 0
[1 2]  largest-smallest = 2 - 1 = 1

Sum of the differences = 0 + 0 + 1 = 1

So resultant number is 1
Constraints:
1 ≤ N ≤ 10000
 */

function solve(A) {
    A.sort(cmp);
    
    const al = A.length - 1;
    const mod = 1000000007;

    let ans = 0;
    let pow = 1;

    for(i = 0; i <= al; ++i){
        ans = modSum(ans, modMul(A[i] - A[al-i], pow))
        pow = modMul(pow,2);
    }

    return ans;

    function modSum(a,b){
        return ( (a%mod) + (b%mod) ) % mod;
    }

    function modMul(a,b){
        return ( (a%mod) * (b%mod) ) % mod;
    }

    function cmp(a,b) {
        return a === b ? 0 : (a > b ? 1 : -1);
    }     
}

A = [1,2,3,4];

console.log(solve(A));
