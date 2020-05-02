/**
 * Median of stream of running integers
Given an array of integers A denoting a stream of integers. A new array of integer B is formed and C are formed. Each time an integer is encountered in a stream append it at the end of B and append median of array B at the C. Find and return the array C. NOTE: 1.If the number of elements are n in B and n is odd then consider medain as B[n/2] ( B must be in sorted order). 2.If the number of elements are n in B and n is even then consider medain as B[n/2-1] ( B must be in sorted order). 
Input Format
The only argument given is the integer array A.
Output Format
Return the array C.
Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 1000000000
For Example
Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    C = [1, 1, 2, 2, 3]

    stream          median
    [1]             1
    [1, 2]          1
    [1, 2, 3]       2
    [1, 2, 3, 4]    2
    [1, 2, 3, 4, 5] 3

Input 2:
    A = [5, 17, 100, 11]
Output 2:
    C = [5, 5, 17, 11]
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

        if(l < al && this._heap[l] < this._heap[min]){
            min = l;
        }

        if(r < al && this._heap[r] < this._heap[min]){
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

        if(node < this._heap.length && this._heap[node] < this._heap[parent]){
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
        let min = root;
        let l = root * 2 + 1;
        let r = root * 2 + 2;

        if(l < al && this._heap[l] > this._heap[min]){
            min = l;
        }

        if(r < al && this._heap[r] > this._heap[min]){
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

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this._heap.length === 0;
    }
}

function solve(A) {
    let len = A.length;
    let ans = new Array(len);
    ans[0] = A[0];
    let median = A[0];
    let left = new CustomMaxHeap([]);
    let right = new CustomMinHeap([]);

    for(let i = 1; i < len; ++i){
        if(A[i] <= median){
            left.add(A[i]);
            if(left.size() > right.size()){
                right.add(median);
                median = left.remove();
            }
        }else{
            right.add(A[i]);
            if(right.size() > left.size()+1){
                left.add(median);
                median = right.remove();
            }
        }
        ans[i] = median;
    }

    return ans;
}

A = [10, 13, 3, 27, 7, 17, 0, 2, 3,4];
console.log(solve(A));
