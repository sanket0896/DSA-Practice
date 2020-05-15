/**
 * First Depth First Search
Problem Description
You are given n towns (1 to n). All towns are connected via unique directed path as mentioned in the input. Given 2 towns find whether you can reach the first town from the second without repeating any edge. x y : query to find whether x is reachable from y. Input contains an integer array A of size n and 2 integers x and y ( 1 <= x, y <= n ). There exist a directed edge from A[i] to i+1 for every 1 <= i < n. Also, it's guaranteed that A[i] <= i.    


Problem Constraints
1 <= n <= 100000


Input Format
First argument is vector A Second argument is integer B   First argument is integer C   


Output Format
Return 1 if reachable, 0 otherwise.


Example Input
Input 1:        
 A = [1, 2]B = 1C = 2
  Input 2:          
 A = [1, 2]B = 2C = 1
      


Example Output
Output 1:
 0
  Output 2:          
 1
      


Example Explanation
Explanation 1:
 Tree is 1--> 2 and hence 1 is not reachable from 2.
  Explanation 2:          
 Tree is 1--> 2 and hence 2 is reachable from 1.
 */

function solve(A, B, C) {

    if(B === C){
        return 1;
    }
    
    Array.prototype.nq = function(el){q.push(el)};
    Array.prototype.dq = function(){el = q.shift(); return el;};

    let n = A.length;
    let adjMap = new Map();
    let visited = new Array(n+1).fill(false);
    let found = false;

    for(let i = 1; i < n; ++i){
        if(adjMap.has(A[i])){
            adjMap.get(A[i]).push(i+1);
        }else{
            adjMap.set(A[i], [i+1]);
        }
    }

    let q = [];
    q.nq(C);
    visited[C] = true;

    while(q.length){
        let node = q.dq();
        let nbr = adjMap.get(node);

        if(!nbr){
            continue;
        }

        for(let i = 0; i < nbr.length; ++i){
            if(nbr[i] === B){
                found = true;
                break;
            }
            if(!visited[nbr[i]]){
                q.nq(nbr[i]);
                visited[nbr[i]] = true;
            }
        }

        if(found){
            break;
        }
    }

    return found ? 1 : 0;
}

A = [ 1, 1, 1, 3, 3, 2, 2, 7, 6 ]
B = 9
C = 1

console.log(solve(A, B, C));
