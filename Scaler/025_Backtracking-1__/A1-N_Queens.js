/**
 * NQueens
 * 
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. N Queens: Example 1 Given an integer n, return all distinct solutions to the n-queens puzzle. 

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively. 

For example, There exist two distinct solutions to the 4-queens puzzle:
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
 */



function solve(n) {
    var A = [];
    var queens = [];
    var rows = [];
    var ans = [];

    for (i = 0; i < n; i++) {
        A.push("");

        for (j = 0; j < n; j++) {
            A[i] += '.';
        }

    }
    
    rec(A,0);

    return ans.sort(cmp);

    // Functions
    function rec(A,k) {
        
        if(k >= n){
            return;
        }

        for(var x = 0; x < n; ++x){
            
            if(isValid(x,k)){
                
                if(k === n-1){
                    
                    A[x] = setCharAt(A[x], k, 'Q');
                    ans.push( A.slice());
                    A[x] = setCharAt(A[x], k, '.');
                }else{
                    
                    doWork(A,x,k);
                    rec(A,k+1);
                    undoWork(A,x,k);
                }
            }
        }

        
    }

    function doWork(A,i,k) {
        
        rows.push(i);
        queens.push([i,k]);
        A[i] = setCharAt(A[i], k, 'Q');
    }

    function undoWork(A,i,k) {
        rows.pop();
        queens.pop();
        
        A[i] = setCharAt(A[i], k, '.');
    }
    
    function isValid(i, j) {
        if(rows.indexOf(i) !== -1){
            return false;
        }
    
        var valid = true;
        
        for(k = 0; k < queens.length; ++k){
            if(Math.abs(queens[k][0] - i) === Math.abs(queens[k][1] - j)){
                valid = false;
                break;
            }
        }
    
        return valid;
    }

    function setCharAt(str,index,chr) {
        
        if(index > str.length-1) return str;
        if(str.length === 1) return chr;
        
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    function cmp(a,b){
        if(a===b){
            return 0
        }
        return a > b ? 1 : -1;
    }
}



console.log(solve(7));
// a = ['Q......', '..Q....', '....Q..', '......Q', '.Q.....', '...Q...', '.....Q.', ];
// b = ['......Q', '...Q...', 'Q......', '....Q..', '.Q.....', '.....Q.', '..Q....', ];


// c = [b,a]

// console.log(a<b);
// console.log(c.sort());

// cmp