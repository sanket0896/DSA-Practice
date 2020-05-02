/**
 * N max pair combinations
Problem Description
Given two integers arrays A and B of size N each. Find the maximum N elements from the sum combinations (Ai + Bj) formed from elements in array A and B. 


Problem Constraints
1 <= N <= 2 * 105 -1000 <= A[i], B[i] <= 1000 


Input Format
First argument is an integer array A.
Second argument is an integer array B.


Output Format
Return an intger array denoting the N maximum element in descending order.


Example Input
Input 1:
 A = [1, 4, 2, 3]
 B = [2, 5, 1, 6]
Input 2:
 A = [2, 4, 1, 1]
 B = [-2, -3, 2, 4]


Example Output
Output 1:
 [10, 9, 9, 8]
Output 2:
 [8, 6, 6, 5]


Example Explanation
Explanation 1:
 4 maximum elements are 10(6+4), 9(6+3), 9(5+4), 8(6+2).
Explanation 2:
 4 maximum elements are 8(4+4), 6(4+2), 6(4+2), 5(4+1).
 */

class Node{
    constructor(x, i, j){
        this.data = x;
        this.x = i;
        this.y = j;
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

        if(l < al && this._heap[l].data > this._heap[min].data){
            min = l;
        }

        if(r < al && this._heap[r].data > this._heap[min].data){
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

        if(node < this._heap.length && this._heap[node].data > this._heap[parent].data){
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
    let len = A.length;
    let N = A.length;
    A.sort((a,b) => a === b ? 0 : (a < b ? 1 : -1));
    B.sort((a,b) => a === b ? 0 : (a < b ? 1 : -1));

    let heap = new CustomMaxHeap(A.map((el,i) => new Node(el+B[0], i, 0)));
    let ans = [];

    while (--N >= 0) {
        let top = heap.remove();
        ans.push(top.data);
        if((top.y+1) < len){
            heap.add(new Node(A[top.x]+B[top.y+1], top.x, top.y+1));
        }
    }

    return ans;
}

A = [ 36, 27, -35, 43, -15, 36, 42, -1, -29, 12, -23, 40, 9, 13, -24, -10, -24, 22, -14, -39, 18, 17, -21, 32, -20, 12, -27, 17, -15, -21, -48, -28, 8, 19, 17, 43, 6, -39, -8, -21, 23, -29, -31, 34, -13, 48, -26, -35, 20, -37, -24, 41, 30, 6, 23, 12, 20, 46, 31, -45, -25, 34, -23, -14, -45, -4, -21, -37, 7, -26, 45, 32, -5, -36, 17, -16, 14, -7, 0, 37, -42, 26, 28 ]

B = [ 38, 34, -47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20, -16, 28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31, -10, -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33, -31, -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27, -32, -5, -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43 ]

console.log(solve(A,B));

A.sort((a,b) => a === b ? 0 : (a < b ? 1 : -1));
B.sort((a,b) => a === b ? 0 : (a < b ? 1 : -1));

