/**
 * All Unique Permutations
 * 
Given a collection of numbers that might contain duplicates, return all possible unique permutations. Example : 


[1,1,2] 


have the following unique permutations:
[1,1,2]
[1,2,1]
[2,1,1]
 */

function solve(A) {
    var al = A.length;
    var ans = [];

    uPerm(A,0);

    return ans;

    function uPerm(A, index) {
        if(index === al){
            ans.push(A.slice());
            return;
        }

        var visited = {}

        for(var x = index; x < al; ++x){
            
            if(visited[A[x]]){
                continue;
            }else{
                visited[A[x]] = true;
                swap(A,index,x);
                uPerm(A,index+1);
                swap(A,index,x);
            }
        }
    }

    function swap(A, i, j){
        var tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }
}

console.log(solve([1,1,2] ));
