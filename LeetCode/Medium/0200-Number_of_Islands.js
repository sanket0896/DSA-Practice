/**
 *  200. Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

 */

function solve(grid){
    let rows = grid.length;
    if(!rows) return 0;
    let cols = grid[0].length;

    let ans = 0;

    for(let i = 0; i < rows; ++i){
        for(let j = 0; j < cols; ++j){
            if(grid[i][j] === '1'){
                ++ans;
                travel(i,j);
            }
        }
    }

    return ans;

    function travel(x, y){
        if(x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === '0'){
            return;
        }

        grid[x][y] = '0';

        travel(x,y-1);
        travel(x+1,y);
        travel(x,y+1);
        travel(x-1,y);
    }
}

A = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
];

A = A.map(row => row.map(el => el.toString()));

console.log(solve(A));
