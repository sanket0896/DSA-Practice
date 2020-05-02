/** 
 * Subset
 * 
Problem Description
Given a set of distinct integers, S, return all possible subsets. NOTE:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
Also, the subsets should be sorted in ascending ( lexicographic ) order.
The list is not necessarily sorted.


Problem Constraints
1 <= |S| <= 16
INTMIN <= S[i] <= INTMAX


Input Format
First and only argument of input contains a single integer array S.


Output Format
Return a vector of vectors denoting the answer.


Example Input
 S = [1, 2, 3]


Example Output
[
 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]
]


Example Explanation
 You can see that these are all possible subsets.
 */

 function solve(A) {
    var al = A.length;
    var ans = [[]];
    A.sort(cmp);
    subsets(A,0,[]);

    return ans;

    function subsets(A,index,curr) {
        if(index === al){
            return;
        }

        var visited = {};

        for(var i = index; i < al; ++i){
            if(!visited[A[i]]){
                visited[A[i]] = true;
                curr.push(A[i]);
                ans.push(curr.slice());
                subsets(A,i+1,curr);
                curr.pop();
            }
        }
    }

    function cmp(a, b) {
        return a > b ? 1 : -1;
    }
 }

 A = [1,2,1];

 console.log(solve(A));
 