/**
 * Matrix Median
 * 
Given a matrix of integers A of size N x M in which each row is sorted. Find an return the overall median of the matrix A. Note: No extra memory is allowed. Note: Rows are numbered from top to bottom and columns are numbered from left to right. 
Input Format
The first and only argument given is the integer matrix A.
Output Format
Return the overall median of the matrix A.
Constraints
1 <= N, M <= 10^5
1 <= N*M  <= 10^6
1 <= A[i] <= 10^9
N*M is odd
For Example
Input 1:
    A = [   [1, 3, 5],
            [2, 6, 9],
            [3, 6, 9]   ]
Output 1:
    5
Explanation 1:
    A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
    Median is 5. So, we return 5.

Input 2:
    A = [   [5, 17, 100]    ]
Output 2:
    17
 */

 function solve(){
    var n = A.length;
    var m = A[0].length;
    var ans = -1;
    var min = A[0][0];
    var max = A[n-1][m-1];

    for(i = 0; i < n; ++i){
        min = A[i][0] < min ? A[i][0] : min;
        max = A[i][m-1] > max ? A[i][m-1] : max;
    }

    var start = min;
    var end = max;

    while(start <= end){
        var mid = Math.floor((start+end)/2);

        var fs = isFeasible(A, mid);

        if(fs === 'less'){
            end = mid - 1;
        }else if(fs === 'more'){
            start = mid + 1;
        }else{
            ans = mid;
            break;
        }
    }
    return ans;
 }

 function isFeasible(A, k){
    var n = A.length;
    var m = A[0].length;
    var cl = 0; // count of nums less than k
    var cm = 0; // count of nums more than k
    var ce = 0; // count of nums equal to k

    for(i = 0; i < n; ++i){
        for(j = 0; j < m; ++j){
            if(A[i][j] < k){
                ++cl;
            }else if(A[i][j] > k){
                ++cm;
            }else{
                ++ce;
            }
        }
    }

    if(ce - Math.abs(cm - cl) >= 1){
        return "same";
    }else{
        return cm > cl ? "more" : "less"
    }
 }

 A = [   [1, 3, 4],
 [67, 6, 9],
 [3, 6, 9]   ]
 console.log(solve(A));
 