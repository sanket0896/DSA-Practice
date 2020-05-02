/**
 * Maximum Sum
 * 
You are given an array A of N integers and three integers X, Y, and Z. You have to find the maximum value of A[i]*X + A[j]*Y + A[k]*Z, where 1 <= i <= j <= k <= N. Input Format
1st argument is an array A
2nd argument is an integer X
3rd argument is an integer Y
4th argument is an integer Z
Output Format
Return an Integer S, i.e maximum value of (A[i]*X + A[j]*Y + A[k]*Z), where  1 <= i <= j <= k <= N.
Constraints
1 <= N <= 1e5
-1e4 <= A[i], X, Y, Z <= 1e4
For Example
Input:
    A = [1, 5, -3, 4, -2]
    X = 2
    Y = 1
    Z = -1
Output:
    18

Explanation:
    if you choose i = 2, j = 2, and k = 3 then we will get
    A[2]*X + A[2]*Y + A[3]*Z = 5*2 + 5*1 + (-3)*(-1) = 10 + 5 + 3 = 18
 */

function solve(A, B, C, D) {
    const len = A.length;
    let prefixBMax = new Array(len).fill(0);
    let postfixDMax = new Array(len).fill(0);
    let max = -Infinity;

    prefixBMax[0] = A[0] * B;
    postfixDMax[len - 1] = A[len - 1] * D;

    for(let i = 1; i < len; ++i){
        prefixBMax[i] = Math.max(prefixBMax[i-1], A[i] * B);
    }

    for(let i = len - 2; i >= 0; --i){
        postfixDMax[i] = Math.max(postfixDMax[i+1], A[i] * D);
    }

    for(let i = 0; i < len; ++i){
        max = Math.max(max, prefixBMax[i] + A[i] * C + postfixDMax[i]);
    }

    return max;
}

A = [ -41, 16, 28, -41, -1, -43, -29, 16 ]
B = 26
C = -10
D = 23

console.log(solve(A, B, C, D));
