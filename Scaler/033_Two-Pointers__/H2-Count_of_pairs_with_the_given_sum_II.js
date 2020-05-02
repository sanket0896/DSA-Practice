/**
 * Count of pairs with the given sum II
 * 
Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B. Since the number of such pairs can be very large, return number of such pairs modulo (10^9+7). 
Input Format
The first argument given is the integer array A.
The second argument given is integer B.
Output Format
Return the number of pairs for which sum is equal to B modulo (10^9+7).
Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^9 
1 <= B <= 10^9
For Example
Input 1:
    A = [1, 1, 1, 2, 3]
    B = 4
Output 1:
    3

Input 2:
    A = [1, 2, 2, 3, 4]
    B = 5
Output 2:
    3
 */

function solve(A, B) {

    const al = A.length;
    const mod = Math.pow(10, 9) + 7;
    
    B = B % mod;

    let ans = 0;
    let l = 0;
    let r = A.length - 1;

    while (l < r) {
        const sum = modSum(A[l], A[r]);

        if(sum < B){
            l = getCountAndNext(l).index;
        }else if(sum > B){
            r = getCountAndPrev(r).index;
        }else{
            const {index: li, count: lc} = getCountAndNext(l);
            const {index: ri, count: rc} = getCountAndPrev(r);

            if(A[l] === A[r]){
                ans = modSum(ans, combSum(lc));
            }else{
                ans = modSum(ans, modMul(lc, rc));
            }

            l = li;
            r = ri;
        }
    }



    return ans;


    function modSum(a, b) {
        return ( (a % mod) + (b % mod) ) % mod;
    }

    function modMul(a, b) {
        return ( (a % mod) * (b % mod) ) % mod;
    }

    function combSum(n) {
        return (n * (n-1)) / 2;
    }

    function getCountAndNext(fromIdx){
        let i = fromIdx + 1;

        while(i < al){
            if(A[i] !== A[i-1]){
                break;
            }
            ++i;
        }

        return {
            index: i,
            count: i - fromIdx
        }
    }

    function getCountAndPrev(fromIdx){
        let i = fromIdx - 1;

        while(i >= 0){
            if(A[i] !== A[i+1]){
                break;
            }
            --i;
        }

        return {
            index: i,
            count: fromIdx - i 
        }
    }

}

A = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5]
B = 5

console.log(solve(A,B));
