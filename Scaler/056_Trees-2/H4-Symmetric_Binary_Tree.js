/**
 * Symmetric Binary Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center). Example :
    1
   / \
  2   2
 / \ / \
3  4 4  3
The above binary tree is symmetric. But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Return 0 / 1 ( 0 for false, 1 for true ) for this problem
 */

// Definition for a  binary tree node
   function TreeNode(data){
     this.data = data
     this.left = null
     this.right = null
   }

function solve(A) {
    let q = [A, -1];
    let ans = true;

    while (q.length) {
        let node = q.shift();

        if(node === null) continue;

        if(node === -1){
            if(q.length === 0){
                break;
            }

            if(checkEquality(q)){
                q.push(-1);
            }else{
                ans = false;
                break;
            }
        }else{
            !!node.left ? q.push(node.left) : q.push(null);
            !!node.right ? q.push(node.right) : q.push(null);
        }

    }

    return ans ? 1 : 0;

    function checkEquality(arr) {
        let al = arr.length;
        if(al % 2 === 1){
            return false;
        }

        for(let i = 0; i < al/2; ++i){

            if(arr[i]){
                arr[i] = arr[i].data;
            }

            if(arr[al-1-i]){
                arr[al-1-i] = arr[al-1-i].data;
            }

            if(arr[i] !== arr[al-1-i]){
                return false;
            }
        }
        return true;
    }
}

test = 
    "12 66 36 45 17 37 -1 32 28 -1 59 95 -1 31 77 -1 41 -1 -1 84 -1 92 98 93 5 35 72 53 -1 76 54 23 68 89 61 67 -1 82 -1 -1 40 85 -1 74 3 49 24 -1 64 94 4 -1 48 21 57 19 97 -1 -1 46 58 52 14 -1 91 30 79 -1 13 -1 -1 6 62 -1 -1 75 11 55 51 87 -1 88 81 50 90 80 33 -1 -1 -1 -1 -1 -1 34 -1 -1 -1 -1 -1 7 -1 -1 -1 29 8 96 38 20 -1 60 83 71 -1 -1 -1 -1 -1 -1 63 -1 -1 86 -1 -1 -1 9 -1 43 2 -1 -1 -1 -1 -1 -1 70 78 42 16 -1 -1 69 -1 -1 -1 73 -1 -1 -1 -1 -1 27 -1 26 -1 56 22 10 -1 25 44 65 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 47 -1 1 -1 -1 -1 15 -1 -1 39 -1 -1 18 -1 -1 -1 -1 -1 -1 -1 -1"
    .split(' ').map(i => +i);

for(let i = test.length - 1; i >= 0; --i){
    if(test[i] === -1){
        test[i] = null;
    }else{
        test[i] = new TreeNode(test[i]);
        let l = 2 * i + 1;
        let r = 2 * i + 2;
 
        if(l < test.length){
            test[i].left = test[l];
        }
 
        if(r < test.length){
            test[i].right = test[r];
        }
    }
}

console.log(solve(test[0]));
