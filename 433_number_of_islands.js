'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const numIsland_bfs = (grid) => {
    if (grid ===  null || grid.length === 0 || grid[1].length === 0) {
        return 0;
    }
    let m = grid.length , n = grid[0].length;

    let count = 0;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                let point = new Point(x, y);
                bfs(grid, point); // turn all adjecent islands into sea
                count++;
            }
        }
    }
    return count;
};
const bfs = (grid, point) => {
    let queue = [point];
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    while (queue.length !== 0) {
        let point = queue.shift();
        for (let i = 0; i < 4; i++) {
            let newPoint = new Point(point.x + dx[i], point.y + dy[i]);
            if (isBound(grid, newPoint) && grid[newPoint.x][newPoint.y]) {
                queue.push(newPoint);
                grid[newPoint.x][newPoint.y] = false;
            }
        }
    }
};

const isBound = (grid, point) => {
    let m = grid.length , n = grid[0].length;
    return 0 <= point.x && point.x < m && 0 <= point.y && point.y < n;
};

const numIsland_dfs = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let m = grid.length, n = grid[0].length;
    let count = 0;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                let point = new Point(x, y);
                dfs(grid, point);
                count++;
            }
        }
    }
    return count;
};

const dfs = (grid, point) => {

    grid[point.x][point.y] = false;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    for (let i = 0; i < 4; i++) {
        let newPoint = new Point(point.x + dx[i], point.y + dy[i]);
        if (isBound(grid, newPoint) && grid[newPoint.x][newPoint.y]) {
            dfs(grid, new{Point});
        }
    }
};

class UnionFind {
    constructor(n) {
        this.count = 0;
        this.father = [];
        for (let i = 0 ;i < n; i++) {
            this.father[i] = i;
        }
    }
    find(x) {
        if (this.father[x] === x) {
            return x;
        }
        this.father[x] = this.find(this.father[x]);
        return this.father[x];
    }
    connect(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        if (rootA !== rootB) {
            this.father[rootA] = rootB;
            this.count--;
        }
    }
    setCount(count) {
        this.count = count
    }
    query() {
        return this.count;
    }
}
const numIsland_uf = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let m = grid.length, n = grid[0].length;
    // find number of all separte islands before connecting
    let count = 0;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                count++;
            }
        }
    }
    let unionFind = new UnionFind(m * n);
    unionFind.setCount(count);
    // connect island
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                for (let i = 0; i < 4; i++) {
                    let newX = x + dx[i], newY = y + dy[i];
                    if (isBound(grid, new Point(newX, newY)) && grid[newX][newY])  {
                        unionFind.connect(x * n + y, newX * n + newY)
                    }
                }

            }
        }
    }
    return unionFind.query();
};




// const main = () => {
//     let grid;
//     grid = [[1, 1, 0, 0, 0],
//            [0, 1, 0, 0, 1],
//            [0, 0, 0, 1, 1],
//            [0, 0, 0, 0, 0],
//            [0, 0, 0, 0, 1]]
//     console.log(numIsland_bfs(grid));
//
//     grid = [[1, 1, 0, 0, 0],
//            [0, 1, 0, 0, 1],
//            [0, 0, 0, 1, 1],
//            [0, 0, 0, 0, 0],
//            [0, 0, 0, 0, 1]]
//     console.log(numIsland_bfs(grid));
//
//     grid = [[1, 1, 0, 0, 0],
//            [0, 1, 0, 0, 1],
//            [0, 0, 0, 1, 1],
//            [0, 0, 0, 0, 0],
//            [0, 0, 0, 0, 1]]
//     console.log(numIsland_uf(grid));
//
// };
// main();
