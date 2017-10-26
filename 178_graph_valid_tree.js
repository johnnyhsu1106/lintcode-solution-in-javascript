'use strict';

const validTree_BFS = (n, edges) =>  {
    if (n === 0) {
        return false;
    }
    if (n !== edges.length + 1) {
        return false;
    }
    let nodeMap = new Map();
    for (let node = 0; node < n; node   ++) {
        nodeMap.set(node, []);
    }
    for (let [node1, node2] of edges) {
        nodeMap.get(node1).push(node2);
        nodeMap.get(node2).push(node1);
    }

    // BFS visited all nodes
    let queue = [0];
    let visited = new Set();
    visited.add(0);
    while (queue.length !== 0) {
        let node = queue.shift();
        let neighbors = nodeMap.get(node);
        for (let neighbor of neighbors) {
            if (! visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
    return visited.size === n;
};
class UnionFind {
    constructor(n) {
        this.count = n;
        this.father = [];
        for (let i = 0; i < n; i++) {
            this.father.push(i);
        }
    }
    find(x) {
        if (this.father[x] === x) {
            return this.father[x];
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
    query() {
        return this.count;
    }
}
const validTree_UF = (n, edges) =>  {
    // UnionFind
    if (n === 0) {
        return false;
    }
    if (n !== edges.length + 1) {
        return false;
    }
    let unionFind = new UnionFind(n);
    for (let [node1, node2] of edges) {
        unionFind.connect(node1, node2);
    }
    return unionFind.query() === 1;

};

// const main = () =>  {
//     let n, edges;
//     n = 5;
//     edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
//     console.log(validTree_BFS(n, edges));
//     console.log(validTree_UF(n, edges));
//
//     n = 5;
//     edges = [[0, 1], [1, 2], [0, 2], [3, 4]];
//     console.log(validTree_BFS(n, edges));
//     console.log(validTree_UF(n, edges));
//
// };
// main();
