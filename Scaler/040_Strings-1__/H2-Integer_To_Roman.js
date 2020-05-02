/**
 * Integer To Roman
 * 
Given an integer A, convert it to a roman numeral, and return a string corresponding to its roman numeral version
 Note : This question has a lot of scope of clarification from the interviewer. Please take a moment to think of all the needed clarifications and see the expected response using "See Expected Output" For the purpose of this question, https://projecteuler.net/about=roman_numerals has very detailed explanations. 

Input Format
The only argument given is integer A.
Output Format
Return a string denoting roman numeral version of A.
Constraints
1 <= A <= 3999
For Example
Input 1:
    A = 5
Output 1:
    "V"

Input 2:
    A = 14
Output 2:
    "XIV"
 */

function solve(A) {
    
    const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const value = [1, 5, 10, 50, 100, 500, 1000];

    let ans = '';

    for(let i = 6; i >= 0; i-=2){
        let q = Math.floor(A / value[i]);

        if(q === 4){
            ans += (symbol[i] + symbol[i+1]);
        }else if(q === 9){
            ans += (symbol[i] + symbol[i+2]);
        }
        else if(q >= 5){
            ans += (symbol[i+1] + repeatSymbol(symbol[i], q - 5))
        }else{
            ans += repeatSymbol(symbol[i], q);
        }

        A = A % value[i];
    }

    return ans;

    function repeatSymbol(sym, rep){
        let res = '';
        for(let i = 0; i < rep; ++i){
            res += sym;
        }
        return res;
    }
}

A = 3999;

console.log(solve(A));
