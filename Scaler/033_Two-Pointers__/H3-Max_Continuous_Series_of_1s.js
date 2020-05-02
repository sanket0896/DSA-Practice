/**
 * Max Continuous Series of 1s
 * 
You are given with an array of 1s and 0s. And you are given with an integer M, which signifies number of flips allowed. Find the position of zeros which when flipped will produce maximum continuous series of 1s. For this problem, return the indices of maximum continuous series of 1s in order. Example:
Input : 
Array = {1 1 0 1 1 0 0 1 1 1 } 
M = 1

Output : 
[0, 1, 2, 3, 4] 
If there are multiple possible solutions, return the sequence which has the minimum start index.
*/

function solve(A, B) {
    const al = A.length;

    let maxCount = 0;
    let start = 0;
    let end = 0;
    let l = 0;
    let r = 0;
    let count = 1;
    let flips = B;

    while (r < al) {

        if(A[r] === 1){
            ++count;
            ++r;

            if(count > maxCount){
                maxCount = count;
                start = l;
                end = r - 1;
            }
            
        }else if(A[r] === 0){
            if(flips > 0){
                --flips;
                ++count;
                ++r;

                if(count > maxCount){
                    maxCount = count;
                    start = l;
                    end = r - 1;
                }
            }else{

                while(l < al){

                    if(A[l] === 0){
                        ++flips;
                        ++l;
                        --count;
                        break;
                    }

                    ++l;
                    --count;
                }
            }
        }
    }

    const ans = [];
    for(let i = start; i <= end; ++i){
        ans.push(i);
    }

    return ans;
}

A = [0,1,1,1] 
M = 0

console.log(solve(A,M));
