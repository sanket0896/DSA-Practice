/**
 * Maximum Difference on Tree
Problem Description
Given a tree with N nodes labeled from 1 to N. Each node has a certain weight assigned to it given by an integer array A of size N. Your task is to find the maximum difference in weights of two nodes where one node is a descendant of the other. NOTE:
The tree is rooted at node labeled with 1.
  


Problem Constraints
2 <= N <= 105 -103 <= A[i] <= 103   


Input Format
First argument is an integer array A of size N denoting the weight of each node. Second argument is a 2-D array B of size (N-1) x 2 denoting the edge of the tree.   


Output Format
Return an single integer denoting the maximum difference in weights of two nodes where one node is a descendant of the other.


Example Input
Input 1:
 A = [10, 5, 12, 6]
 B = [  [1, 2]
        [1, 4]
        [4, 3]
     ]
Input 2:  
 A = [11, 12]
 B = [  [1, 2]
     ]


Example Output
Output 1:
 6
Output 2:  
 1


Example Explanation
Explanation 1:
 The maximum difference occurs between the 3rd and 4th nodes. A[3] − A[4] = 12 - 6 = 6 .
Explanation 2:  
 The maximum difference occurs between the 2nd and 1st nodes. A[2] − A[1] = 12 - 11 = 1 .
  
     
 */

/**
 * SOLUTION APPROACH
 * 
 * 1. Find the min and max for each path from the root to a leaf. Max value of max-min of all paths is answer.
 *    We can use stack to keep track of min and max.
 * 
 *      TC = O(N)   SC = O(height)      N = total number of nodes
 * 
 * 2. Find max diff for the subtree rooted at each node. From each node, return the min and max values in its subtree to the parent
 * 
 *      TC = O(N)   SC = O(N)      N = total number of nodes
 */

function solve(A, B) {
    let childNodes = new Array(A.length);
    for(let i = 0; i < A.length; ++i){
        childNodes[i] = [];
    }

    for(let i = 0; i < B.length; ++i){
        let parent, child;
        if(B[i][0] < B[i][1]){
            parent = B[i][0];
            child = B[i][1];
        }else{
            parent = B[i][1];
            child = B[i][0];

        }
        childNodes[parent-1].push(child-1);
    }

    let dp = new Array(A.length).fill(null); // [[min, max]]
    let ans = 0;

    findMaxDiff(0);

    return ans;
    
    function findMaxDiff(node) {
        if(childNodes[node].length === 0){
            dp[node] = [A[node], A[node]];
        }else{
            let lMin = Infinity;
            let lMax = -Infinity;
    
            childNodes[node].forEach(child => {
                let mn, mx;
                if(dp[child]){
                    [mn, mx] = dp[child];
                }else{
                    [mn, mx] = findMaxDiff(child);
                }
                lMin = mn < lMin ? mn : lMin;
                lMax = mx > lMax ? mx : lMax;
            })
    
            ans = Math.max(ans, lMax - A[node], A[node] - lMin);
            dp[node] = [Math.min(A[node], lMin), Math.max(A[node], lMax)];
        }
        return dp[node];
    }
}

A = [ -59, -33, 34, 0, 69, 24, -22, 58, 62, -36, 5, 45, -19 ]
B = 
[
  [10, 6],
  [3, 2],
  [12, 7],
  [9, 5],
  [2, 1],
  [8, 3],
  [7, 1],
  [4, 2],
  [6, 3],
  [11, 4],
  [5, 3],
  [13, 11],
]

console.log(solve(A,B));
