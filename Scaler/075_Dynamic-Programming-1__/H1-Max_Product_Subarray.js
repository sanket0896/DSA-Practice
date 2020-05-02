/**
 * Max Product Subarray
 * 
Find the contiguous subarray within an array (containing at least one number) which has the largest product. Return an integer corresponding to the maximum product possible. Example :
Input : [2, 3, -2, 4]
Return : 6 

Possible with [2, 3]
 */

function solve(A) {
    const len = A.length;
    prefix = new Array(len).fill(0);
    postfix = new Array(len).fill(0);
    let prod = 1;
    let max = A[0];

    for(let i = 0; i < len; ++i){
        if(A[i] === 0){
            prod = 1;
        }else{
            prod *= A[i];
            prefix[i] = prod;
        }
    }

    prod = 1;
    for(let i = len - 1; i >= 0; --i){
        if(A[i] === 0){
            prod = 1;
        }else{
            prod *= A[i];
            postfix[i] = prod;
        }
    }

    for(let i = 0; i < len; ++i){
        max = Math.max(max, prefix[i-1] || -Infinity, prefix[i], postfix[i], postfix[i+1] || -Infinity);        
    }

    return max;

}

A = [2, 3, -2, 4]

console.log(solve(A));

