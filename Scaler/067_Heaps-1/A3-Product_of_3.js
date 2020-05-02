/**
 * Product of 3
 * 
You are given an array A that has N integers. You have to find the product of the 3 largest integers in array A from range 1 to i, where i goes from 1 to N. Return an array where the integer at index i of the array is the product of the largest 3 integers in range 1 to i in array A. If i<3, then the integer at index i is -1. Input Format
A: Array of integers
Output Format
Return an array where the integer at index i of the array is the product of the largest 3 integers in range 1 to i in array A. If i<3, then the integer at index i is -1.
Constraints:
1 <= size(A) <= 10^5
0 <= Integers in A <= 10^3
Example Input
A: [1, 2, 3, 4, 5]
Example Output
[-1, -1, 6, 24, 60]
Explanation For i=1, i<3 so ans[i] = -1. For i=2, i<3 so ans[i] = -1. For i=3, ans[i] = 123 = 6. For i=4, ans[i] = 432 = 24. For i=5, ans[i] = 543 = 60.
 */

class CustomMaxHeap{

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
        let max = root;
        let l = root * 2 + 1;
        let r = root * 2 + 2;

        if(l < al && this._heap[l] > this._heap[max]){
            max = l;
        }

        if(r < al && this._heap[r] > this._heap[max]){
            max = r;
        }

        if(max !== root){
            this.swap(max, root);
            this.downHeapify(max);
        }
    }

    upHeapify(node){
        if(node === 0){
            return;
        }

        let parent = Math.floor((node - 1) / 2);

        if(node < this._heap.length && this._heap[node] > this._heap[parent]){
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

    isEmpty(){
        return this._heap.length <= 0;
    }

    size(){
        return this._heap.length;
    }

    show(){
        return this._heap;
    }
}

function solve(A) {
    let al = A.length;
    let ans = new Array(al).fill(-1);

    if(al < 3){
        return ans;
    }
    ans[2] = A[0]*A[1]*A[2];
    let maxH = new CustomMaxHeap(A.slice(0,3));

    for(let i = 3; i < al; ++i){
        let elems = [];
        
        elems.push(maxH.remove());
        elems.push(maxH.remove());
        let last = maxH.peek();

        if(A[i] > last){
            elems.push(A[i]);
            ans[i] = elems.reduce((acc,el) => acc*el);
            maxH.remove();
        }else{
            elems.push(last);
            ans[i] = elems.reduce((acc,el) => acc*el);
            elems.pop();
        }

        elems.forEach(el => maxH.add(el));
    }

    return ans;
}

A = [-1,-2,-100,-3];
console.log(solve(A));
