'use strict';

const shortestPath2_dp = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }
    let n = grid.length, m = grid[0].length;

    let pathSums = [];
    for (let x = 0; x < n; x++) {
        pathSums.push([]);
        for (let y = 0; y < m; y++) {
            pathSums[x].push(Infinity);
        }
    }

    pathSums[0][0] = 0;
    for (let y = 1; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[x][y] === 0) {
                if (x - 1 >= 0 && y - 2 >= 0 && pathSums[x - 1][y - 2] !== Infinity) {
                    pathSums[x][y] = Math.min(pathSums[x][y], pathSums[x - 1][y - 2] + 1);
                }
                if (x + 1 < n && y - 2 >= 0 && pathSums[x + 1][y - 2] !== Infinity) {
                    pathSums[x][y] = Math.min(pathSums[x][y], pathSums[x + 1][y - 2] + 1);
                }
                if (x - 2 >= 0 && y - 1 >= 0 && pathSums[x - 2][y - 1] !== Infinity) {
                    pathSums[x][y] = Math.min(pathSums[x][y], pathSums[x - 2][y - 1] + 1);
                }
                if (x + 2 < n && y - 1 >= 0 && pathSums[x + 2][y - 1] !== Infinity) {
                    pathSums[x][y] = Math.min(pathSums[x][y], pathSums[x + 2][y - 1] + 1);
                }
            }
        }
    }
    if (pathSums[n - 1][m - 1] === Infinity) {
        return -1;
    }
    return pathSums[n - 1][m - 1];
};



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const shortestPath2_bfs = (grid) =>  {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }
    let n = grid.length, m = grid[0].length;
    let start = new Point(0, 0), end = new Point(n - 1, m - 1);
    let queue = [start];
    grid[start.x][start.y] = 0;
    // BFS
    let step = 0;
    let dx = [1, -1, 2, -2], dy = [2, 2, 1, 1];

    while (queue.length !== 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let point = queue.shift();
            if (point.x === end.x && point.y === end.y) {
                return step;
            }
            for (let j = 0; j < 4; j++)  {

                let newPoint = new Point(point.x + dx[j], point.y + dy[j]);
                if (isBounded(grid, newPoint) && grid[newPoint.x][newPoint.y] === 0) {
                    queue.push(newPoint);
                    grid[newPoint.x][newPoint.y] = 1;
                }
            }
        }
        step++;
    }
    return -1;
};
const isBounded = (grid, point) => {
    let n = grid.length, m = grid[0].length;
    return 0 <= point.x && point.x < n && 0 <= point.y && point.y < m;
};



// const main = () =>  {
//     let grid;
//     grid = [[0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0]];
//     console.log(shortestPath2_dp(grid));
//
//     grid = [[0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0]];
//     console.log(shortestPath2_bfs(grid));
// };
// main();
