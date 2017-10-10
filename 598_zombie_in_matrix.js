'use strict';

const WALL = 2;
const ZOMBIE = 1;
const PEOPLE = 0;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const zombie = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }
    let m = grid.length, n = grid[0].length;
    let numPeople = 0;
    let queue = [];
    //  find all zombie & people, put all zombies into queue
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === ZOMBIE) {
                queue.push(new Point(x, y));
            }
            if (grid[x][y] === PEOPLE) {
                numPeople++
            }
        }
    }
    if (numPeople === 0) {
        return 0;
    }

    let day =0;

    let dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

    while (queue.length !== 0) {
        day++
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let point = queue.shift();
            for (let j = 0 ; j < 4; j ++) {
                let newPoint = new Point(point.x + dx[j], point.y + dy[j]);
                if (isBound(newPoint, grid) && grid[newPoint.x][newPoint.y] === PEOPLE) {
                    queue.push(newPoint);
                    grid[newPoint.x][newPoint.y] = ZOMBIE;
                    numPeople = numPeople - 1;
                    if (numPeople === 0){
                        return day;
                    }
                }
            }
        }
    }
    return -1;

};

const isBound = (point, grid) => {
    let m = grid.length, n = grid[0].length;
    return point.x >= 0 && point.x < m && point.y >= 0 && point.y < n;
};



//
// const main = () => {
//     let grid = [[0, 1, 2, 0, 0],
//             [1, 0, 0, 2, 1],
//             [0, 1, 0, 0, 0]]
//     console.log(zombie(grid));
//
// };
// main();
