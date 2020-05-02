/**
 * Array 3 Pointers
 * 
You are given 3 arrays A, B and C. All 3 of the arrays are sorted. Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized. Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) 
**abs(x) is absolute value of x and is implemented in the following manner : **
      if (x < 0) return -x;
      else return x;
Example :
Input : 
        A : [1, 4, 10]
        B : [2, 15, 20]
        C : [10, 12]

Output : 5 
         With 10 from A, 15 from B and 10 from C. 
 */

function solve(A, B, C) {
    const al = A.length;
    const bl = B.length;
    const cl = C.length;

    let i = 0;
    let j = 0;
    let k = 0;


    let ans = Infinity;

    while(i < al && j < bl && k < cl){
        const max = Math.max(A[i], B[j], C[k]);
        const min = Math.min(A[i], B[j], C[k]);
        
        ans = Math.min(ans, Math.abs(max - min));

        if(min === A[i]){
            ++i;
        }
        else if(min === B[j]){
            ++j;
        }
        else if(min === C[k]){
            ++k;
        }
    }

    return ans;

}

A = [1, 4, 10]
B = [2, 15, 20]
C = [10, 12]

console.log(solve(A,B,C));
