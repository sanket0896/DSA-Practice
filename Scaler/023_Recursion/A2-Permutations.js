/**
 * Permutations
 * 
Given a collection of numbers, return all possible permutations. Example: [1,2,3] will have the following permutations:
[1,2,3]
[1,3,2]
[2,1,3] 
[2,3,1] 
[3,1,2] 
[3,2,1]
 NOTE
No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
 */

function solve(A) {
    var al = A.length;
    var ans = [];

    perm(A,0);

    return ans.sort();

    function perm(A,index) {

        if(index === al){
            ans.push(A.slice());
            return;
        }

        for (let i = index; i < al; i++) {
            swap(A,index,i);
            perm(A,index+1);
            swap(A, index, i);
        }
    }

    function swap(A,i,j) {
        var tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }
}

A = [1,2,3];
console.log(solve(A));
