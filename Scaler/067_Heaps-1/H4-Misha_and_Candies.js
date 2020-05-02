/**
 * Misha and Candies
Problem Description
Misha loves eating candies. She has given N boxes of Candies. She decides, every time she will choose a box having the minimum number of candies, eat half of the candies and put the remaining candies in the other box that has the minimum number of candies.
Misha does not like a box if it has the number of candies greater than B so she won't eat from that box. Can you find how many candies she will eat? NOTE 1: If a box has an odd number of candies then Misha will eat floor(odd/2). NOTE 2: A same box will not be chosen again. 


Problem Constraints
1 <= N <= 105 1 <= A[i] <= 105 1 <= B <= 106 


Input Format
The first argument is A an Array of Integers, where A[i] is the number of candies in the ith box.
The second argument is B, the maximum number of candies Misha like in a box.


Output Format
Return an Integer denoting number of candies Misha will eat.


Example Input
Input 1:
 A = [3, 2, 3]
 B = 4
Input 2:
 A = [1,2,1]
 B = 2


Example Output
Output 1:
 2
Output 2:
 1


Example Explanation
Explanation 1:
 1st time Misha will eat from 2nd box, i.e 1 candy she'll eat and will put the remaining 1 candy in the 1st box.
 2nd time she will eat from the 3rd box, i.e 1 candy she'll eat and will put the remaining 2 candies in the 1st box.
 She will not eat from the 3rd box as now it has candies greater than B.
 So the number of candies Misha eat is 2.
Explanation 2:
 1st time Misha will eat from 1st box, i.e she can't eat any and will put the remaining 1 candy in the 3rd box.
 2nd time she will eat from the 3rd box, i.e 1 candy she'll eat and will put the remaining 1 candies in the 2nd box.
 She will not eat from the 2nd box as now it has candies greater than B.
 So the number of candies Misha eat is 1.

 */

class CustomMinHeap{
    constructor(arr){
        this.heap = arr;
        this.buildHeap();
    }

    buildHeap(){
        let start = Math.floor((this.heap.length-2)/2);
        for(let i = start; i >= 0; --i){
            this.downHeapify(i);
        }
    }

    downHeapify(root){
        let len = this.heap.length;
        let min = root;
        let l = root * 2 + 1;
        let r = root * 2 + 2;

        if(l < len && this.heap[l] < this.heap[min]){
            min = l;
        }
        
        if(r < len && this.heap[r] < this.heap[min]){
            min = r;
        }

        if(min !== root){
            this.swap(min, root);
            this.downHeapify(min);
        }
    }

    upHeapify(node){
        let len = this.heap.length;
        if(node === 0 || node >= len){
            return;
        }
        let p = Math.floor((node - 1) / 2);

        if(this.heap[node] < this.heap[p]){
            this.swap(node, p);
            this.upHeapify(p);
        }
    }

    swap(i, j){
        const t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }

    add(node){
        this.heap.push(node);
        this.upHeapify(this.heap.length - 1);
    }

    remove(){
        if(this.heap.length > 0){
            let retVal = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.downHeapify(0);
            return retVal;
        }
    }

    empty(){
        return this.heap.length === 0;
    }
}

function solve(A, B) {
    let heap = new CustomMinHeap(A.filter(el => el <= B));
    let ans = 0;

    while(!heap.empty()){
        let min = heap.remove();
        let min2 = heap.remove();

        let eat = Math.floor(min/2);
        ans += eat;

        if(min2 !== undefined){
            min2 += min - eat;
            min2 <= B && heap.add(min2);
        }
    }

    return ans;
}

A = [1,2,1]
B = 2
console.log(solve(A, B));
