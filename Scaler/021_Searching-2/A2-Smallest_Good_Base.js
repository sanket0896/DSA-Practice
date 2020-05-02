/**
 * 
 * Smallest Good Base
 * 
Given an integer A, we call k >= 2 a good base of A, if all digits of A base k are 1. Now given a string representing A, you should return the smallest good base of A in string format. 
Input Format
The only argument given is the string representing A.
Output Format
Return the smallest good base of A in string format.
Constraints
3 <= A <= 10^18
For Example
Input 1:
    A = "13"
Output 1:
    "3"     (13 in base 3 is 111)

Input 2:
    A = "4681"
Output 2:
    "8"     (4681 in base 8 is 11111).
 */

function solve (A){
    A = BigInt(A);
    var ans = 0n;
    for(i = 63n; i >= 0n; --i){
        
        var start = 2n;
        var end = A-1n;

        while(start <= end){
            var mid = (start + end)/2n;

            var fs = isFeasible(A,mid,i);

            if(fs === 'more'){
                end = mid - 1n;
            }else if(fs === 'less'){
                start = mid + 1n;
            }else if(fs === 'same'){
                ans = mid;
                break;
            }
        }

        if(ans > 0n){
            break;
        }
    }

    return ans.toString();
}

function isFeasible(A, k, n){
    var digits = findLog(A,k) + 1n;

    if(n < digits){
        return 'less';
    }else if(n > digits){
        return 'more';
    }else{
        var num = (k**n - 1n) / (k - 1n);
        
        if(num > A){
            return 'more';
        }else if(num < A){
            return 'less';
        }else{
            return 'same';
        }
    }
}

function findLog(num, base){
    let prod = 1n;
    let exp = 0n;

    while(prod <= num){
        prod *= base;
        ++exp;
    }

    return exp-1n;
}

A = "21324312234";
console.log(solve(A));
