/**
 * 
 * Same Format String
Given two strings A and B. Check if B contains same characters as that of given string A and in the same order. Note
 1: A and B contain only UPPERCASE Letters.
2: No two consecutive characters are same in A.
3: You can only use constant amount of extra memory. 

Input Format
The first argument given is string A.
The second argument given is string B.
Output Format
Return 1 if B contains same characters as that of given string A and in the same order else return 0.
For Example
Input 1:
    A = "HIRED" 
    B = "HHHIIIRRRRREEEEEDDDDD"
Output 1:
    1

Input 2:
    A = "HIRED"
    B = "DDHHHHIIIIRRRRREEEEDDD"
Output 2:
    0
 */

function solve(A, B) {
    const al = A.length;
    const bl = B.length;
    let ans = 1;

    if(al === 0){
        return 0;
    }

    let i = 0;
    let j = 0;

    while(i < al && j < bl){
        if(B[j] === B[j+1]){
            ++j;
        }else{
            if(B[j] === A[i]){
                ++i;
                ++j;

            }else{
                
                ans = 0;
                break;
            }

        }
    }

    if(ans === 1){

        if(i === al && j === bl){
            ans = 1;
        }else{
            ans = 0;
        }
    }

    return ans;
}

A = "HIRE" 
B = "HIRE"
console.log(solve(A,B))