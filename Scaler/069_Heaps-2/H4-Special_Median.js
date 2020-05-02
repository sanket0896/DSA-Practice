/**
 * Special Median
 * 
Problem Description
You are given an array A containing N numbers. This array is called special if it satisfies one of the following properties:
There exists an element A[i] in the array such that A[i] is equal to the median of elements [A[0], A[1], ...., A[i-1]]
There exists an element A[i] in the array such that A[i] is equal to the median of elements [A[i+1], A[i+2], ...., A[N-1]]
Median is the middle element in the sorted list of elements. If the number of elements are even then median will be (sum of both middle elements)/2. Return 1 if the array is special else return 0. NOTE: 
For A[0] consider only the median of elements [A[1], A[2], ..., A[N-1]] (as there are no elements to the left of it)
For A[N-1] consider only the median of elements [A[0], A[1], ...., A[N-2]]


Problem Constraints
1 <= N <= 1000000.
A[i] is in the range of a signed 32-bit integer.


Input Format
First and only argument is an integer array A.


Output Format
Return 1 if the given array is special else return 0.


Example Input
Input 1:
 A = [4, 6, 8, 4]
Input 2:
 A = [2, 7, 3, 1]


Example Output
Output 1:
 1
Output 2:
 0


Example Explanation
Explantion 1:
 Here, 6 is equal to the median of [8, 4].
Explanation 2:
 No element satisfies any condition.
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
    let l = new CustomMaxHeap([]);
    let r = new CustomMinHeap([]);
    let ans = false;
    let med = A[0];

    for(let i = 1; i < len; ++i){
        if(med === A[i]){
            ans = true;
            break;
        }
        findMedian(A[i], i);
    }

    if(ans){
        return 1;
    }

    l = new CustomMaxHeap([]);
    r = new CustomMinHeap([]);
    med = A[len - 1];

    for(let i = len - 2; i >= 0; --i){
        if(med === A[i]){
            ans = true;
            break;
        }
        findMedian(A[i], len - 1 - i)
    }

    return ans ? 1 : 0;

    function findMedian(num, cnt) {
        if(cnt % 2 === 0){
            if(num <= med){
                l.add(num);
                med = l.remove();
            }else{
                r.add(num);
                med = r.remove();
            }
        }else{
            if(num <= med){
                l.add(num);
                r.add(med);
                med = (l.peek() + r.peek()) / 2;
            }else{
                r.add(num);
                l.add(med);
                med = (l.peek() + r.peek()) / 2;
            }
        }
    }
}

A = []
console.log(solve(A));
