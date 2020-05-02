/**
 *   Last Stone Weight
 * 
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
 */

var lastStoneWeight = function(stones) {
    let buckets = new Array(1001).fill(0);

    stones.forEach(stone => {buckets[stone]++});

    let r = 1000;
    let l = 1000;

    while(l >= 0){
        r = findRight(r);
        l = findLeft(r);

        if(r >= 0 && l>= 0){
            buckets[r]--;
            buckets[l]--;
            buckets[Math.abs(r-l)]++;
        }
    }

    return r > 0 ? r : 0;

    function findRight(x) {
        let i = x;
        for(i; i >= 0; --i){
            if(buckets[i] % 2 !== 0){
                break;
            }else{
                buckets[i] = 0;
            }
        }
        
        return i;
    }

    function findLeft(x) {
        let i = x-1;
        for(i; i >= 0; --i){
            if(buckets[i] > 0){
                break;
            }
        }
        return i;
    }
};

A = [8,3,3];

console.log(lastStoneWeight(A));
