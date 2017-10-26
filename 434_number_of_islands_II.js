'use strict';
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const numIslands2 = (n , m, operations) => {
    if (n === 0 && m === 0 || operations.length === 0) {
        return 0;
    }
    let result = [];
    let grid = [];
    for (let x = 0; x < n; x++) {
        grid.push([]);
        for (let y = 0; y < m; y++) {
            grid[x].push(0);
        }
    }

    let uf = new UnionFind(n * m);
    let count = 0;

    for (let point of operations) {
        let x = point.x , y = point.y;

        if (grid[x][y] === 0) {
            grid[x][y] = 1;
            count++;
            uf.setCount(count);
            let dx = [1, -1, 0, 0], dy = [0, 0 ,1, -1];

            for (let i = 0; i < 4; i++) {
                let newX = x + dx[i], newY = y + dy[i];
                if (isBound(n, m , newX, newY) && grid[newX][newY] === 1) {
                    uf.connect(x * m + y, newX * m + newY);
                }
            }
        }
        // update the count by current number of island
        count = uf.query();
        result.push(count);
    }
    return result;
};
const isBound = (n, m, x, y) => {
    return 0 <= x && x < n && 0 <= y && y < m;
};

class UnionFind {
    constructor(n) {
        this.count = 0;
        this.father = [];
        for (let i = 0; i < n; i++) {
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
        this.count = count;
    }
    query() {
        return this.count;
    }
}



// const main = () => {
//     let n, m , operations;
//     n = 3, m = 3;
//     operations = [new Point(0,0), new Point(0, 1), new Point(2, 2), new Point(2, 1)];
//     console.log(numIslands2(n, m, operations));
// };
// main();
