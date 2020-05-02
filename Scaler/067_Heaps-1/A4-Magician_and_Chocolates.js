/**
 * Magician and Chocolates
 * 
Given N bags, each bag contains Ai chocolates. There is a kid and a magician. In one unit of time, kid chooses a random bag i, eats Ai chocolates, then the magician fills the ith bag with floor(Ai/2) chocolates. Given Ai for 1 <= i <= N, find the maximum number of chocolates kid can eat in K units of time. For example,
K = 3
N = 2
A = 6 5

Return: 14
At t = 1 kid eats 6 chocolates from bag 0, and the bag gets filled by 3 chocolates At t = 2 kid eats 5 chocolates from bag 1, and the bag gets filled by 2 chocolates At t = 3 kid eats 3 chocolates from bag 0, and the bag gets filled by 1 chocolate so, total number of chocolates eaten: 6 + 5 + 3 = 14 Note: Return your answer modulo 10^9+7
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
            let topVal = this._heap[0];
            this._heap[0] = this._heap[this._heap.length - 1];
            this._heap.pop();            
            this.downHeapify(0);
            return topVal;
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

function solve(A, B) {
    let len = B.length;
    if(!len){
        return 0;
    }

    let ans = 0;

    let heap = new CustomMaxHeap(B);

    for(let i = 0; i < A; ++i){
        let maxVal = heap.remove();

        if(!maxVal){
            break;
        }

        ans = modAdd(ans, maxVal);
        
        heap.add(Math.floor(maxVal/2));
    }

    return ans;

    function modAdd(a, b) {
        const mod = Math.pow(10,9) + 7;
        return ((a % mod) + (b % mod)) % mod;
    }
}

A = 4;
B = [12, 5, 10];

console.log(solve(A,B));
