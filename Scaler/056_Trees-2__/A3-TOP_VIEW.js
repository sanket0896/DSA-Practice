/**
 * TOP VIEW
Given a binary tree of integers. Return an array of integers representing the Top view of the Binary tree. Top view of a Binary Tree is a set of nodes visible when the tree is visited from Top side. Note: Return the nodes in any order. Constraints
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
    [1, 2, 4, 8, 3, 7]

Input 2:
            1
           /  \
          2    3
           \
            4
             \
              5
Output 2:
    [1, 2, 3]
 */

function solve(A) {
    if(A === null){
        return [];
    }
    let ans = [];
    let map = new Map();
    let s = [];

    function Pair(node, level) {
        this.node = node;
        this.level = level;
    }
    s.push(new Pair(A,0));
    if(!map.has(0)){
        map.set(0, A.data);
        ans.push(A.data);
    }

    while (s.length) {
        let child = [];

        while (s.length) {
            let {node, level} = s.shift();
            
            if(node.left){
                child.push(new Pair(node.left, level-1))
            }
            if(node.right){
                child.push(new Pair(node.right, level+1))
            }
        }


        if(child.length > 0){
            let left = child[0];
            if (left && !map.has(left.level)) {
                map.set(left.level, left.node.data);
                ans.push(left.node.data);
            }
        }
    
        if(child.length > 1){
            let right = child[child.length-1];
            if (right && !map.has(right.level)) {
                map.set(right.level, right.node.data);
                ans.push(right.node.data);
            }
        }
        
        s = child;
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
curr = curr.right;
curr.left = new TreeNode(55);
curr.right = new TreeNode(87);
curr = curr.right;
curr.right = new TreeNode(212);
curr = curr.right;

let C = new TreeNode(29);
C.left = new TreeNode(10);
C.right = new TreeNode(15);
curr = C.left;
curr.left = new TreeNode(28);
curr.right = new TreeNode(28);
curr = curr.left;
curr.left = new TreeNode(4);
curr = C.right;
curr.left = new TreeNode(29);
curr.right = new TreeNode(4);

console.log(solve(C));