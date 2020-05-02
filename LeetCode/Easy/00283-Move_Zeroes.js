/** 
 * 283. Move Zeroes
 * 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
function solve(A) {
    const al = A.length;
    let pz = findNextZero(-1);
    let pnz = findNextNonZero(pz);

    while (pnz !== -1 && pz !== -1) {
        swap(pnz, pz);
        
        pz = findNextZero(pz);
        pnz = findNextNonZero(pz);
    }

    return A;

    function findNextZero(pos){
        for(let i = pos+1; i < al; ++i){
            if(A[i] === 0){
                return i;
            }
        }

        return -1;
    }

    function findNextNonZero(pos) {
        for(let i = pos + 1; i < al; ++i){
            if(A[i] !== 0){
                return i;
            }
        }

        return -1;
    }

    function swap(i, j) {
        let tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }
}
A = [0,1,2,0,3,0,0];
console.log(solve(A));
