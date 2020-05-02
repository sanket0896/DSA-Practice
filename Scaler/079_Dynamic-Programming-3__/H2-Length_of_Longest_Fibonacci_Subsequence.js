/**
 * Length of Longest Fibonacci Subsequence
Problem Description
Given a strictly increasing array A of positive integers forming a sequence. A sequence X1, X2, X3, ..., XN is fibonacci like if 
N > =3
Xi + Xi+1 = Xi+2 for all i+2 <= N Find and return the length of the longest Fibonacci-like subsequence of A. If one does not exist, return 0. NOTE: A subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements. 


Problem Constraints
3 <= length of the array <= 1000 1 <= A[i] <= 109 


Input Format
The only argument given is the integer array A.


Output Format
Return the length of the longest Fibonacci-like subsequence of A.
If one does not exist, return 0.


Example Input
Input 1:
 A = [1, 2, 3, 4, 5, 6, 7, 8]
Input 2:
 A = [1, 3, 7, 11, 12, 14, 18]


Example Output
Output 1:
 5
Output 2:
 3


Example Explanation
Explanation 1:
 The longest subsequence that is fibonacci-like: [1, 2, 3, 5, 8].
Explanation 2:
 The longest subsequence that is fibonacci-like: [1, 11, 12], [3, 11, 14] or [7, 11, 18].
 The length will be 3.
 */

function solve(A) {
    const al = A.length;

    let dp = new Map();
    let ans = 0;

    let arr = new Map();
    A.forEach((el, i) => arr.set(el, i));

    for(let i = 0; i < al; ++i){
        for(let j = 0; j < al; ++j){

            let key = i * al + j;
            let prev = A[j] - A[i];
            if(j > i && prev < A[i] && arr.has(prev)){

                let prevKey = arr.get(prev) * al + i;
                if(dp.has(prevKey)){
                    dp.set(key, dp.get(prevKey) + 1);
                    ans = Math.max(ans, dp.get(key));
                }else{
                    dp.set(key, 1);
                    ans = Math.max(ans, dp.get(key));
                }
            }

        }
    }

    return ans > 0 ? ans + 2 : 0;
}

A = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(solve(A));
