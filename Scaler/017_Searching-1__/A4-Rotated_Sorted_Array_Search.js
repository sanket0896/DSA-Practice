/**
 * Rotated Sorted Array Search
 * 
Given an array of integers A of size N and an integer B. array A is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2 ). You are given a target value B to search. If found in the array, return its index, otherwise return -1. You may assume no duplicate exists in the array. NOTE:- Array A was sorted in non-decreasing order before rotation.
NOTE : Think about the case when there are duplicates. Does your current solution work? How does the time complexity change?*
Input Format
The first argument given is the integer array A.
The second argument given is the integer B.
Output Format
Return index of B in array A, otherwise return -1
Constraints
1 <= N <= 1000000
1 <= A[i] <= 10^9
all elements in A are disitinct.
For Example
Input 1:
    A = [4, 5, 6, 7, 0, 1, 2, 3]
    B = 4
Output 1:
    0
Explanation 1:
 Target 4 is found at index 0 in A.


Input 2:
    A = [5, 17, 100, 3]
    B = 6
Output 2:
    -1
 */
function solve(A, B) {
    var lastIndex = A.length - 1;
    var ans = -1;

    var start = 0;
    var end = lastIndex;

    while(start <= end){
        var mid = Math.floor((start + end)/2);

        var s = check(A[mid], B, A[lastIndex]);

        if(s === 'left'){
            --end;
        }else if(s === 'right'){
            ++start;
        }else if(s === 'same'){
            ans = mid;
            break;
        }
    }

    return ans;

    function check(curr, reqd, last){
        if(reqd > last){

            if(curr <= last){
                return "left";
            }else{
                if(curr > reqd){
                    return "left";
                }else if(curr < reqd){
                    return "right";
                }else{
                    return "same";
                }
            }
        }else{

            if(curr > last){
                return "right";
            }else{
                if(curr > reqd){
                    return "left";
                }else if(curr < reqd){
                    return "right";
                }else{
                    return "same";
                }                
            }
        }
    }
}

A = [4, 5, 6, 7, 0, 1, 2, 3]
B = 4

console.log(solve(A,B));
