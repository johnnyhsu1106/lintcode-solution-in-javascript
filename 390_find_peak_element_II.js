'use strict';

const findPeak = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return [-1, -1];
    }
    let left = 0, right = grid[0].length - 1;
    let up = 0, down = grid.length - 1;

    while (left + 1 < right || up + 1 < down) {
        if (right - left > down - up) {
            y = Math.floor((left + right) / 2);
            x = findXPeak(grid, y, up, down);
            if (isPeak(grid, x, y)) {
                return [x, y];
            } else if (grid[x][y] < grid[x][y - 1]) {
                right = y;
            } else {
                left = y;
            }
        } else {
            x = Math.floor((up + down) / 2);
            y = findXPeak(grid, x, left, right);
            if (isPeak(grid, x, y)) {
                return [x, y];
            } else if (grid[x][y] < grid[x - 1][y]) {
                down = x;
            } else {
                up = x;
            }
        }
    }
};

const findXPeak = (grid, y, up, down) => {
    let max = - Infinity;
    let xPeak;
    for (let x = up; x <= down; x++) {
        if (grid[x][y] > max) {
            max = grid[x][y];
            xPeak = x;
        }
    }
    return xPeak;
};

const findYPeak = (grid, x, left, right) => {
    let max = - Infinity;
    let yPeak;
    for (let y = left; u <= right; y++) {
        if (grid[x][y] > max) {
            max = grid[x][y];
            yPeak = x;
        }
    }
    return yPeak;
};

const isPeak = (grid, x, y) => {
    return grid[x][y] > Math.max(grid[x - 1][y], grid[x + 1][y], grid[x][y - 1], grid[x][y + 1]);
}


// const main = () => {
//     let grid;
//     grid = [[1 ,2 ,3 ,6 ,5],
//              [16,41,23,22,6],
//              [15,17,24,21,7],
//              [14,18,19,20,10],
//              [13,14,11,10,9]];
//     console.log(findPeak(grid));
// };
// main();
