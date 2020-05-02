/**
 * Regular Expression Match
Implement wildcard pattern matching with support for '?' and '*' for strings A and B.
'?' : Matches any single character.
'*' : Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial). Input Format:
The first argument of input contains a string A.
The second argument of input contains a string B.
Output Format:
Return 0 or 1:
    => 0 : If the patterns do not match.
    => 1 : If the patterns match.
Constraints:
1 <= length(A), length(B) <= 9e4
Examples :
Input 1:
    A = "aa"
    B = "a"

Output 1:
    0

Input 2:
    A = "aa"
    B = "aa"

Output 2:
    1

Input 3:
    A = "aaa"
    B = "aa"

Output 3:
    0

Input 4:
    A = "aa"
    B = "*"

Output 4:
    1

Input 5:
    A = "aa"
    B = "a*"

Output 5:
    1

Input 6:
    A = "ab"
    B = "?*"

Output 6:
    1

Input 7:
    A = "aab"
    B = "c*a*b"

Output 7:
    0
 */

function solve(A, B) {
    const al = A.length;
    const bl = B.length;

    let aCtr = 0;
    let bCtr = 0;

    for(let i = 0; i < al; ++i){
        ++aCtr;
    }

    for(let i = 0; i < bl; ++i){
        B[i] !== '*' && ++bCtr;
    }

    if(aCtr < bCtr){
        return 0;
    }

    let dp = new Array(2);
    dp[0] = new Array(al + 1).fill(0);
    dp[0][0] = 1;
    dp[1] = new Array(al + 1).fill(0);
    for(let p = 0; p < bl; ++p){
        let char = B[p];
        for(let n = 0; n<= al; ++n){
            dp[1][n] = 0;
            if(char === '?'){
                if(n-1 >= 0 && dp[0][n-1] === 1){
                    dp[1][n] = 1;
                }
            }else if(char === '*'){
                if(dp[0][n] === 1){
                    dp[1][n] = 1;
                }else if(n-1 >= 0 && dp[1][n-1] === 1){
                    dp[1][n] = 1;
                }
            }else{
                if(n-1 >= 0 && char === A[n-1]){
                    if(dp[0][n-1] === 1){
                        dp[1][n] = 1;
                    }
                }
            }
        }
        dp[0] = [...dp[1]];
    }

    return dp[1][al];
}

A = "c"
B = "c?"

console.log(solve(A, B));
