/**
 * 1008. Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

 

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

 

Note: 

1 <= preorder.length <= 100
The values of preorder are distinct.
 */


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// O ( N log N )
function solve(preorder) {
    let inorder = [...preorder].sort((a,b) => a === b ? 0 : (a > b ? 1 : -1));
    let len = preorder.length;
    let i = 0;
    let root = new TreeNode(preorder[i]);
    let idx = search(preorder[i], inorder, 0, len - 1);
    root.left = createTree(0, idx-1);
    root.right = createTree(idx+1, len - 1);
    return root;

    function createTree(s, e){
        if(s > e){
            return null;
        }
        
        let node = new TreeNode(preorder[++i]);
        let idx = search(preorder[i], inorder, s, e);
        node.left = createTree(s, idx-1);
        node.right = createTree(idx+1, e);
        
        return node;
    }

    function search(k, A, start, end) {
        let idx = -1;
    
        while(start <= end){
            let mid = Math.floor((start+end) / 2);
            if(A[mid] < k){
                start = mid + 1;
            }else if(A[mid] > k){
                end = mid - 1;
            }else{
                idx = mid;
                break;
            }
        }
        return idx;
    }
}


// O ( N )
function solve2(preorder) {

    let len = preorder.length;
    let i = 0;

    return buildTree(Infinity);

    function buildTree(bound) {
        if(i === len || preorder[i] > bound){
            return null;
        }

        let node = new TreeNode(preorder[i++]);
        node.left = buildTree(node.val);
        node.right = buildTree(bound);
        return node;
    }
}

A = [8,5,1,7,10,12];
console.log(solve(A));
