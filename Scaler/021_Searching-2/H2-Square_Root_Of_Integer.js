// Square Root of Integer
// Problem Description
// Given an integer A. Compute and return the square root of A. If A is not a perfect square, return floor(sqrt(A)). DO NOT USE SQRT FUNCTION FROM STANDARD LIBRARY.  


// Problem Constraints
// 1 <= A <= 10^9


// Input Format
// The first and only argument given is the integer A.


// Output Format
// Return floor(sqrt(A))


// Example Input
// Input 1:
// 11
// Input 2:
// 9
   


// Example Output
// Output 1:
// 3
// Output 2:
// 3
   


// Example Explanation
// Explanation:
// When A = 11 , square root of A = 3.316. It is not a perfect square so we return the floor which is 3.
// When A = 9 which is a perfect square of 3, so we return 3.
   


function solve(A){
    
    if(A === 0){
        return 0;
    }
    if(A === 1){
        return 1;
    }
    var ans = 0;
    var start = 2;
    var end = Math.floor(A);

    while(start <= end){
        var mid = Math.floor((start + end)/2);

        if(mid * mid === A){
            ans = mid;
            break;
        }else if(mid * mid > A){
            ans = mid - 1;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return ans;
}
