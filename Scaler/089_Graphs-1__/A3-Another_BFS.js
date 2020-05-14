/**
 * Another BFS
Problem Description
Given a weighted undirected graph having A nodes, a source node C and destination node D. Find the shortest distance from C to D and if it is impossible to reach node D from C then return -1. You are expected to do it in Time Complexity of O(A + M). Note: There are no self-loops in the graph. No multiple edges between two pair of vertices. The graph may or may not be connected. Nodes are Numbered from 0 to A-1. Your solution will run on multiple testcases. If you are using global variables make sure to clear them.     


Problem Constraints
1 <= A <= 105 0 <= B[i][0], B[i][1] < A 1 <= B[i][2] <= 2 0 <= C < A 0 <= D < A     


Input Format
The first argument given is an integer A, representing the number of nodes. The second argument given is the matrix B, where B[i][0] and B[i][1] are connected through an edge of weight B[i][2]. The third argument given is an integer C, representing the source node. The fourth argument is an integer D, representing the destination node. Note: B[i][2] will be either 1 or 2.     


Output Format
Return the shortest distance from C to D. If it is impossible to reach node D from C then return -1.


Example Input
Input 1:
 
A = 6
B = [   [2, 5, 1]
        [1, 3, 1] 
        [0, 5, 2] 
        [0, 2, 2] 
        [1, 4, 1] 
        [0, 1, 1] ] 
C = 3
D = 2
  Input 2:            
A = 2
B = [   [0, 1, 1]
    ] 
C = 0
D = 1
       


Example Output
Output 1:
 4
  Output 2:            
 1
       


Example Explanation
Explanation 1:
The path to be followed will be:
    3 -> 1 (Edge weight : 1)
    1 -> 0 (Edge weight : 1)
    0 -> 2 (Edge weight : 2)
Total length of path = 1 + 1 + 2 = 4.
  Explanation 2:            
 Path will be 0-> 1.
 */

/**
 *  SOLUTION
 * 
 *  1. Add dummy nodes to edges whose weight is 2 to make add weight as 1.
 *  2. Use BFS to get the answer
 */

function solve(A, B, C, D) {
    let adjMap = new Map();
    let dummyNum = -1;
    for(let i = 0; i < B.length; ++i){
        let [x, y, w] = B[i];

        if(w === 1){
            createDoubleEdge(x,y);
        }else{
            createDoubleEdge(x, dummyNum);
            createDoubleEdge(y, dummyNum);
            --dummyNum;
        }
    }

    if(!adjMap.has(C) || !adjMap.has(D)){
        return -1;
    }

    return BFS(C, D);

    function createEdges(x, y){
        if(adjMap.has(x)){
            adjMap.get(x).push(y);
        }else{
            adjMap.set(x, [y]);
        }
    }

    function createDoubleEdge(x, y) {
        createEdges(x, y);
        createEdges(y, x);
    }

    function BFS(origin, dest) {
        if(origin === dest){
            return 0;
        }

        let visited = new Set();
        visited.add(origin);
        let q = [[origin, 0]];
        let minDist = -1;

        while(q.length){
            // console.log(q);
            
            let [node, dist] = q.shift();
            let nbr = adjMap.get(node);

            if(nbr){
                for(let i = 0; i < nbr.length; ++i){
                    if(nbr[i] === dest){
                        minDist = dist + 1;
                        break;
                    }

                    if(!visited.has(nbr[i])){
                        visited.add(nbr[i]);
                        q.push([nbr[i], dist+1]);
                    }
                }
            }

            if(minDist > -1){
                break;
            }
        }

        return minDist;
    }
}

A = 11
B = 
[
  [4, 10, 2],
  [4, 5, 2],
  [3, 9, 2],
  [3, 10, 1],
  [5, 6, 1],
  [1, 4, 2],
  [7, 10, 1],
  [4, 8, 1],
  [0, 6, 2],
  [1, 5, 1],
  [5, 9, 2],
  [1, 10, 2],
  [0, 7, 1],
]
C = 5
D = 10

console.log((solve(A,B,C,D)));
