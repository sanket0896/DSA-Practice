/**
 * Balanced Binary Tree
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
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

function Pair(isBal, height) {
    this.bal = isBal;
    this.ht = height;
}

function solve(root) {

    return root === null ? 0 : (isbalanced(root).bal ? 1 : 0);
    
    function isbalanced(node) {
        if(node === null){
            return new Pair(true, -1);
        }

        let {bal: lb, ht: lh} = isbalanced(node.left);
        if(!lb){
            return new Pair(lb, lh);
        }

        let {bal: rb, ht: rh} = isbalanced(node.right);
        if(!rb){
            return new Pair(rb, rh);
        }

        let maxH = Math.max(lh, rh) + 1;

        if(Math.abs(lh - rh) > 1){
            return new Pair(false, maxH)
        }

        return new Pair(true, maxH);
    }
}

root = new TreeNode(1);
c1 = new TreeNode(2);
c2 = new TreeNode(3);
root.right = c2;
root.left = c1;

console.log(root);


console.log(solve(root));
