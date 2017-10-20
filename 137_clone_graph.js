'use strict';

class UndirectedGraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = [];
    }
}

const cloneGraph = (graph) => {
    // 1. first all nodes (BFS)
    // 2. clone the node (hash map) {node: new_node}
    // 3. clone the edge (using the hash map)
    if (graph === null){
        return graph;
    }
    let nodesMap = new Map();

    let nodes = getNodes(graph);
    cloneNodes(nodes, nodesMap);
    cloneNeighbors(nodes, nodesMap);

    return nodesMap.get(graph);
};

const getNodes = (graph) => {
    let queue = [graph];
    let visited = new Set([graph]);

    while (queue.length !== 0) {
        let node = queue.shift();
        for (let neighbor of node.neighbors) {
            if (! visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return visited;
};


const cloneNodes = (nodes, nodesMap) => {
    for (let node of nodes) {
        nodesMap.set(node, new UndirectedGraphNode(node.label));
    }
};

const cloneNeighbors = (nodes, nodesMap) => {
    for (let node of nodes) {
        for (let neighbor of node.neighbors) {
            nodesMap.get(node).neighbors.push(nodesMap.get(neighbor));
        }
    }
};


// const main = () => {
//     let node0 = new UndirectedGraphNode(0);
//     let node1 = new UndirectedGraphNode(1);
//     let node2 = new UndirectedGraphNode(2);
//     node0.neighbors = [node1, node2];
//     node1.neighbors = [node0, node2];
//     node2.neighbors = [node0, node1];
//
//     console.log(cloneGraph(node0));
// };
// main();
