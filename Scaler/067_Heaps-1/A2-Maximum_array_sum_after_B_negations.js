/**
 * Maximum array sum after B negations
Given an array of integers A and an integer B. You must modify the array exactly B number of times. In single modification we can replace any one array element A[i] by -A[i]. You need to perform these modifications in such a way that after exactly B modifications, sum of the array must be maximum. 
Input Format
The argument given is the integer array A and an integer B.
Output Format
Return the maximum array sum after B modifications.
Constraints
1 <= length of the array <= 5*10^5
1 <= B <= 5 * 10^6
-100 <= A[i] <= 100
For Example
Input 1:
    A = [24, -68, -29, -9, 84]
    B = 4
Output 1:
    196
Explanation 1:
    Final array after B modifications = [24, 68, 29, -9, 84]

Input 2:
    A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]
    B = 10
Output 2:
    362
Explanation 2:
    Final array after B modifications = [57, -3, 14, 87, 42, 38, 31, 7, 28, 6]
 */

function solve(A, B) {
    const al = A.length;
    A.sort((a,b) => a === b ? 0 : (a > b ? 1 : -1));

    let i = 0;
    for(i; i < A.length; ++i){
        
        if(A[i] < 0){
            
            if(B > 0){
                A[i] *= -1;
                --B;
            }
            
            if(i+1 < al && A[i+1] >= 0){
                if(A[i+1] < A[i]){
                    ++i;
                }
                break;
            }
        }else{
            break;
        }

        if(B === 0){
            break;
        }
    }

    A[i] *= B % 2 === 1 ? -1 : 1;

    return A.reduce((acc, el) => acc+el);
}

A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]
B = 20
console.log(solve(A,B));
