'use strict'
class DirectedGraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = [];
    }
}

const topSort = (graph) => {
    if (graph === null || graph.length === 0) {
        return [];
    }
    let result = [];
    let indegree = new Map();

    //  initial all nodes' indegree is 0
    graph.forEach((node) => {
        indegree.set(node, 0);
    });
    // set up all nodes' indegree
    graph.forEach((node) => {
        node.neighbors.forEach((neighbor) =>{
            indegree.set(neighbor, indegree.get(neighbor) + 1);
        });
    });
    // get the begin nodes
    let beginNodes = [];
    indegree.forEach((indegree, node) => {
        if (indegree === 0) {
            beginNodes.push(node);
        }
    });
    //  BFS
    let queue = beginNodes;
    while (queue.length !== 0) {
        let node = queue.shift();
        result.push(node);
        node.neighbors.forEach((neighbor) => {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        });

    }
    return result;
};



// const main = () => {
//     let graph, node0, node1, node2, node3, node4, node5;
//     node0 = new DirectedGraphNode(0)
//     node1 = new DirectedGraphNode(1);
//     node2 = new DirectedGraphNode(2);
//     node3 = new DirectedGraphNode(3);
//     node4 = new DirectedGraphNode(4);
//     node5 = new DirectedGraphNode(5);
//     node0.neighbors = [node1, node2, node3];
//     node1.neighbors = [node4];
//     node2.neighbors = [node4, node5];
//     node3.neighbors = [node4, node5];
//     graph = [node0, node1, node2, node3, node4, node5];
//     console.log(topSort(graph));
//
// };
// main();
