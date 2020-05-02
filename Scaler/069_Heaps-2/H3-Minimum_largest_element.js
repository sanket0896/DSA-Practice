/**
 * Minimum largest element
Problem Description
Given an array A of N numbers, you have to perform B operations. In each operation, you have to pick any one of the N elements and add original value(value stored at index before we did any operations) to it's current value. You can choose any of the N elements in each operation. Perform B operations in such a way that the largest element of the modified array(after B operations) is minimised. Find the minimum possible largest element after B operations.      


Problem Constraints
1 <= N <= 106
0 <= B <= 105
-105 <= A[i] <= 105


Input Format
First argument is an integer array A.
Second argument is an integer B.


Output Format
Return an integer denoting the minimum possible largest element after B operations.


Example Input
Input 1:
 A = [1, 2, 3, 4] 
 B = 3
Input 2:
 A = [5, 1, 4, 2] 
 B = 5
     


Example Output
Output 1:
 4
Output 2:
 5
     


Example Explanation
Explanation 1:
 Apply operation on element at index 0, the array would change to [2, 2, 3, 4]
 Apply operation on element at index 0, the array would change to [3, 2, 3, 4]
 Apply operation on element at index 0, the array would change to [4, 2, 3, 4]
 Minimum possible largest element after 3 operations is 4.
Explanation 2:
 Apply operation on element at index 1, the array would change to [5, 2, 4, 2]
 Apply operation on element at index 1, the array would change to [5, 3, 4, 2]
 Apply operation on element at index 1, the array would change to [5, 4, 4, 2]
 Apply operation on element at index 1, the array would change to [5, 5, 4, 2]
 Apply operation on element at index 3, the array would change to [5, 5, 4, 4]
 Minimum possible largest element after 5 operations is 5.
 */

class CustomMinHeap{

    constructor(A){
        this._heap = A;  
        this.buildHeap();
    }

    buildHeap(){
        let si = Math.floor((this._heap.length - 2) / 2);

        for(let i = si; i >=0; --i){
            this.downHeapify(i);
        }
    }

    downHeapify(root){
        let al = this._heap.length;
        let min = root;
        let l = root * 2 + 1;
        let r = root * 2 + 2;

        if(l < al && this._heap[l].data < this._heap[min].data){
            min = l;
        }

        if(r < al && this._heap[r].data < this._heap[min].data){
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

        let parent = Math.floor((node - 1) / 2);

        if(node < this._heap.length && this._heap[node].data < this._heap[parent].data){
            this.swap(node, parent);
            this.upHeapify(parent);
        }
    }

    swap(i, j){
        const t = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = t;
    }

    peek(){
        if(!this.isEmpty()){
            return this._heap[0];
        }
    }

    remove(){
        if(!this.isEmpty()){
            let ret = this._heap[0];
            this._heap[0] = this._heap[this._heap.length - 1];
            this._heap.pop();            
            this.downHeapify(0);
            return ret;
        }
    }

    add(elem){
        this._heap.push(elem);
        this.upHeapify(this._heap.length - 1);
    }

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this._heap.length === 0;
    }
}

function solve(A, B) {
    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i < A.length; ++i){
        min = A[i] < min ? A[i] : min;
        max = A[i] > max ? A[i] : max;
    }

    if( min<= 0){
        return max;
    }

    let heap = new CustomMinHeap(A.map((el,i) => ({data: el+el, idx: i})));

    while(--B >= 0){
        min = heap.remove();
        max = min.data > max ? min.data : max;
        min.data += A[min.idx];        
        heap.add(min);
    }
    
    return max;
}

A = [1, 2, 3, 4] 
B = 3

console.log(solve(A,B));
