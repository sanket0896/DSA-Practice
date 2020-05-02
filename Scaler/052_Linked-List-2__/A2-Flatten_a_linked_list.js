/**
 * Flatten a linked list
Given a linked list where every node represents a linked list and contains two pointers of its type:
Pointer to next node in the main list (right pointer)
Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list. The flattened linked list should also be sorted. 
Input Format
The only argument given is head pointer of the doubly linked list.
Output Format
Return the head pointer of the Flattened list. 
Constraints
1 <= Total nodes in the list <= 100000
1 <= Value of node <= 10^9
For Example
Input 1:
       3 -> 4 -> 20 -> 20 ->30
       |    |    |     |    |
       7    11   22    20   31
       |               |    |
       7               28   39
       |               |
       8               39

Output 1:
3 -> 4 -> 7 -> 7 -> 8 -> 11 -> 20 -> 20 -> 20 -> 22 -> 28 -> 30 -> 31 -> 39 -> 39 
 */

function NodeEl(data){
    this.data = data;
    this.right = null;
    this.down = null;
}

function solve(A) {
    let curr = A;
    let top = A;

    while(top !== null){
        top = top.right;

        while(curr.down !== null){
            let tmp = curr.down;
            curr.down = null;
            curr.right = tmp;
            curr = tmp;
        }

        curr.right = top;
        curr = top;
    }

    A = mergeSort(A);

    return A;

    function mergeSort(head) {
        // console.log(head);
        

        if(head.right === null){
            return head;
        }

        let mid = getMid(head);
        let next = mid.right;
        mid.right = null;

        head = mergeSort(head);
        next = mergeSort(next);

        head = merge(head, next);
        return head;
    }

    function merge(h1, h2) {
        let head = null;
        let curr = null;
        if(h1.data <= h2.data){
            head = h1;
            curr = h1;
            h1 = h1.right;
        }else{
            head = h2;
            curr = h2;
            h2 = h2.right;
        }

        while (h1 !== null && h2 !== null) {
            if(h1.data <= h2.data){
                curr.right = h1;
                curr = h1;
                h1 = h1.right;
            }else{
                curr.right = h2;
                curr = h2;
                h2 = h2.right;
            }
        }

        if(h1 !== null){
            curr.right = h1;
        }else if(h2 !== null){
            curr.right = h2;
        }

        return head;
    }

    function getMid(head) {
        let slow = head;
        let fast = head.right;

        while (fast !== null && fast.right !== null) {
            slow = slow.right;
            fast = fast.right.right;
        }

        return slow;
    }
}

// -------------------- Testing ------------------------

let A = [
    [3,     4,   20,    20,   30,],
    [7,    11,   22,    20,   31,],          
    [7,    -1,   -1,    28,   39,],        
    [8,    -1,   -1,    39,   -1,],
]

let head = new NodeEl(3);
let curr = head;
A[0][0] = curr;

for(let i = 1; i < A[0].length; ++i){

    curr.right = new NodeEl(A[0][i]);
    curr = curr.right;
    A[0][i] = curr;
}

for(let j = 0; j < A[0].length; ++j){
    curr = A[0][j];
    for(let i = 1; i < A.length; ++i){
        
        if(A[i][j] === -1){
            break;
        }

        curr.down = new NodeEl(A[i][j]);
        curr = curr.down;
        A[i][j] = curr;
    
    }
}

head = solve(head);
let test = [];
while(head !== null){
    test.push(head.data);
    head = head.right;
}
console.log(test);
