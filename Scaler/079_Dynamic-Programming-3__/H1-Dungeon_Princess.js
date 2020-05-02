/**
 * Dungeon Princess
The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. 

The dungeon consists of M x N rooms laid out in a 2D grid. 

Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess. 

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately. 

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers). 

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step. 

Write a function to determine the knight's minimum initial health so that he is able to rescue the princess. 

For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN. Dungeon Princess: Example 1 

[
    -2, -3, 3,
    -5, -10, 1,
    10, 30, -5
]

Input arguments to function: Your function will get an M*N matrix (2-D array) as input which represents the 2D grid as described in the question. Your function should return an integer corresponding to the knight's minimum initial health required.

 Note:
The knight's health has no upper bound.
Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.
 */

function solve(A) {
    const m = A.length;
    if(m === 0) return 0;
    const n = A[0].length;

    let dp = new Array(n + 1).fill(0);

    dp[n] = -Infinity;
    dp[n-1] = A[m-1][n-1] < 0 ? A[m-1][n-1] : 0;

    for(let i = n-2; i >= 0; --i){
        let sum = dp[i+1] + A[m-1][i];
        dp[i] = sum < 0 ? sum : 0;
    }

    for(let i = m-2; i >= 0; --i){
        for(let j = n-1; j >=0; --j){
            let sum = A[i][j] + Math.max(dp[j], dp[j+1]);
            dp[j] = sum < 0 ? sum : 0;
        }
    }

    return 1 - dp[0];
}

A = [
    [-96, -67, -67, -97, -59, -47, -35, -62, -12, -13, -51, -44, -2, -58, -52, -69, 8, -17, -12, -20],
    [-65, -23, -12, -94, -89, 0, 3, -25, -81, -67, -91, -86, -28, -33, -62, -72, -56, -73, 0, -68],
    [-95, 8, -86, -88, -40, -32, -40, 6, -73, -56, 3, -2, -68, -83, -67, 8, -17, -92, -47, -57],
    [-54, -65, -37, -5, -49, -36, -43, -32, -45, 6, -29, -67, -36, -2, -98, -10, -7, -98, -61, -24],
    [10, -86, -96, -66, 3, -43, -1, -85, -81, -62, -53, -75, -5, 6, 3, -23, 5, -67, -74, -39],
    [-30, -60, -82, -74, -99, -13, -5, -28, -19, -30, -43, 3, -89, -21, -34, -22, -85, -39, -72, -41],
    [-21, -88, -7, -86, -43, -43, -29, -65, -2, -83, -61, -57, -64, -4, -52, 9, -94, -94, -89, -42],
    [-13, -85, -42, -4, -8, -41, -85, -24, -3, -49, -78, -96, -5, -85, -54, -20, -3, -71, 7, -57],
    [-46, -85, -48, -89, -96, -7, -28, -66, -79, -47, -48, -61, 2, -21, -1, -76, -96, -28, -15, -37],
    [-59, -18, -63, -86, 9, -8, -65, -97, -23, 7, -41, -85, -60, -31, -54, -16, -17, -85, 2, -53],
    [-92, -53, -88, -96, -84, 1, -2, -76, -14, -57, -47, -34, -40, -67, -42, -68, -85, -74, -99, -57],
    [-35, 0, 1, 0, 9, -100, -89, -82, -22, -1, -99, -32, -33, -77, 10, -13, -44, -54, -69, -51],
    [-78, -80, -90, -4, -12, 2, -27, -71, -27, 3, -82, -65, -43, -10, -42, -67, -2, -61, -60, -82],
    [-18, 5, -91, -23, -21, -61, -33, -23, 3, -82, -88, -95, -17, -70, -62, -53, -16, -22, -26, -41],
    [1, -97, -44, 3, -22, -76, -29, -44, -21, -87, -4, -37, -2, -1, -39, -55, -80, -67, -18, -62],
    [-40, -78, -85, -98, -42, -14, -97, -42, -22, 0, -80, -12, -44, -54, -61, -18, -62, -68, -95, -68],
    [-37, -2, -35, -87, -58, -18, -6, 8, -83, -91, -57, -78, 9, -52, -58, -76, -100, 5, -52, -16],
    [8, -89, -7, -75, -68, -71, 7, -93, -47, -96, -45, -13, -57, 7, -82, -9, -34, -26, -58, -51],
    [-81, -5, -25, -35, -96, -13, -18, -65, -96, 4, -41, -51, -62, -24, -77, -36, -72, 10, -52, -21],
    [-91, -65, -5, -1, -45, -47, -59, -8, -38, -41, -42, -72, -30, -100, -17, 9, -49, -73, -13, 5],
  ]

console.log(solve(A));
