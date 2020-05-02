// Painter's Partition Problem
// Problem Description
// Given 2 integers A and B and an array of integers C of size N. Element C[i] represents length of ith board.
// You have to paint all N boards [C0, C1, C2, C3 … CN-1]. There are A painters available and each of them takes B units of time to paint 1 unit of board.
//  Calculate and return minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of board. Note:
// 1. 2 painters cannot share a board to paint. That is to say, a board cannot be painted partially by one painter, and partially by another.
// 2. A painter will only paint contiguous boards. Which means a configuration where painter 1 paints board 1 and 3 but not 2 is invalid.

// Return the ans % 10000003.      


// Problem Constraints
// 1 <= A <= 1000
// 1 <= B <= 10^6
// 1 <= N <= 10^5
// 1 <= C[i] <= 10^6


// Input Format
// The first argument given is the integer A.
// The second argument given is the integer B.
// The third argument given is the integer array C.


// Output Format
// Return minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of board % 10000003.


// Example Input
// Input 1:
// A = 2
// B = 5
// C = [1, 10]
// Input 2:
// A = 10
// B = 1
// C = [1, 8, 11, 3]
     


// Example Output
// Output 1:
// 50
// Output 2:
// 11
     


// Example Explanation
// Explanation 1:
// Possibility 1:- same painter paints both blocks, time taken = 55 units.
// Possibility 2:- Painter 1 paints block 1, painter 2 paints block 2, time take = max(5, 50) = 50
// There are no other distinct ways to paint boards.
// ans = 50%10000003


function solve(A, B, C){
    var cl = C.length;
    var mod = 10000003;

    var start = C[0];
    var end = C[0];

    var ans = 0;

    for(var i = 1; i < cl; ++i){
        
        start = C[i] > start ? C[i] : start;
        end += C[i];
    }

    if(A >= cl){
        return (start * B) % mod;
    }
    while(start <= end){
        var mid = Math.floor((start+end)/2);
        var p = A; // painters
        var u = 0; // units of canvas
        for(var i = 0; i < cl; ++i){
            console.log(i, C[i], u, p);

            // not feasible
            if( C[i] > mid){
                start = mid + 1;
                fs = "C[i] > K"
                break;
            }

            if((u + C[i]) <= mid){
                u += C[i];
                
                if(i === cl - 1){
                    ans = mid;
                    end = mid - 1;
                    fs = "All Got 1"
                }
            }else{
                --p;
                console.log(C[i],i, u, p);
                
                // not feasible
                if(p === 0 && i < cl){
                    start = mid + 1;
                    fs = "No painters left"
                    break;
                }else if(i === cl -1){
                    ans = mid;
                    end = mid - 1;
                    fs = "Yes"
                }else{
                    u = C[i];
                    fs = "Sneaked"
                }

            }
        }
    }
    return (ans*B)%mod;
}

A = 4;
B = 1;
C = [77, 13, 79, 96, 69, 14, 91];

console.log(solve(A,B,C));

