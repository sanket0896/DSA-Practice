/**
 * 678. Valid Parenthesis String
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
 */

function solve(s) {
    sl = s.trim().length;

    if(sl === 0){
        return true;
    }

    return checkLeft() && checkRight();

    function checkLeft() {
        let retVal = true;
        let cLeft = 0;
        let cStar = 0;
        for(let i = 0; i < sl; ++i){
            if(s[i] === '('){
                ++cLeft;
            }else if(s[i] === ')'){
                if(cLeft > 0){
                    --cLeft
                }else if(cStar > 0){
                    --cStar;
                }else{
                    retVal = false;
                    break;
                }
            }else if(s[i] === '*'){
                ++cStar;
            }
        }
        return retVal;
    }

    function checkRight() {
        let retVal = true;
        let cRight = 0;
        let cStar = 0;
        for(let i = sl-1; i >= 0; --i){
            if(s[i] === ')'){
                ++cRight;
            }else if(s[i] === '('){
                if(cRight > 0){
                    --cRight
                }else if(cStar > 0){
                    --cStar;
                }else{
                    retVal = false;
                    break;
                }
            }else if(s[i] === '*'){
                ++cStar;
            }
        }
        return retVal;
    }
}

let s = ")*(";
console.log(solve(s));
