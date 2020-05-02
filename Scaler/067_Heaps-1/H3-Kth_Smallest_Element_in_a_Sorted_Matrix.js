/**
 * Kth Smallest Element in a Sorted Matrix
 * 
 * 
Problem Description
Given a sorted matrix of integers A of size N x M and an integer B. Each of the rows and columns of matrix A are sorted in ascending order, find the Bth smallest element in the matrix. NOTE: Return The Bth smallest element in the sorted order, not the Bth distinct element.  


Problem Constraints
1 <= N, M <= 500 1 <= A[i] <= 109 1 <= B <= N * M  


Input Format
The first argument given is the integer matrix A.
The second argument given is an integer B.


Output Format
Return the B-th smallest element in the matrix.


Example Input
Input 1:
 A = [ [9, 11, 15],
       [10, 15, 17] ] 
 B = 6
Input 2:
 A = [  [5, 9, 11],
        [9, 11, 13],
        [10, 12, 15],
        [13, 14, 16],
        [16, 20, 21] ]
 B = 12
 


Example Output
Output 1:
 17
Output 2:
 16
 


Example Explanation
Explanation 1:
 6th smallest element in the sorted matrix is 17.
Explanation 2:
 12th smallest element in the sorted matrix is 16.
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

        if(l < len && this._heap[l].data < this._heap[min].data){
            min = l;
        }

        if(r < len && this._heap[r].data < this._heap[min].data){
            min = r;
        }

        if(min !== root){
            this.swap(min, root);
            this.downHeapify(min);
        }
    }

    upHeapify(node){
        if(node === 0){
            return;
        }
        let len = this._heap.length;
        
        if(node < len){
            let parent = Math.floor((node - 1) / 2);
            if(this._heap[node].data < this._heap[parent].data){
                this.swap(node, parent);
                this.upHeapify(parent);
            }
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

    add(node){
        this._heap.push(node);
        this.upHeapify(this._heap.length - 1);        
    }

    peek(){
        if(this._heap.length > 0){
            return this._heap[0];
        }
    }
}

function solve(A, B) {
    let m = A.length;
    
    if(m <= 0){
        return -1;
    }

    let heap = new CustomMinHeap(A[0].map((el,i) => ({
        data: el,
        col: i,
        row: 0
    })));   

    let ans;
    while(--B >= 0){
        ans = heap.remove();
        ans.row + 1 < m && heap.add({
            data: A[ans.row + 1][ans.col],
            col: ans.col,
            row: ans.row + 1
        });
        
    }
    return ans.data;
}

A = 
[
  [3, 5, 7, 9],
  [4, 6, 9, 12],
  [5, 9, 12, 16],
  [6, 10, 14, 19],
]
B = 15

console.log(solve(A,B));
