'use strict';

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

class Result {
    constructor(sum, size) {
        this.sum = sum;
        this.size = size;
    }
}

let maxAvg = -Infinity;
let subtree = null;

const findSubTree2 = (root) => {

    findSubtreeHelper(root);
    return subtree;
};

const findSubtreeHelper = (node) => {

    if (node === null) {
        return new Result(0, 0);
    }
    let left = findSubtreeHelper(node.left);
    let right = findSubtreeHelper(node.right);


    let sum = left.sum + node.val + right.sum ;
    let size = left.size + 1 + right.size;
    console.log(sum);
    console.log(size);
    let avg = sum / size;
    if (avg >= maxAvg) {
        maxAvg = avg;
        subtree = node;
    }
    return new Result(sum, size);
;
};

// const main = () => {
//         let root = new TreeNode(1);
//         root.left = new TreeNode(-5);
//         root.right = new TreeNode(11);
//         root.left.left = new TreeNode(1);
//         root.left.right = new TreeNode(2);
//         root.right.left = new TreeNode(4);
//         root.right.right = new TreeNode(-2);
//         console.log(findSubTree2(root));
// };
// main();
