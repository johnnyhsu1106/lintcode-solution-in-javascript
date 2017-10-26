'use strict';

const Heap = require('collections/heap')

class Point {
    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
    }
}
const kthSmallest = (matrix, k) => {
    if (matrix.length === 0 || matrix[0].length === 0 || k === 0 || k > matrix.length * matrix[0].length) {
        return null;
    }
    if (k === 1) {
        return matrix[0][0];
    }
    let m = matrix.length, n = matrix[0].length;
    // construct visited matrix, a boolean matrix, to track the poiont, which has been visited.)
    let visited = [];
    for (let x = 0; x < m; x++) {
        visited.push([])
        for (let y = 0; y < n; y++) {
            visited[x].push(false);
        }
    }
    // contruct a minimum heap
    let minHeap = new Heap([], null, (point1, point2) => {
        return point2.value - point1.value;
    });
    // initialize the minHeap

    minHeap.push(new Point(matrix[0][0], 0, 0));
    visited[0][0] = true;
    let point;
    for (let step = 0; step < k; step++) {
        point = minHeap.pop();
        let dx = [0, 1], dy = [1, 0];
        for (let i = 0; i < 2; i++) {
            let newX = point.x + dx[i], newY = point.y + dy[i];

            if (isBound(matrix, newX, newY) && ! visited[newX][newY]) {
                let newPoint = new Point(matrix[newX][newY], newX, newY);
                minHeap.push(newPoint);
                visited[newX][newY] = true;
            }
        }
    }
    return point.value;
};

const isBound = (matrix, x, y) => {
    let m = matrix.length, n = matrix[0].length;
    return 0 <= x && x < m && 0 <= y && y < n;
};


// const main = () => {
//     let matrix, k;
//     matrix = [[1 ,5 ,7],
//               [3 ,7 ,8],
//               [4 ,8 ,9]];
//     k = 4;
//     console.log(kthSmallest(matrix, k));
// };
// main();
