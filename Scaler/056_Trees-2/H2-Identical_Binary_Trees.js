/**
 * Identical Binary Trees
Given two binary trees, write a function to check if they are equal or not. Two binary trees are considered equal if they are structurally identical and the nodes have the same value. Return 0 / 1 ( 0 for false, 1 for true ) for this problem Example :
Input : 

   1       1
  / \     / \
 2   3   2   3

Output : 
  1 or True
 */

function solve(A, B) {

    return isEqual(A, B) ? 1 : 0;
    
    function isEqual(nodeA, nodeB) {
        if(!nodeA && !nodeB){
            return true;
        }
        
        if((!nodeA && !!nodeB) || (!!nodeA && !nodeB) || (nodeA.data !== nodeB.data)){
            return false;
        }

        return isEqual(nodeA.left, nodeB.left) && isEqual(nodeA.right, nodeB.right);
    }
}