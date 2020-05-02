/**
 * B Closest Points to Origin
 * 
Problem Description
We have a list A, of points(x,y) on the plane. Find the B closest points to the origin (0, 0). Here, the distance between two points on a plane is the Euclidean distance. You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.) NOTE: Euclidean distance between two points P1(x1,y1) and P2(x2,y2) is sqrt( (x1-x2)^2 + (y1-y2)^2 ).    


Problem Constraints
1 <= B <= length of the list A <= 100000
-100000 <= A[i][0] <= 100000
-100000 <= A[i][1] <= 100000


Input Format
The argument given is list A and an integer B.


Output Format
Return the B closest points to the origin (0, 0) in any order.


Example Input
Input 1:
 A = [ 
       [1, 3],
       [-2, 2] 
     ]
 B = 1
Input 2:
 
 A = [
       [1, -1],
       [2, -1]
     ] 
 B = 1


Example Output
Output 1:
 [ [-2, 2] ]
Output 2:
 [ [1, -1] ]


Example Explanation
Explanation 1:
 The Euclidean distance will be sqrt(10) for point [1,3] and sqrt(8) for point [-2,2].
 So one closest point will be [-2,2].
Explanation 2:
 The Euclidean distance will be sqrt(2) for point [1,-1] and sqrt(5) for point [2,-1].
 So one closest point will be [1,-1].
 */

class CustomMinHeap{
    constructor(arr){
        this._heap = arr;        
        this.createHeap();
    }

    createHeap(){
        let st = Math.floor((this._heap.length - 2) / 2);
        for(st; st >= 0; --st){
            this.downHeapify(st);
        }
    }

    downHeapify(root){
        let len = this._heap.length;
        let min = root;
        let l = root * 2 + 1;
        let r = root * 2 + 2;

        if(l < len && this._heap[l].dist < this._heap[min].dist){
            min = l;
        }

        if(r < len && this._heap[r].dist < this._heap[min].dist){
            min = r;
        }

        if(min !== root){
            this.swap(min, root);
            this.downHeapify(min);
        }
    }

    swap(i,j){
        const t = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = t;
    }

    remove(){
        if(this._heap.length){
            let retVal = this._heap[0];
            this._heap[0] =this._heap[this._heap.length - 1];
            this._heap.pop();
            this.downHeapify(0);
            return retVal;
        }
    }
}

function solve(A, B) {
    let heap = new CustomMinHeap(A.map((el, i) => ({
        dist: el[0]*el[0] + el[1]*el[1],
        idx: i
    })));

    let ans = [];

    while (--B >= 0) {
        ans.push(A[heap.remove().idx]);
    }
    return ans;
}

A = [
    [1, -1],
    [2, -1]
  ] 
B = 1
console.log(solve(A,B));
