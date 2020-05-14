/**
 * Largest Distance between nodes of a Tree
Problem Description
Find largest distance Given an arbitrary unweighted rooted tree which consists of N (2 <= N <= 40000) nodes. The goal of the problem is to find largest distance between two nodes in a tree. Distance between two nodes is a number of edges on a path between the nodes (there will be a unique path between any pair of nodes since it is a tree). The nodes will be numbered 0 through N - 1. The tree is given as an array A, there is an edge between nodes A[i] and i (0 <= i < N). Exactly one of the i's will have A[i] equal to -1, it will be root node.   


Problem Constraints
2 <= |A| <= 40000


Input Format
First and only argument is vector A


Output Format
Return the length of the longest path


Example Input
Input 1:
 
A = [-1, 0]
  Input 2:        
 
A = [-1, 0, 0]
     


Example Output
Output 1:
 2
  Output 2:        
 3
     


Example Explanation
Explanation 1:
 Path is 0 -> 1.
  Explanation 2:        
 Path is 1 -> 0 -> 2.
 */

/**
 * SOLUTION
 * 
 * 1. Do a DFS from root and find the farthest node from root.
 * 2. Now mark that node as root and do DFS from there to find farthest node from that node. This gives us the answer.
 */

function solve(A) {
    let adjMap = new Map();
    let n = A.length;
    for(let i = 0; i < n; ++i){
        if(adjMap.has(A[i])){
            adjMap.get(A[i]).push(i);
        }else{
            adjMap.set(A[i], [i])
        }

        if(adjMap.has(i)){
            adjMap.get(i).push(A[i]);
        }else{
            adjMap.set(i, [A[i]])
        }
    }
    
    let startNode = adjMap.get(-1)[0];
    let farthestNode = BFS(startNode)[0];
    return BFS(farthestNode)[1];
    
    function BFS(startNode) {
        let visited = new Array(n).fill(false);
        let maxDistNode = [startNode, 0];
        let q = [maxDistNode];
        visited[startNode] = true;

        while(q.length){
            let [node, dist] = q.shift();
            if(dist > maxDistNode[1]){
                maxDistNode = [node, dist];
            }

            let nbr = adjMap.get(node);

            if(nbr){
                for(let i = 0; i < nbr.length; ++i){
                    if(nbr[i] === -1){
                        continue;
                    }
                    if(!visited[nbr[i]]){
                        visited[nbr[i]] = true;
                        q.push([nbr[i], dist+1]);
                    }
                }
            }
        }

        return maxDistNode;
    }
}

A = [ -1, 0, 1, 2, 2, 4, 1, 6, 6, 5 ]

console.log(solve(A));
