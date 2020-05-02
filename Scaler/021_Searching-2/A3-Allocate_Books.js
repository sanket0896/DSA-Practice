/**
 * Allocate Books
 * 
Problem Description
Given an array of integers A of size N and an integer B. College library has N books,the ith book has A[i] number of pages. You have to allocate books to B number of students so that maximum number of pages alloted to a student is minimum.
A book will be allocated to exactly one student.
Each student has to be allocated at least one book.
Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
Calculate and return that minimum possible number. NOTE: Return -1 if a valid assignment is not possible.


Problem Constraints
1 <= N <= 10^5
1 <= A[i],B <= 10^5


Input Format
The first argument given is the integer array A.
The second argument given is the integer B.


Output Format
Return that minimum possible number


Example Input
A = [12, 34, 67, 90]
B = 2


Example Output
113


Example Explanation
There are 2 number of students. Books can be distributed in following fashion : 
        1) [12] and [34, 67, 90]
        Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
        2) [12, 34] and [67, 90]
        Max number of pages is allocated to student 2 with 67 + 90 = 157 pages 
        3) [12, 34, 67] and [90]
        Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages
        Of the 3 cases, Option 3 has the minimum pages = 113.
 */

 function solve(A, B){
    var al = A.length;
    var ans = -1;

    if(al < B){
        return -1;
    }

    var max = A[0];
    var sum = A[0];
    for(i = 1; i < al; ++i){
        max = A[i] > max ? A[i] : max;
        sum += A[i];
    }

    if(al === B){
        return max;
    }
    var start = max;
    var end = sum;

    while(start <= end){
        // var mid = Math.floor((start + end) / 2);
var mid = 97;
        var fs = isFeasible(A, B, mid);
        console.log({start, end, mid, fs});
        
        if(fs === 'more'){
            start = mid + 1;
        }else if(fs === 'less'){
            end = mid - 1;
        }else if(fs === 'same'){
            ans = mid;
            end = mid - 1;
        }
    }

    return ans;
 }

 function isFeasible(A, stud, k){
    var al = A.length;
    var sum = 0;
    var ans = "";
    for(var i = 0; i < al; ++i){

        if(A[i] > k){
            ans = "more";
            break;
        }
        
        if((sum + A[i]) > k){
            --stud;
            sum = A[i];
            
        }else{
            sum += A[i];
        }

        if(stud === 0 && i < al){
            ans = "more";
            break;
        }else if(i === al-1){
            if(stud === 1){
                ans = "same";
            }else if(stud > 1){
                ans = "less";
            }

        }else{
            if((al - i) === stud){
                ans = 'same';
                break;
            }
        }
    }
    
    return ans;
 }
 A = [ 97, 26, 12, 67, 10, 33, 79, 49, 79, 21, 67, 72, 93, 36, 85, 45, 28, 91, 94, 57, 1, 53, 8, 44, 68, 90, 24 ];
 B = 26;
 console.log(solve(A, B));
 