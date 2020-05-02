/**
 * Largest Number
 * 
Problem Description
Given a list A of non negative integers, arrange them such that they form the largest number. Note: The result may be very large, so you need to return a string instead of an integer. 


Problem Constraints
1 <= len(A) <= 100000
0 <= A[i] <= 2*109


Input Format
First argument is an array of integers.


Output Format
Return a string representing the largest number.


Example Input
Input 1:
A = [3, 30, 34, 5, 9]


Example Output
Output 1:
9534330


Example Explanation
Explanation 1:
A = [3, 30, 34, 5, 9]
Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
 */

function solve(A) {
    let ans = "";
    const al = A.length - 1;

    A.sort(cmp);

    A.forEach((el,i) => {
        if(i < al && el === 0){
            return;
        }
        ans += el;
    });

    return ans;
    
    function cmp(a,b) {
        if(a === b){
            return 0;
        }

        const pre = "" + a + b;
        const post = "" + b + a;

        return pre > post ? -1 : 1;
    }
}

A = [0,0,0,0,0];
console.log(solve(A));

