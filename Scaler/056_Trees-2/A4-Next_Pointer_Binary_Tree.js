/**
 * Next Pointer Binary Tree
Given a binary tree
    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.
 Note:
You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
Example : Given the following perfect binary tree,
         1
       /  \
      2    5
     / \  / \
    3  4  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 5 -> NULL
     / \  / \
    3->4->6->7 -> NULL
Note that using recursion has memory overhead and does not qualify for constant space.
 */

// Definition for a  binary tree node
function TreeNode(data){
    this.data = data;
    this.next = null
    this.left = null
    this.right = null
}

function getNextParent(parent) {
    if(!parent) return null;
    let node = parent;
    let child = node.left || node.right;
    while (!child && !!node.next) {
        node = node.next;
        child = node.left || node.right;
    }
    return child;
}

function solve(A) {
    
   let parent = A;
   let nextParent = getNextParent(A);
   let child = null;
   
   while (nextParent) {
       while(parent !== null){
           let children = [];

           !!parent.left && children.push(parent.left);
           !!parent.right && children.push(parent.right);
   
           while (children.length) {
               let node = children.shift();
   
               if(child === null){
                   child = node;
               }else{
                   child.next = node;
                   child = child.next;
               }
           }
   
           parent = parent.next;
       }

       parent = nextParent;
       nextParent = getNextParent(parent);
       child = null;
   }

   return A;
}

test = 
    "1 2 3 4 21 32 7 -1 8 -1 -1 9 -1 -1 10"
    .split(' ').map(i => +i);

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

let ans = solve(test[0]);

let p = ans;
let np = getNextParent(p);

while (!!p) {
    let out = [];
    while (!!p) {
        out.push(p.data);
        p = p.next;
    }
    console.log(out);
    p = np;
    np = getNextParent(p);
}

// console.log(ans);
