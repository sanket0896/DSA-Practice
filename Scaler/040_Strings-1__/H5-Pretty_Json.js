/**
 * Pretty Json
 * 
Given a string A representating json object. Return an array of string denoting json object with proper indentaion. Rules for proper indentaion:
Every inner brace should increase one indentation to the following lines.
Every close brace should decrease one indentation to the same line and the following lines.
The indents can be increased with an additional '\t'
Note:
[] and {} are only acceptable braces in this case.
Assume for this problem that space characters can be done away with.

Input Format
The only argument given is the integer array A.
Output Format
Return a list of strings, where each entry corresponds to a single line. The strings should not have "\n" character in them.
For Example
Input 1:
    A = "{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}"
Output 1:
    { 
        A:"B",
        C: 
        { 
            D:"E",
            F: 
            { 
                G:"H",
                I:"J"
            } 
        } 
    }

Input 2:
    A = ["foo", {"bar":["baz",null,1.0,2]}]
Output 2:
   [
        "foo", 
        {
            "bar":
            [
                "baz", 
                null, 
                1.0, 
                2
            ]
        }
    ]
 */

function solve(A) {
    const al = A.length;

    let indent = '';
    let curr = '';
    let ans = [];

    for(let i = 0; i < al; ++i){
        if(A[i] === '{' || A[i] === '['){
            if(curr !== ''){
                ans.push(indent+curr);
                curr = '';
            }
            ans.push(indent + A[i]);
            indent += '\t';
        }
        else if(A[i] === ','){
            curr += A[i];
            ans.push(indent + curr);
            curr = '';
        }
        else if(A[i] === '}' || A[i] === ']'){
            if(curr !== ''){
                ans.push(indent+curr);
                curr = '';
            }

            indent = indent.slice(0,-1);
            curr = A[i];
            
            if(A[i+1] === ','){
                curr += A[i+1];
                ++i;
            }

            ans.push(indent + curr);
            curr = '';

        }else if(A[i] === ' '){
            continue;
        }
        else{
            curr += A[i];
        }
    }

    return ans;
}

A = `{"attributes":[{"nm":"ACCOUNT","lv":[{"v":{"Id":null,"State":null},"vt":"java.util.Map","cn":1}],"vt":"java.util.Map","status":"SUCCESS","lmd":13585},{"nm":"PROFILE","lv":[{"v":{"Party":null,"Ads":null},"vt":"java.util.Map","cn":2}],"vt":"java.util.Map","status":"SUCCESS","lmd":41962}]}`

console.log(solve(A));