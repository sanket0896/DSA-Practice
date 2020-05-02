/**
 *   201. Bitwise AND of Numbers Range
 * 
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
 */

function solve1(m, n) {
    let ma = m.toString(2).split('');
    let na = n.toString(2).split('');

    if(na.length > ma.length){
        return 0;
    }

    let ans = 0;
    let len = na.length;
    for(let i = 0; i < len; ++i){
        if(na[i] === ma[i]){
            ans += na[i] === '1' && Math.pow(2, len-1 - i);
        }else{
            break;
        }
    }

    return ans;
}

function solve2(m, n) {
    while (n > m) {
        n = n & n-1;
    }
    return n;
}

A = [43, 45];
console.log(solve2(A[0], A[1]));
console.log((45).toString(2));

