/**
 * 
 * 3 Sum
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
Return the sum of the three integers. 
Assume that there will only be one solution 
Example: given array S = {-1 2 1 -4}, and target = 1. 
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 */

 function solve(A, B) {
     A.sort(cmp);

     const al = A.length;
     let ans = A[0]+A[1]+A[2];
     let found = false;
     let minDiff = B - ans;
     
     for(let i = 0; i < al; ++i){

        let j = i + 1;
        let k = al - 1;
        let findSum = B - A[i];

        while(j < k){
            let sum = A[j]+A[k];
            
            if(sum > findSum){
                --k;
            }else if(sum < findSum){
                ++j;
            }else{
                found = true;
            }

            let diff = B - (sum + A[i]);
            
            if(Math.abs(diff) < Math.abs(minDiff)){
                minDiff = diff;
                ans = sum + A[i];

            }
            
            if(found){
                break;
            }
        }
        
        if(found){
            break;
        }
    }
    
     return ans;

     function cmp(a, b) {
         return a === b ? 0 : (a > b ? 1 : -1);
     }
 }

 A = [ 2, 1, -9, -7, -8, 2, -8, 2, 3, -8 ]
 B = -1

 console.log(solve(A,B));
 