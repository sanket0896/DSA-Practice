/**
 * A2
 * Gray Code
The gray code is a binary numeral system where two successive values differ in only one bit. Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0. For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
00 - 0
01 - 1
11 - 3
10 - 2
There might be multiple gray code sequences possible for a given n. Return any such sequence.
 */

function solve(n) {
    
    return grayCodeOf(n);
    
    function grayCodeOf(n){

        if(n === 1){
            return [0,1];
        }

        let grayCode = grayCodeOf(n-1);

        const len = grayCode.length;
        const orFactor = 1 << (n-1);

        for(let i = len - 1; i >= 0; --i){
            grayCode.push(grayCode[i] | orFactor);
        }

        return grayCode;
    }

}

const A = 3;

console.log(solve(A));
