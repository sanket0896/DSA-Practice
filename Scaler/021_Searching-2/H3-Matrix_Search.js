// Matrix Search
//
// Problem Description
// Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integar B in matrix A.
//  This matrix A has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than or equal to the last integer of the previous row.
// Return 1 if B is present in A, else return 0. Note: Rows are numbered from top to bottom and columns are numbered from left to right.      


// Problem Constraints
// 1 <= N, M <= 1000.
// 1 <= A[i][j], B <= 10^6.


// Input Format
// The first argument given is the integer matrix A.
// The second argument given is the integer B.


// Output Format
// Return 1 if B is present in A, else return 0.


// Example Input
// Input 1:
// A = [ [1,   3,  5,  7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 50]  ]
// B = 3
// Input 2:
// A = [   [5, 17, 100, 111]
//        [119, 120, 127, 131]    ]
// B = 3
      


// Example Output
// Output 1:
// 1
// Output 2:
// 0
      


// Example Explanation
// Explanation 1:
//  3 is present in the matrix at A[0][1] position so return 1.
// Explanation 2:
//  3 is not present in the matrix so return 0.

function solve(A, B){
    n = A.length;
    m = A[0].length;

    var start = 0;
    var end = n - 1;

    var ans = 0;
    var row = 0;
    while(start <= end){
        var mid = Math.floor((start + end)/2);

        if(A[mid][m-1] > B){
            row = mid;
            end = mid - 1;
        }else if(A[mid][m-1] < B){
            start = mid + 1;
        }else {
            ans = 1;
            break;
        }
    }

    if(ans === 1){
        return ans;
    }

    start = 0;
    end = m-1;

    while(start <= end){
        var mid = Math.floor((start+end)/2);

        if(A[row][mid] < B){
            start = mid + 1;
        }else if(A[row][mid] > B){
            end = mid - 1;
        }else{
            ans = 1;
            break;
        }
    }

    return ans;
}

A = [ [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]  ];
B = 2;

console.log(solve(A,B));
