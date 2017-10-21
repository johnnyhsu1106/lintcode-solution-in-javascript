'use strict';

const uniquePaths = (m, n) => {
    if (m === 0 || n === 0) {
        return 1;
    }

    let pathSums = [];
    for (let x = 0; x < m; x++) {
        pathSums.push([]);
        for (let y = 0; y < n; y++){
            pathSums[x].push(0);
        }
    }
    // initialze the pathSums
    pathSums[0][0] = 1
    for (let x = 1; x < m; x++) {
        pathSums[x][0] = pathSums[x - 1][0];
    }
    for (let y = 1; y < n; y++) {
        pathSums[0][y] = pathSums[0][y - 1];
    }
    // dp
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            pathSums[x][y] = pathSums[x][y - 1] + pathSums[x - 1][y];
        }
    }
    return pathSums[m - 1][n - 1];
};


// const main = () => {
//     console.log(uniquePaths(3, 3));
//     console.log(uniquePaths(4, 5));
// };
// main();
