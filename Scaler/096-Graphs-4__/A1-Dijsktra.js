/**
 * Dijsktra
 * 
Problem Description
Given a weighted undirected graph having A nodes and M weighted edges, and a source node C. You have to find an integer array D of size A such that: => D[i] : Shortest distance form the C node to node i. => If node i is not reachable from C then -1. Note: There are no self-loops in the graph. No multiple edges between two pair of vertices. The graph may or may not be connected. Nodes are numbered from 0 to A-1. Your solution will run on multiple testcases. If you are using global variables make sure to clear them. 


Problem Constraints
1 <= A <= 1e5 0 <= B[i][0],B[i][1] < A 0 <= B[i][2] <= 1e3 0 <= C < A 


Input Format
The first argument given is an integer A, representing the number of nodes. The second argument given is the matrix B of size M x 3, where nodes B[i][0] and B[i][1] are connected with an edge of weight B[i][2]. The third argument given is an integer C. 


Output Format
Return the integer array D.


Example Input
Input 1:
A = 6
B = [   [0, 4, 9]
        [3, 4, 6] 
        [1, 2, 1] 
        [2, 5, 1] 
        [2, 4, 5] 
        [0, 3, 7] 
        [0, 1, 1] 
        [4, 5, 7] 
        [0, 5, 1] ] 
C = 4
  Input 2:      
A = 5
B = [   [0, 3, 4]
        [2, 3, 3] 
        [0, 1, 9] 
        [3, 4, 10] 
        [1, 3, 8]  ] 
C = 4
    


Example Output
Output 1:
D = [7, 6, 5, 6, 0, 6]
  Output 2:      
D = [14, 18, 13, 10, 0]
    


Example Explanation
Explanation 1:
 All Paths can be considered from the node C to get shortest path
  Explanation 2:      
 All Paths can be considered from the node C to get shortest path
 */


class Node{
    constructor(id){
        this.id = id;
        this.pos = id;
    }
}

class Pair{
    constructor(weight, node){
        this.wt = weight;
        this.node = node;
    }
}

class CustomMinHeap{
    constructor(arr){
        this.heap = arr;
        this.buildHeap();
    }

    buildHeap(){
        let lastNonLeafNodePos = Math.floor( (this.heap.length - 2) / 2 );
        for(let i = lastNonLeafNodePos; i >= 0; --i){
            this.downHeapify(i);
        }
    }

    downHeapify(pos){
        if(pos < 0 || pos >= this.heap.length){
            return;
        }

        let l = 2 * pos + 1;
        let r = 2 * pos + 2;
        let min = pos;

        if(l < this.heap.length && this.heap[l].wt < this.heap[min].wt){
            min = l;
        }

        if(r < this.heap.length && this.heap[r].wt < this.heap[min].wt){
            min = r;
        }

        if(min !== pos){
            this.swap(min, pos);
            this.downHeapify(min);
        }
    }

    upHeapify(pos){
        if(pos < 0 || pos >= this.heap.length){
            return;
        }

        let parent = Math.floor( (pos - 1) / 2);

        if(parent >= 0 && this.heap[parent].wt > this.heap[pos].wt){
            this.swap(parent, pos);
            this.upHeapify(parent);
        }

    }

    swap(i, j){
        let t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;

        this.heap[i].node.pos = i;
        this.heap[j].node.pos = j;
    }

    // Public methods

    isEmpty(){
        return this.heap.length === 0;
    }
    
    removeAt(idx){
        if(idx < 0 || idx >= this.heap.length){
            return;
        }

        let retVal = this.heap[idx];

        this.heap[idx] = this.heap[this.heap.length - 1];
        this.heap[idx].node.pos = idx;
        this.heap.pop();

        this.upHeapify(idx);
        this.downHeapify(idx);

        return retVal;
    }

    pop(){
        if(this.isEmpty()){
            return;
        }
        return this.removeAt(0);
    }

    add(elemPair){
        elemPair.node.pos = this.heap.length;
        this.heap.push(elemPair);
        this.upHeapify(elemPair.node.pos);
    }

    replaceAt(idx, node){
        this.removeAt(idx);
        this.add(node);
    }

    showAt(pos){
        if(pos < 0 || pos >= this.heap.length){
            return;
        }
        return this.heap[pos];
    }
}

function solve(nodeCount, edgeList, startNode) {
    // Create vertexList
    let vertexList = new Array(nodeCount).fill({});
    for(let i = 0; i < nodeCount; ++i){
        vertexList[i] = new Node(i);
    }

    // Create Visited array
    let visited = new Array(nodeCount).fill(false);

    // Create Adjacency Map
    let adjMap = new Map();
    for(let i = 0; i < edgeList.length; ++i){
        let [s, d, w] = edgeList[i]; // [source, destination, weight]

        if(adjMap.has(s)){
            adjMap.get(s).push(new Pair(w, vertexList[d]));
        }else{
            adjMap.set(s, [new Pair(w, vertexList[d])]);
        }
        
        if(adjMap.has(d)){
            adjMap.get(d).push(new Pair(w, vertexList[s]));
        }else{
            adjMap.set(d, [new Pair(w, vertexList[s])]);
        }
    }


    // Create min heap
    let minHeap = new CustomMinHeap( vertexList.map(vertex => {
        if(vertex.id === startNode){
            return new Pair(0, vertex);
        }else{
            return new Pair(Infinity, vertex);
        }
    }));

    // create answer array
    let ans = new Array(nodeCount).fill(-1);

    while (!minHeap.isEmpty()) {
        let {wt, node} = minHeap.pop();
        
        if(wt !== Infinity){
            let children = adjMap.get(node.id);
            
            if(children){
                for (let i = 0; i < children.length; i++) {
                    let {wt: chW, node: chN} = children[i];

                    if(visited[chN.id]){
                        continue;
                    }

                    let chPair = minHeap.showAt(chN.pos);
                    if(chPair.wt > wt + chW){
                        chPair.wt = wt + chW;
                        minHeap.replaceAt(chN.pos, chPair);
                    }
                }
            }

            ans[node.id] = wt;
        }
        visited[node.id] = true;
    }

    return ans;
}

A = 94
B = 
[
  [61, 64, 4],
  [48, 69, 2],
  [13, 34, 8],
  [38, 50, 1],
  [10, 72, 8],
  [51, 72, 1],
  [18, 49, 5],
  [47, 78, 9],
  [35, 58, 3],
  [46, 87, 1],
  [56, 78, 5],
  [6, 28, 3],
  [24, 87, 10],
  [22, 84, 9],
  [35, 53, 5],
  [16, 80, 1],
  [19, 72, 1],
  [0, 48, 3],
  [14, 43, 1],
  [43, 75, 3],
  [41, 44, 3],
  [31, 84, 2],
  [47, 87, 10],
  [9, 27, 4],
  [35, 82, 5],
  [27, 51, 8],
  [53, 80, 8],
  [15, 33, 6],
  [46, 68, 9],
  [37, 62, 5],
  [33, 93, 10],
  [26, 30, 2],
  [76, 93, 7],
  [21, 43, 5],
  [52, 87, 1],
  [4, 47, 1],
  [18, 55, 10],
  [31, 32, 6],
  [77, 92, 7],
  [42, 83, 4],
  [18, 33, 6],
  [28, 71, 5],
  [69, 85, 5],
  [21, 59, 10],
  [6, 19, 5],
  [77, 83, 3],
  [62, 82, 4],
  [37, 74, 4],
  [83, 85, 4],
  [54, 87, 8],
  [67, 80, 1],
  [19, 24, 6],
  [14, 71, 3],
  [71, 88, 5],
  [2, 43, 2],
  [34, 59, 6],
  [18, 92, 3],
  [41, 87, 10],
  [42, 86, 4],
  [29, 64, 6],
  [30, 34, 7],
  [34, 36, 10],
  [10, 74, 10],
  [48, 72, 6],
  [2, 62, 10],
  [23, 63, 2],
  [18, 65, 2],
  [17, 44, 1],
  [29, 79, 9],
  [0, 36, 10],
  [43, 79, 10],
  [1, 19, 2],
  [58, 59, 8],
  [5, 93, 8],
  [54, 84, 5],
  [24, 73, 2],
  [40, 47, 5],
  [72, 85, 1],
  [49, 66, 4],
  [4, 31, 10],
  [62, 79, 2],
  [43, 52, 9],
  [42, 92, 10],
  [26, 69, 10],
  [57, 88, 9],
  [54, 65, 6],
  [17, 42, 9],
  [7, 19, 9],
  [45, 61, 2],
  [8, 49, 7],
  [1, 17, 10],
  [14, 35, 4],
  [15, 46, 4],
  [26, 74, 8],
  [3, 86, 3],
  [1, 72, 6],
  [1, 26, 1],
  [61, 62, 7],
  [69, 76, 7],
  [20, 42, 6],
  [55, 64, 3],
  [43, 61, 8],
  [14, 59, 3],
  [75, 85, 8],
  [14, 28, 10],
  [57, 62, 5],
  [4, 28, 3],
  [15, 61, 3],
  [13, 35, 8],
  [11, 13, 2],
  [14, 20, 3],
  [2, 12, 9],
]
C = 20

console.log(solve(A, B, C));
