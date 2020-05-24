/**
 * Black Shapes
Problem Description
Given character matrix A of O's and X's, where O = white, X = black. Return the number of black shapes. A black shape consists of one or more adjacent X's (diagonals not included)  


Problem Constraints
1 <= |A|,|A[0]| <= 1000 A[i][j] = 'X' or 'O'  


Input Format
The First and only argument is character matrix A.


Output Format
Return a single integer denoting number of black shapes.


Example Input
Input 1:
 A = [ [X, X, X], [X, X, X], [X, X, X] ]
Input 2:
 A = [ [X, O], [O, X] ]
 


Example Output
Output 1:
 1
Output 2:
 2
 


Example Explanation
Explanation 1:
 All X's belong to single shapes
Explanation 2:
 Both X's belong to different shapes
 */


function solve(A) {
    let n = A.length;
    if(!n) return 0;
    let m = A[0].length;
    let ans = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; ++j){
            if(A[i][j] === 'X'){
                ++ans;
                DFS([i,j]);
            }
        }
    }

    return ans;

    function DFS([x, y]){
        if(x < 0 || y < 0 || x >= n || y >= m || A[x][y] === 'O'){
            return;
        }

        A[x][y] = 'O';
        
        let dir = [
            [-1,0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        dir.forEach(d => {
            DFS([x+d[0], y+d[1]]);
        })
    }
}

A = [ ['X', 'O'], ['O', 'X'] ]

console.log(solve(A));
