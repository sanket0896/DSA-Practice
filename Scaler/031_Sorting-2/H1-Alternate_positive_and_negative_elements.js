/**
 * Alternate positive and negative elements
 * 
Problem Description
Given an array of integers A, arrange them in an alternate fashion such that every non-negative number is followed by negative and vice-versa, starting from a negative number, maintaining the order of appearance. The number of non-negative and negative numbers need not be equal. If there are more non-negative numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array. Note: Try solving with O(1) extra space.  


Problem Constraints
1 <= length of the array <= 7000
-10^9 <= A[i] <= 109


Input Format
The first argument given is the integer array A.


Output Format
Return the modified array.


Example Input
Input 1:
A = [-1, -2, -3, 4, 5]
Input 2:
A = [5, -17, -100, -11]
 


Example Output
Output 1:
[-1, 4, -2, 5, -3]
Output 2:
[-17, 5, -100, -11]
 


Example Explanation
Explanation 1:
A = [-1, -2, -3, 4, 5]
Move 4 in between -1 and -2, A => [-1, 4, -2, -3, 5]
Move 5 in between -2 and -3, A => [-1, 4, -2, 5, -3]
 */

function solve(A) {
    const al = A.length;

    let cp = 0;
    let cn = 0;

    for(let i = 0; i < al; ++i){
        A[i] < 0 ? ++cn : ++cp;
    }
    
    for(let i = 0; i < al && cp > 0 && cn > 0; ++i){
        if(i % 2 === 0){
            --cn;
            if(A[i] < 0){
                continue;
            }else{
                let x = i+1;
                while(x < al){
                    if(A[x] < 0){
                        break;
                    }
                    ++x;
                }
                rightRotate(i,x)
            }
        }else{
            --cp;
            if(A[i] >= 0){
                continue;
            }else{
                let x = i+1;
                while(x < al){
                    if(A[x] >= 0){
                        break;
                    }
                    ++x;
                }
                rightRotate(i,x)
            }
        }
    }

    return A;

    function rightRotate(x,y) {
        const t = A[y];
        for(let i = y; i > x; --i){
            A[i] = A[i-1];
        }
        A[x] = t;
    }
}

A = [-1, -2, -3, 4, 5];
console.log(solve(A));
