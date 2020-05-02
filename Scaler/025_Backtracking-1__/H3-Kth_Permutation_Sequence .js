/**
 * Kth Permutation Sequence
The set [1,2,3,…,n] contains a total of n! unique permutations. By listing and labeling all of the permutations in order, We get the following sequence (ie, for n = 3 ) :
1. "123"
2. "132"
3. "213"
4. "231"
5. "312"
6. "321"
Given n and k, return the kth permutation sequence. For example, given n = 3, k = 4, ans = "231"
 Good questions to ask the interviewer :
What if n is greater than 10. How should multiple digit numbers be represented in string?
 In this case, just concatenate the number to the answer. so if n = 11, k = 1, ans = "1234567891011" 
Whats the maximum value of n and k?
 In this case, k will be a positive integer thats less than INT_MAX. n is reasonable enough to make sure the answer does not bloat up a lot.

 */

function solve(n,k){

    let ans = [];

    let A = new Array(n).fill(0);

    for(let i = 0; i < n; ++i){
        A[i] = i+1;
    }

    --n;
    let nf = factorial(n);

    recur(A, k);
    
    function recur(A, k){

        if(k === 0 || n === 0){
            addRest(A);
            return;
        }

        let q = Math.floor(k / nf);
        let r = k % nf;
        let x = 0;

        if(r === 0){
            x = q-1
        }else{
            x = q;
        }
        ans.push(A[x])
        A.splice(x,1);
        nf = Math.floor(nf/n);
        --n;
        recur(A, r);
    }

    return ans.join('');

    function addRest(A){
        for(let i = A.length-1; i >= 0; --i){
            ans.push(A[i]);
        }
    }

    function factorial(n){
        let product = 1;
        while(n > 1){
            product *= n;
            --n;
        }
        return product;
    }
}

console.log(solve(5,5));
