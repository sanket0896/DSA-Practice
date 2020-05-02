/**
 *   49. Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

function solve(A) {
    let map = new Map();
    
    A.forEach(el => {
        let freq = new Array(26).fill(0);
        const elL = el.length;
        
        for(let i = 0; i < elL; ++i){
            freq[el.charCodeAt(i) - 97]++;
        }
        
        let str = freq.toString();

        if(map.has(str)){
            map.get(str).push(el);
        }else{
            map.set(str,[el]);
        }
    });
    let ans = [];
     map.forEach(val => {ans.push(val)});
     return ans;
}

A =  ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(solve(A));

