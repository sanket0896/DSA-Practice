/**
 * Game of Bottles
 * 
Given an array of integers A of size N which denotes N cylindrical empty bottles. The radius of the i'th bottle is A[i]. You can put the i'th bottle into the j'th bottle if the following conditions are met:
1. i'th bottle is not put into another bottle.
2. j'th bottle dosen't contain any other bottle. 
3. The radius of bottle i is smaller than bottle j (A[i] < A[j])
You can put bottles into each other any number of times. You want to MINIMIZE the number of visible bottles. A bottle is called visible if it is not put into any other bottle. Find and return the minimum number of visible bottles. Constraints:
Number of bottles N <= 1000000
Radius of each bottle R <= 100000000
Input:
Each test case contains an integer array A. This array gives the radius of the cyclindrical bottles.
Output:
Return a single integer corresponding to the minimum number of visible bottles.
Example: Input:
A = [1 2 3]
Output:
1
Explanation:
In the first example it is possible to put bottle 1 into bottle 2, and 2 into 3.
 */

function solve(A){
    const al = A.length;
    A.sort(cmp);

    if(al === 0){
        return 0;
    }

    let maxCnt = 1;
    let localCnt = 1;

    for(let i = 1; i < al; ++i){
        
        if(A[i] === A[i-1]){
            ++localCnt;
        }else{
            maxCnt = maxCnt < localCnt ? localCnt : maxCnt;
            localCnt = 1;
        }
    }
    
    maxCnt = maxCnt < localCnt ? localCnt : maxCnt;
    
    return maxCnt;
}

function cmp(a,b) {
    return a === b ? 0 : (a < b ? 1 : -1);
}

A = [5, 5, 5, 4, 4, 3, 1, 1, 1, 1, 1];

console.log(solve(A));
