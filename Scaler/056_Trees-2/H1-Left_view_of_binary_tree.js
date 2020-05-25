/**
 * Left view of binary tree
Given a binary tree of integers. Return an array of integers representing the left view of the Binary tree. Left view of a Binary Tree is a set of nodes visible when the tree is visited from Left side Constraints
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
    [1, 2, 4, 8]

Input 2:
            1
           /  \
          2    3
           \
            4
             \
              5
Output 2:
    [1, 2, 4, 5]

 */

// Definition for a  binary tree node
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

function solve(A) {
    if(A===null) return [];

    let ans = [];
    let q = [A];
    let c = [];

    while(q.length){
        let node = q.pop();

        !!node.right && c.push(node.right);
        !!node.left && c.push(node.left);

        if(q.length === 0){
            ans.push(node.data)
            c.reverse();
            q = c;
            c = [];
        }
    }

    return ans;
}

test = [1,2,3,-1,4,-1,-1,-1,-1,-1,5];
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

console.log(solve(test[0]));
