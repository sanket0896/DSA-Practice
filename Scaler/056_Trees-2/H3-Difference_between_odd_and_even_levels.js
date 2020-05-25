/**
 * Difference between odd and even levels
Given a binary tree of integers. Find the difference between the sum of nodes at odd level and sum of nodes at even level. Note: Consider the level of root node as 1. Constraints
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
    10
    Sum of nodes at odd level = 23
    Sum of ndoes at even level = 13

Input 2:
            1
           /  \
          2    10
           \
            4
Output 2:
    -7
    Sum of nodes at odd level = 5
    Sum of ndoes at even level = 12
 */

function solve(A) {
    let sum = [0, 0];

    let q = [A];
    let c = [];

    let level = true;

    while(q.length){
        let node = q.pop();

        sum[+level] += node.data;

        !!node.left && c.push(node.left);
        !!node.right && c.push(node.right);

        if(!q.length){
            level = !level;
            q = c;
            c = [];
        }
    }

    return sum[1] - sum[0];
}

