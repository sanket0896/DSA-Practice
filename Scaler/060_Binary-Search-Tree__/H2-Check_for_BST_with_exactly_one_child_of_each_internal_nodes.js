/**
 * Check for BST with exactly one child of each internal nodes
 * 
Given preorder traversal of a binary tree, check if it is possible that it is also a preorder traversal of a BST, where each internal node (non -leaf nodes) have exactly one child. CONSTRAINTS
1 <= N <= 100
INPUT
    A : [ 4, 10, 5 ,8 ]
OUTPUT
    YES
EXPLANATION
    The possible BST is:

            4
             \
             10
             /
             5
              \
              8
 */

function solve(A) {
    const al = A.length;
    let postMax = new Array(al).fill(0);
    let postMin = new Array(al).fill(0);
    let ans = 'YES';

    postMax[al-1] = A[al-1];
    postMin[al-1] = A[al-1];

    for(i = al - 2; i >= 0; --i){
        postMax[i] = Math.max(A[i], postMax[i+1]);
        postMin[i] = Math.min(A[i], postMin[i+1]);
    }

    for(i = 0; i < al-1; ++i){
        if( A[i] < A[i+1] && A[i] >= postMin[i+1] ){
            ans = 'NO';
            break;
        }

        if( A[i] >= A[i+1] && A[i] < postMax[i+1] ){
            ans = 'NO';
            break;
        }
    }

    return ans;
}

A = [ 4, 10, 5 ,8 ];
console.log(solve(A));
