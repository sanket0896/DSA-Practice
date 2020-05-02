/**
 * 
 * 202. Happy Number
 * 
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */

function solve(num) {
    let set = new Set();
    let ans = false;

    while (!set.has(num)) {

        set.add(num);
        let mul = 10;
        let a = num;
        num = 0;

        while (a > 0) {
            num += Math.pow(a % mul, 2);
            a = Math.floor(a / mul);
        }

        if(num === 1){
            ans = true;
            break;
        }
    }

    return ans;
}

console.log(solve(234));
