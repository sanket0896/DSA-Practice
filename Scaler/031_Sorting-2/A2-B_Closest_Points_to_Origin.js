/** 
 * B Closest Points to Origin
 * 
Problem Description
We have a list A, of points(x,y) on the plane. Find the B closest points to the origin (0, 0). Here, the distance between two points on a plane is the Euclidean distance. You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.) NOTE: Euclidean distance between two points P1(x1,y1) and P2(x2,y2) is sqrt( (x1-x2)^2 + (y1-y2)^2 ). 


Problem Constraints
1 <= B <= length of the list A <= 100000
-100000 <= A[i][0] <= 100000
-100000 <= A[i][1] <= 100000


Input Format
The argument given is list A and an integer B.


Output Format
Return the B closest points to the origin (0, 0) in any order.


Example Input
A = [ [1, 3],
      [-2, 2]  ]
B = 1


Example Output
[ [-2, 2] ]


Example Explanation
The Euclidean distance will be sqrt(10) for point [1,3] and sqrt(8) for point [-2,2].
So one closest point will be [-2,2].
*/

function solve(A, B){
    A.sort(cmp);
    return A.slice(0, B);
    
    function cmp(a,b){
        const d1 = distanceFromOrigin(a);
        const d2 = distanceFromOrigin(b);
        
        return d1 === d2 ? 0 : ( d1 > d2  ? 1 : -1);
    }
    
    function distanceFromOrigin(pt){
        return Math.sqrt(pt[0]*pt[0] + pt[1]*pt[1]);
    }
}

A = [ 
    [1, 3],
    [-2, 2],
    [0,-3],
    [-1,-1],
    [23,4],
    [0,1]
];
B = 2;

console.log(solve(A,B));
