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

// Definition for a  binary tree node
function TreeNode(data){
    this.data = data
    this.left = null
    this.right = null
  }

function Pair(node, dist) {
   this.node = node;
   this.dist = dist;
}

function solve(A) {
   
   if(A === null){
       return [];
   }
   
   let ans = [];
   let map = new Map();
   let minDist = Infinity;
   let maxDist = -Infinity;

   let q = [new Pair(A, 0)];

   while(q.length){
       let {node, dist} = q.shift();
       levelOrder(node, dist);
       !!node.left && q.push(new Pair(node.left, dist-1));
       !!node.right && q.push(new Pair(node.right, dist+1));
   }

   for(let i = minDist; i <= maxDist; ++i){
       ans.push(map.get(i)[0]);
   }

   return ans;

   function levelOrder(node, dist){

        if(node === null){
            return;
        }

        if(map.has(dist)){
            return;
        }else{
            map.set(dist, [node.data]);
        }

        minDist = Math.min(minDist, dist);
        maxDist = Math.max(maxDist, dist);
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


for(let i = test.length - 1; i >= 0; --i){
   if(test[i] === -1){
       test[i] = null;
   }else{
       test[i] = new TreeNode(test[i]);
       let l = 2 * i + 1;
       let r = 2 * i + 2;

       if(l < test.length){
           test[i].left = test[l];
       }

       if(r < test.length){
           test[i].right = test[r];
       }
   }
}

console.log(solve(test[0]).sort());

// console.log("63 7722 9970 4002 7668 7935 1936 8299 9867 4806 5189 3778 8567 5263 189 8603 8477 6760 9299 9796 3139 1319 4025 6778 4701 9212 3082 2462 3251 1148 4323 7475 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1"
// .split(' ').map(i => +i));

test = []