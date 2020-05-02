/**
 * Connect ropes with minimum length
 * 
Given an array of integers A representing the length of ropes. You need to connect these ropes into one rope. The cost of connecting two ropes is equal to the sum of their lengths. You need to connect the ropes with minimum cost. Find and return the minimum cost to connect these ropes into one rope. 
Input Format
The only argument given is the integer array A.
Output Format
Return the minimum cost to connect these ropes into one rope.
Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^3
For Example
Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    33
Explanation 1:
    1 + 2 = 3
    3 + 3 = 6
    4 + 5 = 9
    6 + 9 = 15

    3 + 6 + 9 + 15 = 33

Input 2:
    A = [5, 17, 100, 11]
Output 2:
    182
Explanation 2:
    5 + 11 = 16
    16 + 17 = 33
    33 + 100 = 133

    16 + 33 + 133 = 182
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
    let minH = new CustomMinHeap([...A]);
    let sum = 0;
    
    while(minH.size() > 1){
        let a = minH.remove();
        let b = minH.remove();
        
        sum += (a + b);
        minH.add(a+b);
    }

    return sum;

}

A = [ 16, 7, 3, 5, 9, 8, 6, 15 ]
console.log(solve(A));
