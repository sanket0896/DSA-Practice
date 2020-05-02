/**
 * Valid Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST). Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example :
Input : 
   1
  /  \
 2    3

Output : 0 or False


Input : 
  2
 / \
1   3

Output : 1 or True 
Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

function solve(A) {
    let io = [];
    inorder(A);
    let isBST = true;

    for(let i = 1; i < io.length; ++i){
        if(io[i] <= io[i-1]){
            isBST = false;
            break;
        }
    }

    return isBST;

    function inorder(node) {
        if(node === null){
            return;
        }
        inorder(node.left);
        io.push(node.data);
        inorder(node.right);
    }
}