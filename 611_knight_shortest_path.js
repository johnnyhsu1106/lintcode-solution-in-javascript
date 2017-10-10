'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const shortestPath = (grid, source, destination) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0){
        return -1;
    }
    let m = grid.length, n = grid[0].length;
    let dx = [1, 1, -1, -1, 2, 2, -2, -2];
    let dy = [2, -2, 2, -2, 1, -1, 1, -1];

    let queue = [source];
    let steps = 0;

    while (queue.length !== 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let point = queue.shift();
            grid[point.x][point.y] = 1;

            if (point.x === destination.x && point.y === destination.y ) {
                return steps;
            }
            // find the next 8 steps except barrier
            for (let i = 0; i < 8; i++) {
                let nextPoint = new Point(point.x + dx[i], point.y + dy[i]);
                if (isBound(nextPoint, grid) && grid[nextPoint.x][nextPoint.y] === 0) {
                    queue.push(nextPoint);
                    grid[nextPoint.x][nextPoint.y] = 1;
                }
            }
        }
        steps++
    }
    return -1;
};
const isBound = (point, grid) => {
    let m = grid.length, n = grid[0].length;
    return point.x >= 0 && point.x < m && point.y >= 0 && point.y < n;
};





// const main = () => {
//     let grid, source, destination;
//
//     grid = [[0,0,0],
//             [0,0,0],
//             [0,0,0]];
//     source = new Point(2,0);
//     destination = new Point(2, 2);
//     console.log(shortestPath(grid, source, destination) === 2);
//
//     grid = [[0,1,0],
//             [0,0,0],
//             [0,0,0]];
//     source = new Point(2, 0);
//     destination = new Point(2, 2);
//     console.log(shortestPath(grid, source, destination) === 6);
//
//     grid = [[0,1,0],
//             [0,0,1],
//             [0,0,0]];
//     source = new Point(2, 0);
//     destination = new Point(2, 2);
//     console.log(shortestPath(grid, source, destination) === -1);
// };
// main();
