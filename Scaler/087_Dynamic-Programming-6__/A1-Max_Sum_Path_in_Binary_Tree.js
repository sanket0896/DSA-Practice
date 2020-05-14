/**
 * Max Sum Path in Binary Tree
Problem Description
Given a binary tree T, find the maximum path sum. The path may start and end at any node in the tree.     


Problem Constraints
1 <= Number of Nodes <= 7e4 -1000 <= Value of Node in T <= 1000     


Input Format
The first and the only argument contains a pointer to the root of T, A.


Output Format
Return an integer representing the maximum sum path.


Example Input
Input 1:
  
    1
   / \
  2   3
  Input 2:            
       20
      /  \
   -10   20
        /  \
      -10  -50
       


Example Output
Output 1:
 6
  Output 2:            
 40
       


Example Explanation
Explanation 1:
     The path with maximum sum is: 2 -> 1 -> 3
  Explanation 2:            
     The path with maximum sum is: 20 -> 20
 */

// Definition for a  binary tree node
function TreeNode(data){
    this.data = data
    this.left = null
    this.right = null
}

function solve(A) {

    let ans = -Infinity;
    findMaxSumPath(A);
    return ans;

    function findMaxSumPath(node) {
        if(node === null){
            return 0;
        }

        let currVal = node.data;
        let leftSum = findMaxSumPath(node.left);
        let rightSum = findMaxSumPath(node.right);

        let passThroughSum = leftSum + currVal + rightSum;

        leftSum += currVal;
        rightSum += currVal;

        ans = Math.max(ans, leftSum, rightSum, currVal, passThroughSum);

        return Math.max(leftSum, rightSum, currVal);
    }
}

let A = [-20, -10, -20, null, null, -10, 50];

for(let i = 0; i < A.length; ++i){
    if(A[i] === null){
        continue;
    }

    let node = new TreeNode(A[i]);
    let parent = Math.floor((i - 1) / 2);

    if(parent >= 0){
        if(i % 2 === 0){
            A[parent].right = node;
        }else{
            A[parent].left = node;
        }
    }
    A[i] = node;
}

console.log(solve(A[0]));
