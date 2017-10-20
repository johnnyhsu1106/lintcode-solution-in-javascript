'use strict';

class UndirectedGraphNode {
    constructor(x) {
        this.label = x;
        this.neighbors = [];
    }
}
const searchNode = (graph, values, node, target) => {
    let queue = [node];
    let visited = new Set([node]);

    while (queue.length !== 0) {
        let node = queue.shift();
        if (values.get(node) === target) {
            return node;
        }
        for (let neighbor of node.neighbors) {
            if (! visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
};



// const main = () =>{
//     let node1 = new UndirectedGraphNode(1);
//     let node2 = new UndirectedGraphNode(2);
//     let node3 = new UndirectedGraphNode(3);
//     let node4 = new UndirectedGraphNode(4);
//     let node5 = new UndirectedGraphNode(5);
//     node1.neighbors = [node2, node3, node4];
//     node2.neighbors = [node3, node1];
//     node3.neighbors = [node2, node1];
//     node4.neighbors = [node1, node5];
//     node5.neighbors = [node4];
//     let values = new Map();
//     values.set(node1, 3);
//     values.set(node2, 4);
//     values.set(node3, 10);
//     values.set(node4, 50);
//     values.set(node5, 50);
//     let target = 50;
//     let graph = [node1, node2, node3, node4, node5];
//
//     console.log(searchNode(graph, values, node1, target));
// };
// main();
