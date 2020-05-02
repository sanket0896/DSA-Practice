/**
 * Unique Paths III
Problem Description
Given a matrix of integers A of size N x M . There are 4 types of squares in it:
1. 1 represents the starting square.  There is exactly one starting square.
2. 2 represents the ending square.  There is exactly one ending square.
3. 0 represents empty squares we can walk over.
4. -1 represents obstacles that we cannot walk over.
Find and return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Note: Rows are numbered from top to bottom and columns are numbered from left to right.  


Problem Constraints
2 <= N * M <= 20
-1 <= A[i] <= 2


Input Format
The first argument given is the integer matrix A.


Output Format
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.


Example Input
Input 1:
A = [   [1, 0, 0, 0]
        [0, 0, 0, 0]
        [0, 0, 2, -1]   ]
Input 2:
A = [   [0, 1]
        [2, 0]    ]
 


Example Output
Output 1:
2
Output 2:
0
 


Example Explanation
Explanation 1: 
We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 */

function solve(A){
    let n = A.length;
    if(n === 0) return 0;
    let m = A[0].length;

    let visited = new Array(n);

    for(let i = 0; i < n; ++i){
        visited[i] = new Array(m).fill(false);
    }

    let walkable = 0;
    let start = null;
    let ans = 0;

    for(let i = 0; i < n; ++i){
        for(let j = 0; j < m; ++j){
            if(A[i][j] === 0){
                ++walkable;
            }else if(A[i][j] === 1){
                start = {x: i, y: j};
            }
        }
    }
    
    walk(start.x, start.y);
    return ans;

    function walk(x,y){
        if(A[x][y] === 2){
            if(walkable === 0){
                ++ans;
            }
            return;
        }
        visited[x][y] = true;
        
        if(A[x][y] === 0){
            --walkable;
        }

        for(let idx = 0; idx < 4; ++idx){
            let p = x;
            let q = y;

            if(idx === 0){
                --p;
            }else if(idx === 1){
                ++q;
            }else if(idx === 2){
                ++p;
            }else{
                --q;
            }

            if(isFeasible(p,q)){
                walk(p,q)
            }
        }

        visited[x][y] = false
        if(A[x][y] === 0){
            ++walkable;
        }
    }

    function isFeasible(x, y){
        if(x >= 0 && x < n && y >= 0 && y < m && A[x][y] !== -1 && visited[x][y] === false){
            return true;
        }
        return false;
    }
}

X = [   
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1]   
]
Y = [[1,0],[0,1]]
console.log(solve(Y));
