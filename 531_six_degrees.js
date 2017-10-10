'use strict';
class UndirectedGraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = [];
    }
}

const sixDegrees = (graph, source, target) => {
    let queue = [source];
    let visited = new Set([source]);

    let degree = 0;
    while (queue.length !== 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node === target) {
                return degree;
            }
            node.neighbors.forEach((neighbor) => {
                if (! visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            });
        }
        degree++;
    }
    return -1;
};



// const main = () => {
//     let graph, node1, node2, node3, node4, source, target;
//     node1 = new UndirectedGraphNode(1);
//     node2 = new UndirectedGraphNode(2);
//     node3 = new UndirectedGraphNode(3);
//     node4 = new UndirectedGraphNode(4);
//     graph = [node1, node2, node3, node4];
//
//     node1.neighbors = [node2, node3];
//     node2.neighbors = [node1, node4];
//     node3.neighbors = [node1, node4];
//     node4.neighbors = [node2, node3];
//
//     source = node1
//     target = node4
//     console.log(sixDegrees(graph, source, target));
//
//
//     node1.neighbors = [];
//     node2.neighbors = [node4];
//     node3.neighbors = [node4];
//     node4.neighbors = [node2, node3];
//     console.log(sixDegrees(graph, source, target));
// };
// main();
