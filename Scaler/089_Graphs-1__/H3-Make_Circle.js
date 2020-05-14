/**
 * Make Circle
Problem Description
Given an array of strings A of size N, find if the given strings can be chained to form a circle. A string X can be put before another string Y in circle if the last character of X is same as first character of Y. NOTE: All strings consist of lower case characters.    


Problem Constraints
1 <= N <= 105 Sum of length of all strings <= 106    


Input Format
First and only argument is a string array A of size N.


Output Format
Return an integer 1 if it is possible to chain the strings to form a circle else return 0.


Example Input
Input 1:
 A = ["aab", "bac", "aaa", "cda"]
Input 2:
 A = ["abc", "cbc"]
   


Example Output
Output 1:
 1
Output 2:
 0
   


Example Explanation
Explanation 1:
 We can chain the strings aab -> bac -> cda -> aaa -> aab. So this forms a circle. So, output will be 1. 
Explanation 2:
 There is no way to chain the given strings such that they forms a circle.
 */

/**
 *      SOLUTION
 * 
 *  1. Create 2 maps, one for start character and another for end character to store index of word starting with that character.
 *  2. For each char in the start map, check if number of words starting with that char and number of words ending with that char are same.
 *  3. Also check that we aren't counting same words twice, for example "aba" will come in both maps
 *  4. If all characters have same number of words in both maps then it can form a circle.
 */

function solve(A) {
    let al = A.length;
    let sMap = new Map();
    let eMap = new Map();
    let ans = true;

    for(let i = 0; i < al; ++i){
        let len = A[i].length;
        let sc = A[i][0];
        let ec = A[i][len - 1];

        if(sMap.has(sc)){
            sMap.get(sc).push(i);
        }else{
            sMap.set(sc, [i]);
        }

        if(eMap.has(ec)){
            eMap.get(ec).push(i);
        }else{
            eMap.set(ec, [i]);
        }
    }

    for([key, sVals] of sMap){
        if(!eMap.has(key)){
            ans = false;
            break;
        }

        let eVals = eMap.get(key);

        if(eVals.length !== sVals.length){
            ans = false;
            break;
        }

        if(eVals.length === 1 && eVals[0] === sVals[0]){
            ans = false;
            break;
        }
    }

    return ans ? 1 : 0;
}

A = ["aab", "bac", "aaax", "cda", "xa"]
console.log(solve(A));
