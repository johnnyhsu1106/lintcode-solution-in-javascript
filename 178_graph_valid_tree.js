'use strict';
const validTree_1 = (n, edges) => {
    if (n !== edges.length + 1) {
        return false;
    }
    let nodes = edgesToNodes(n, edges);
    let queue = [0];
    let visited = new Set([0]);

    while (queue.length !== 0) {
        let node = queue.shift();
        nodes.get(node).forEach((neighbor) =>{
            if (! visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }
    return visited.size == n;
};

const edgesToNodes = (n, edges) => {

    let nodes = new Map();
    for (let i = 0; i < n; i++) {
        nodes.set(i, []);
    }
    edges.forEach((edge) => {
        let node1 = edge[0];
        let node2 = edge[1];
        nodes.get(node1).push(node2);
        nodes.get(node2).push(node1);
    });
    return nodes;
};

// ///////////////////////////////////////////////////////////////////////////
const validTree_2 = (n, edges) => {
    // use union find data structure
    if (n !== edges.length + 1) {
        return false;
    }
    let unionFind = new UnionFind(n);
    edges.forEach((edge) => {
        let node1 = edge[0], node2 = edge[1];
        unionFind.connect(node1, node2);
    });
    return unionFind.query() === 1;
};

class UnionFind {
    constructor(n) {
        this.count = n
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
}



// //////////////////////////////////////////////////////////////////////////
// const main = () => {
//     let n, edges;
//     edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
//     n = 5;
//     console.log(validTree_2(n, edges));
//
//     edges = [[0, 1], [0, 2], [2, 3], [1, 3]];
//     n = 5;
//     console.log(validTree_2(n, edges));
// };
// main();
