/**
 * Regular Expression II
Implement regular expression matching with support for '.' and '*'. '.' Matches any single character. '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial). The function prototype should be:
int isMatch(const char *s, const char *p)
Some examples:
isMatch("aa","a") → 0
isMatch("aa","aa") → 1
isMatch("aaa","aa") → 0
isMatch("aa", "a*") → 1
isMatch("aa", ".*") → 1
isMatch("ab", ".*") → 1
isMatch("aab", "c*a*b") → 1
Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

function isMatch(A, B) {
    const al = A.length;
    const bl = B.length;

    let isStar = false;
    let dp = [
        new Array(al+1).fill(false),
        new Array(al+1).fill(false),
    ]
    dp[0][0] = true;
    dp[1][0] = true;
    for(let p = 0; p < bl; ++p){

        if(p+1 < bl && B[p+1] === '*'){
            isStar = true;
        }else{
            isStar = false;
        }

        for(let n = 0; n <= al; ++n){
            if(n === 0){
                if(isStar){
                    dp[1][n] = dp[0][n];
                }else{
                    dp[1][n] = false;
                }
                continue;
            }

            if(isStar){
                if(B[p] === '.'){
                    dp[1][n] = dp[1][n-1] || dp[0][n-1] || dp[0][n];
                }else if(B[p] === A[n-1]){
                    dp[1][n] = dp[1][n-1] || dp[0][n-1] || dp[0][n];
                }else{
                    dp[1][n] = dp[0][n];
                }
            }else{
                if(B[p] === '.'){
                    dp[1][n] = dp[0][n-1];
                }else if(B[p] === A[n-1]){
                    dp[1][n] = dp[0][n-1];
                }else{
                    dp[1][n] = false;
                }
            }
        }
        dp[0] = [...dp[1]];
        isStar && ++p;
    }

    return dp[1][al] ? 1 : 0;
}

console.log(isMatch("aab", "c*a*b"));
