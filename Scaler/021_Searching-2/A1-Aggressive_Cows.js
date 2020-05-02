/**
 * Aggressive cows
 * 
Problem Description
Farmer John has built a new long barn, with N stalls. Given an array of integers A of size N where each element of the array represents the location of the stall, and an integer B which represent the number of cows. His cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, John wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance? 


Problem Constraints
2 <= N <= 100000
0 <= A[i] <= 10^9
2 <= B <= N


Input Format
The first argument given is the integer array A.
The second argument given is the integer B.


Output Format
Return the largest minimum distance possible among the cows.


Example Input
A = [1, 2, 3, 4, 5]
B = 3


Example Output
2


Example Explanation
John can assign the stalls at location 1,3 and 5 to the 3 cows respectively.
So the minimum distance will be 2.
 */

function solve(A, B){
    A.sort(cmp);
    var n = A.length;
    var ans = 10;
    if(n === 2){
        return A[n-1] - A[0];
    }

    var start = 1; // min possible distance
    var end = A[n-1] - A[0]; // max possible distance

    while(start <= end){
        var mid = Math.floor((start+end)/2);

        if(isFeasible(A, B, mid)){
            ans = mid;
            start = mid + 1;
            fs = "yes";
        }else{
            end = mid - 1;
        }
    }

    return ans;
}

function isFeasible(A, cows, k){
    
    var sl = A.length;
    var ans = false;
    // first cow will always be in in A[0]
    var pos = A[0];
    --cows;

    for(i = 1; i < sl; ++i){
        if(A[i] - pos < k){
            
            if(i === sl - 1 && cows > 0){
                ans = false;
                break;
            }

            continue;
        }else{
            pos = A[i];
            --cows;

            if(cows === 0){
                ans = true;
                break;
            }
        }
    }

    return ans;
}

function cmp(a,b){
    if(a===b){
        return 0;
    }else{
        return a > b ? 1 : -1;
    }
}

A = [ 1,2,3,4,5 ];

B = 3

console.log(solve(A,B));
