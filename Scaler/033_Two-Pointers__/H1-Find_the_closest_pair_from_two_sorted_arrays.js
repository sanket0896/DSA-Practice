/**
 * Find the closest pair from two sorted arrays
 * 
Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array. More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value. If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j. Note: Return an array with two elements {A[i], B[j]}. 
Input Format
The first argument given is the integer array A.
The second argument given is the integer array B.
The third argument given is integer C.
Output Format
Return the pair which has sum closest to C.
Constraints
1 <= length of both the arrays <= 100000
1 <= A[i], B[i] <= 10^9 
1 <= C <= 10^9
For Example
Input 1:
    A = [1, 2, 3, 4, 5]
    B = [2, 4, 6, 8]
    C = 9
Output 1:
    [1, 8]

Input 2:
    A = [5, 10, 20]
    B = [1, 2, 30]
    C = 13
Output 2:
    [10, 2]
 */

 /**
  * Solution Approach 1
  * 
  * For every element in A which is less than or equal to C, find the number nearest to C - A[i] in B array.
  * 
  * O[mlog(n)], m = size of A, n = size of B
  */

function solve(A, B, C) {
    const al = A.length;
    const bl = B.length;

    let minDiff = A[0] + B[0] - C;
    let ans = [A[0], B[0]];

    for(let i = 0; i < al; ++i){
        const idx = binarySearch(Math.abs(C - A[i]), B);

        const absDiff = A[i] + B[idx] - C

        if(Math.abs(absDiff) < Math.abs(minDiff)){
            minDiff = absDiff;
            ans = [A[i], B[idx]]; 
        }
    }

    return ans;

    function binarySearch(target, arr) {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            const mid = Math.floor((start+end)/2);
            
            if(mid === arr.length - 1){
                return mid;
            }

            if(arr[mid] > target && arr[mid + 1] > target){
                end = mid - 1;
            }
            else if(arr[mid] < target && arr[mid + 1] < target){
                start = mid + 1;
            }else{
                return Math.abs(arr[mid] - target) <= Math.abs(arr[mid+1] - target) ? mid : mid+1;
            }
        }
    }

}


 /**
  * Solution Approach 1
  * 
  * 2 pointer approach
  * 
  * O[m + n], m = size of A, n = size of B
  */
function solve1(A, B, C) {
    let l = 0;
    let r = B.length - 1;

    let minDiff = Number.POSITIVE_INFINITY;
    let indexes = [0,0];

    while(l < A.length && r >= 0){
        const diff = A[l] + B[r] - C;
        if(Math.abs(diff) < minDiff){
            minDiff = Math.abs(diff);
            indexes = [l,r];
        }else if(Math.abs(diff) === minDiff){
            if(l === indexes[0]){
                minDiff = Math.abs(diff);
                indexes = [l,r];
            }
        }

        if(diff >= 0){
            --r;
        }else{
            ++l;
        }
    }

    return [A[indexes[0]], B[indexes[1]]];
}

A = [ 1 ]
B = [ 2, 4 ]
C = 4

console.log(solve1(A,B,C));
