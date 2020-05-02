/**
 * 543. Diameter of Binary Tree
 * 
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    return diameter(root).diameter;
    

    function diameter(node) {

        if(node === null){
            return new Pair(0,-1);
        }

        let left = diameter(node.left);
        let right = diameter(node.right);
        let self = left.height + right.height + 2;

        let d = Math.max(left.diameter, right.diameter, self);
        let h = Math.max(left.height, right.height) + 1;

        return new Pair(d,h);
    }
};

var Pair = function(d, h){
    this.diameter = d;
    this.height = h;
}