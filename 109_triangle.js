'use strict';

const minimumTotal1 = (triangle) => {
    // bottom up
    if (triangle === null || triangle.length === 0 || triangle[0].length === 0) {
        return -1;
    }
    let n = triangle.length;
    let pathSums = [];
    for (let i = 0; i < n; i++) {
        pathSums.push([])
        for (let j = 0; j < n; j++) {
            pathSums[i].push(0) ;
        }
    }
    // initialize the pathSums
    for (let j = 0; j < n; j++) {
        pathSums[n - 1][j] = triangle[n - 1][j];
    }
    // dp
    for (let i = n - 2; i >=0; i--) {
        for (let j = 0; j <= i; j++) {
            pathSums[i][j] = Math.min(pathSums[i + 1][j], pathSums[i + 1][j + 1]) + triangle[i][j];
        }
    }
    return pathSums[0][0];
};


const minimumTotal2 = (triangle) => {
    // top down
    if (triangle === null || triangle.length === 0 || triangle[0].length === 0) {
        return -1;
    }
    let n = triangle.length;
    let pathSums = [];
    for (let i = 0; i < n; i++) {
        pathSums.push([])
        for (let j = 0; j < n; j++) {
            pathSums[i].push(0) ;
        }
    }
    // initialize the pathSums
    pathSums[0][0] = triangle[0][0];
    for (let i = 1; i < n; i++) {
        pathSums[i][0] = pathSums[i - 1][0] + triangle[i][0];
        pathSums[i][i] = pathSums[i - 1][i - 1] + triangle[i][i];
    }
    // dp
    for (let i = 1; i < n; i ++) {
        for (let j = 1; j < i; j++) {
            pathSums[i][j] = Math.min(pathSums[i - 1] [j - 1], pathSums[i - 1][j]) + triangle[i][j];
        }
    }
    // find the maximum from pathSums[n-1][0] to pathSums[n -1][n-1];
    let minpathSums = Infinity;
    for (let j = 0; j < n; j++) {
        minpathSums = Math.min(minpathSums, pathSums[n - 1][j]);
    }
    return minpathSums;
};

// const main = () => {
//     let triangle;
//     triangle = [[2],
//                 [3,4],
//                 [6,5,7],
//                 [4,1,8,3]];
//     console.log(minimumTotal1(triangle));
//     console.log(minimumTotal2(triangle));
// };
// main();
