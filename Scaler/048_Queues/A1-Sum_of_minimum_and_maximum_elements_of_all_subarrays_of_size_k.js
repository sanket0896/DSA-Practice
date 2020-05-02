/**
 * Sum of minimum and maximum elements of all subarrays of size k
Given an array A of both positive and negative integers. Your task is to compute sum of minimum and maximum elements of all sub-array of size B. Note: Since the answer can be very large, you are required to return the sum module 1000000007. 
Input Format
The first argument denotes the array A.
The second argument denotes the value B
Output Format
Return an integer that denotes the required value.
Constraints
1 <= size of array A <= 100000
-1000000000 <= A[i] <= 1000000000
1 <= B <= size of array
** Example**
Example Input 1:
    A[] = {2, 5, -1, 7, -3, -1, -2}
    B = 4

Example Output 1:
    18
Explanation : 
    Subarrays of size 4 are : 
        {2, 5, -1, 7},   min + max = -1 + 7 = 6
        {5, -1, 7, -3},  min + max = -3 + 7 = 4      
        {-1, 7, -3, -1}, min + max = -3 + 7 = 4
        {7, -3, -1, -2}, min + max = -3 + 7 = 4   
        Sum of all min & max = 6 + 4 + 4 + 4 
                             = 18 
 */

function solve(A, B) {
    const al = A.length;
    const mod = 1000000007;

    let minQ = [];
    let maxQ = [];
    let minLast = -1;
    let maxLast = -1;
    let sum = 0;
    let start = 0;
    
    for(let i = 0; i < al; ++i){

        if(minLast > -1 && minQ[0] < start){
            minQ.shift();
            --minLast;
        }

        if(maxLast > -1 && maxQ[0] < start){
            maxQ.shift();
            --maxLast;
        }

        while (minLast > -1 && A[minQ[minLast]] > A[i]) {
            minQ.pop();
            --minLast;
        }

        while (maxLast > -1 && A[maxQ[maxLast]] < A[i]) {
            maxQ.pop();
            --maxLast;
        }

        minQ.push(i);
        ++minLast;
        maxQ.push(i);
        ++maxLast;
        --B;

        if(B === 0){
            sum = modSum(sum, modSum(A[minQ[0]], A[maxQ[0]]));
            ++B;
            ++start;
        }

        
    }

    return sum;

    function modSum(a, b) {

        if(a < 0){
            a = (a + mod) % mod;
        }else{
            a = a % mod;
        }

        if(b < 0){
            b = (b + mod) % mod;
        }else{
            b = b % mod;
        }

        return (a + b) % mod;
    }
} 

A = [2, 5, -1, 7, -3, -1, -2]
B = 4

console.log(solve(A,B));
