class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const numIslands_1 = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let m = grid.length, n = grid[0].length;
    count = 0
    for (let x = 0; x < m ; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                let point = new Point(x, y);
                bfs(grid, point);
                count++
            }
        }
    }
    return count;
};


const bfs = (grid, point) => {

    let queue = [] ;
    queue.push(point);
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    while (queue.length !== 0) {
        let point = queue.shift()

        for (let i = 0; i < 4; i++ ) {
            let x = point.x + dx[i]
            let y = point.y + dy[i]
            if (isBound(new Point(x, y), grid) && grid[x][y]) {
                grid[x][y] = false;
                queue.push(new Point(x, y))
            }
        }
    }
};

const isBound = (point, grid) => {
    let m = grid.length, n = grid[0].length ;
    return (point.x >= 0 && point.x < m ) && (point.y >= 0 && point.y < n);
};



// ////////////////////////////////////////////////////////////////////////////


const numIslands_2 = (grid) => {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let m = grid.length, n = grid[0].length;

    let count = 0
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y]) {
                count++
            }
        }
    }

    let unionFind = new UnionFind(m * n);
    unionFind.setCount(count);

    let dx = [1, -1, 0, 0];
    let dy = [0 , 0, 1, -1];
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === '1') {
                for (let i = 0; i < 4; i++) {
                    let point = new Point(x + dx[i], y + dy[i]);
                    if (isBound(point, grid) && grid[point.x][point.y]) {
                        unionFind.connect(x * n + y, point.x * n + point.y);
                    }
                }
            }
        }
    }
    return unionFind.query();


};

class UnionFind {
    constructor(n) {
        this.count = 0
        this.father = []
        for (let i = 0; i < n; i++) {
            this.father.push(i);
        }
    }
    find(x) {
        if (this.father[x] === x) {
            return x;
        }
        this.father[x] = this.find(this.father[x])
        return this.father[x];
    }
    connect(a, b) {
        let root_a = this.find(a);
        let root_b = this.find(b);
        if (root_a !== root_b) {
            this.father[root_a] = root_b;
            this.count--
        }
    }
    query() {
        return this.count;
    }
    setCount(count) {
        this.count = count;
    }
}
