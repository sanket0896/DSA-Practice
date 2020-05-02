/**
 * 844. Backspace String Compare
 * 
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */

function solve(S, T) {
    S = S.split('');
    T = T.split('');
    const sl = S.length;
    const tl = T.length;
    let ans = true;

    let backS = 0;
    let backT = 0;

    let i = sl - 1;
    let j = tl - 1;

    while (i >= 0 || j >= 0) {
        // For S
        while(i >= 0){
            if(S[i] === '#'){
                ++backS;
            }else if(backS > 0){
                --backS;
            }else{
                break;
            }
            --i;
        }

        // For T
        while(j >= 0){
            if(T[j] === '#'){
                ++backT;
            }else if(backT > 0){
                --backT;
            }else{
                break;
            }
            --j;
        }

        if(i >= 0 && j >= 0 && S[i] !== T[j]){
            ans = false;
            break;
        }

        if(i >= 0 !== j >= 0){
            ans = false;
            break;
        }

        --i;
        --j;
    }

    return ans;
}

S = "bbbextm";
T = "bbb#extm";
console.log(solve(S,T));
