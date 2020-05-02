/**
 * Maximum Frequency stack
 * 
You are given a matrix A which represent operations of size N x 2. Assume initially you have a stack-like data structure you have to perform operations on it. Operations are of two types:
1 x: push an integer x onto the stack and return -1
2 0: remove and return the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the top of the stack is removed and returned.
A[i][0] describes the type of operation to be performed. A[i][1] describe the element x or 0 corresponding to the operation performed. 
Input Format
The only argument given is the integer array A.
Output Format
Return the array of integers denoting answer to each operation.
Constraints
1 <= N <= 100000
1 <= A[i][0] <= 2
0 <= A[i][1] <= 10^9
For Example
Input 1:
    A = A = [
            [1, 5]
            [1, 7]
            [1, 5]
            [1, 7]
            [1, 4]
            [1, 5]
            [2, 0]
            [2, 0]
            [2, 0]
            [2, 0]  ]
Output 1:
    [-1, -1, -1, -1, -1, -1, 5, 7, 5, 4]

Input 2:
    A = A = [   
            [1, 5]
            [2 0]
            [1 4]   ]
Output 2:
    [-1, 5, -1]
 */

function solve(A) {
    let stack = [];
    let max = [];
    let currMax = -1;
    let freq = {'-1': -1};
    let ans = [];

    A.forEach(op => {
        if(op[0] === 1){
            addElem(op[1]);
            ans.push(-1);
        }else{
            ans.push(removeFreqElem());
        }
    });

    return ans;

    function addElem(num) {
        stack.push(num);
        freq[num] = !!freq[num] ? ++freq[num] : 1;
        currMax = freq[num] >= freq[currMax] ? num : currMax;
        max.push(currMax);
    }

    function removeFreqElem() {
        let itemToRemove = currMax;
        let top = stack.pop();
        max.pop();
        freq[top]--;
        currMax = max.length > 0 ? max[max.length-1] : -1;
        let aux = [];
        while (top !== itemToRemove) {
            aux.push(top);
            top = stack.pop();
            max.pop();
            freq[top]--;
            currMax = max.length > 0 ? max[max.length-1] : -1;
        }
        while (aux.length) {
            addElem(aux.pop());
        }
        return itemToRemove;
    }
}

A = [
    [1, 5],
    [2, 0],
    [1, 4],
    [2, 0],
]

console.log(solve(A));
