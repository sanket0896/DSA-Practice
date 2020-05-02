/**
 * kth character in double decrypted string
 * 
Given a String A and an integer B. String A is encoded consisting of lowercase English letters and numbers. A is encoded in a way where repetitions of substrings are represented as substring followed by the count of substrings. For example: if the encrypted string is “ab2cd2” and B=6, so the output will be ‘d’ because the decrypted string is “ababcdababcd” and 4th character is ‘b’. You have to find and return the Bth character in the decrypted string. Note: Frequency of encrypted substring can be of more than one digit. For example, in “ab12c3”, ab is repeated 12 times. No leading 0 is present in the frequency of substring. Input Format
The arguments given are string A and integer B.
Output Format
Return the Bth character in the decrypted string.
Constraints
1 <= length of the array <= 10^5
1 < = K < = 10^9
For Example
Input 1:
    A = "ab2c3"
    B = 8
Output 1:
    a
    Decrypted string will be "ababcababcababc" and 'a' is the 8th character.

Input 2:
    A = "x2y3"
    B = 3
Output 2:
    y
    Decrypted string will be "xxyxxyxxy"
 */


function solve(A, B) {
    let al = A.length;
    let stack = [];
    let count = 0;
    let mul = 1;
    let num = '';
    let ans = '';

    for(let i = 0; i < al; ++i){
        if(A[i] >= 'a' && A[i] <= 'z'){
            ++count;
            stack.push({char: A[i], idx: count});
        }
        else{
            num += A[i]
            if(i+1 < al && A[i + 1] >= '0' && A[i+1] <= '9'){
                continue;
            }

            count *= parseInt(num);
            num = '';
        }
    }
    while (stack.length) {
        let top = stack.pop();

        if(top.idx <= B){
            B = B % top.idx;

            if(B === 0){
                ans = top.char;
                break;
            }
        }
    }

    return ans;
}

A = "xk92pn84qv71d"
B = 180

console.log(solve(A,B));
