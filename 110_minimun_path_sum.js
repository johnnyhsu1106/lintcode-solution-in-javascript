'use strict';

const minPathSum = (grid) =>  {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return null;
    }
    let m = grid.length, n = grid[0].length;
    let pathSums = [];
    for (let x = 0; x < m; x++) {
        pathSums.push([]);
        for (let y = 0; y < n; y++) {
            pathSums[x].push(0);
        }
    }
    // initial pathSums
    pathSums[0][0] = grid[0][0]
    for (let x = 1; x < m; x++) {
        pathSums[x][0] = pathSums[x - 1][0] + grid[x][0];
    }
    for (let y = 1; y < n; y++) {
        pathSums[0][y] = pathSums[0][y - 1] + grid[0][y];
    }
    // DP
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            pathSums[x][y] = Math.min(pathSums[x][y - 1], pathSums[x - 1][y]) + grid[x][y];
        }
    }
    return pathSums[m - 1][n - 1];
};


// const main = () => {
//     let grid;
//     grid = [[1,3,1],
//             [1,5,1],
//             [4,2,1]];
//     console.log(minPathSum(grid));
//
// };
// main();
