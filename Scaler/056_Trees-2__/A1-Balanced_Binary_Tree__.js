/**
 * Balanced Binary Tree
 * 
Given a binary tree, determine if it is height-balanced.
 Height-balanced binary tree : is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1. 
Return 0 / 1 ( 0 for false, 1 for true ) for this problem Example :
Input : 
          1
         / \
        2   3

Return : True or 1 

Input 2 : 
         3
        /
       2
      /
     1

Return : False or 0 
         Because for the root node, left subtree has depth 2 and right subtree has depth 0. 
         Difference = 2 > 1. 
 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

function solve(A) {

    return isBalanced(A).bal;

    function Pair(bal, depth) {
        this.bal = bal;
        this.depth = depth;
    }
    
    function isBalanced(node) {
        if(node === null){
            return new Pair(true, -1);
        }

        let left = isBalanced(node.left);
        if(!left.bal){ 
            return new Pair(left.bal, left.depth+1)
        }

        let right = isBalanced(node.right);
        if(!right.bal){ 
            return new Pair(right.bal, right.depth+1)
        }

        let diff = Math.abs(left.depth - right.depth);

        return new Pair(diff <= 1, Math.max(left.depth, right.depth)+1);
    }
}

// ----------------- Testing --------------------

// Definition for a  binary tree node
function TreeNode(data){
    this.data = data
    this.left = null
    this.right = null
}

let curr = null;

let A = new TreeNode(1);
A.left = new TreeNode(2);
A.right = new TreeNode(7);
curr = A.left;
curr.left = new TreeNode(3);
curr = curr.left;
curr.left = new TreeNode(4);
curr.right = new TreeNode(5);
curr = curr.right;
curr.right = new TreeNode(6);
curr = A.right;
curr.right = new TreeNode(8);
curr = curr.right;
curr.left = new TreeNode(9);
curr.right = new TreeNode(10);

let B = new TreeNode(4);
B.left = new TreeNode(5);
B.right = new TreeNode(6);
curr = B.left;
curr.left = new TreeNode(21);

console.log(solve(A));
