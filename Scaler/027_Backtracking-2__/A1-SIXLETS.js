/**
 * SIXLETS
Problem Description
Given a array of integers A of size N and an integer B. Return number of non-empty subsequences of A of size B having sum <= 1000. 


Problem Constraints
1 <= N <= 20 1 <= A[i] <= 1000 1 <= B <= N 


Input Format
The first argument given is the integer array A. The second argument given is the integer B. 


Output Format
Return number of subsequences of A of size B having sum <= 1000.


Example Input
Input 1:
    A = [1, 2, 8]
    B = 2
Input 2:
    A = [5, 17, 1000, 11]
    B = 4


Example Output
Output 1:
3
Output 2:
0


Example Explanation
Explanation 1:
 {1, 2}, {1, 8}, {2, 8}
 */

function solve(A, B){
    const al = A.length;
    if(al < B){
        return 0;
    }
    let ans = 0;
    let sum = 0;
    recur(0,B);
    return ans;

    function recur(n, left){
        if(left === 0){
            if(sum <= 1000){
                ++ans;
            }
            return;
        }

        for(let i = n; i < al; ++i){
            sum += A[i];
            recur(i+1, left-1);
            sum -= A[i];
        }
    }
}

A = [1, 2, 8];
B = 2;

console.log(solve(A,B));
