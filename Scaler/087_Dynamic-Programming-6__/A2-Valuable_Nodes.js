/**
 * Valuable Nodes
Problem Description
Given a tree T containing N nodes numbered [1,2, ..., N] rooted at node 1. Each node has a value associated with it. You need to choose some of the nodes from the tree such that the sum of values of the chosen nodes is maximum possible. Moreover, if you have chosen a node V you cannot choose any of its children or grand children. In simple words, you have to choose a subset of nodes such that no two nodes in the chosen set have a parent-child relation or grandfather-grandchild relation between them.     


Problem Constraints
1 <= N <= 500000 1 <= val <= 10000     


Input Format
First argument is the vector A, where A[i] denotes parent of i+1 Second argument is the vector B, where B[i] if the value associated with node i+1     


Output Format
Return an integer containing the maximum possible sum. (As the answer can be large, output the answer modulo 1000000007)


Example Input
Input 1:
A = [0]
B = [1]
  Input 2:            
A = [0, 1, 2, 3]
B = [1, 50, 3, 4]
       


Example Output
Output 1:
 1
  Output 2:            
 50
       


Example Explanation
Explanation 1:
 Only node 1 is taken.
  Explanation 2:            
 Only node 2 is taken.
       
 */

function solve(A, B) {
    let len = A.length;
    let ggChildren = new Map();
    let children = new Map();
    let maxSumAtNode = new Map();
    let mod = 1000000007;

    let ans = -Infinity;

    for(let i = 0; i < len; ++i){
        children.set(i+1, []);
        ggChildren.set(i+1, []);

        let parent = A[i];

        if(parent > 0){
            children.get(parent).push(i+1);
        }

        if(parent > 0 && A[parent - 1] > 0 && A[A[parent - 1] - 1] > 0){
            let ggParent = A[A[parent - 1] - 1];
            ggChildren.get(ggParent).push(i+1);
        }
    }

    return getMaxSum(1);

    function getMaxSum(node){
        let chSum = 0;
        let ggSum = 0;
        // Find max sum of children
        children.get(node).forEach(chNode => {
            if(maxSumAtNode.has(chNode)){
                chSum =  modSum(chSum, maxSumAtNode.get(chNode)); 
            }else{
                chSum =  modSum(chSum, getMaxSum(chNode));
            }
        })

        // Find max sum of great grand children
        ggChildren.get(node).forEach(ggcNode => {
            if(maxSumAtNode.has(ggcNode)){
                ggSum =  modSum(ggSum, maxSumAtNode.get(ggcNode));
            }else{
                ggSum = modSum(ggSum, getMaxSum(ggcNode));
            }
        })

        const sumAtNode = Math.max(chSum, modSum(ggSum, B[node-1]));
        maxSumAtNode.set(node, sumAtNode);
        return sumAtNode;
    }

    function modSum(a, b) {
        return ((a % mod) + (b % mod)) % mod;
    }
}

let A = [0, 1, 1, 1, 3, 3, 6, 6];
let B = [100, 2, 3, 4, 5, 6, 7, 8];

console.log(solve(A,B));

