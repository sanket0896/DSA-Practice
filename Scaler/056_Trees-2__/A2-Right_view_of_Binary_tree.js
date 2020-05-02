/**
 * Right view of Binary tree
 * 
Given a binary tree of integers. Return an array of integers representing the right view of the Binary tree. Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side. Constraints
1 <= Number of nodes in binary tree <= 100000
0 <= node values <= 10^9 
For Example
Input 1:
            1
          /   \
         2    3
        / \  / \
       4   5 6  7
      /
     8 
Output 1:
    [1, 3, 7, 8]

Input 2:
            1
           /  \
          2    3
           \
            4
             \
              5
Output 2:
    [1, 3, 4, 5]
 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

function solve(A) {
    let ans = [];
    let q = [];
    q.push(A);

    while (q.length) {
        let child = [];
        let l = q.shift();
        ans.push(l.data);

        if(l.right){
            child.push(l.right);
        }
        if(l.left){
            child.push(l.left);
        }

        while (q.length) {
            l = q.shift();
            if(l.right){
                child.push(l.right);
            }
            if(l.left){
                child.push(l.left);
            }
        }

        q = child;
    }

    return ans;
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
curr.right = new TreeNode(13);

console.log(solve(A));