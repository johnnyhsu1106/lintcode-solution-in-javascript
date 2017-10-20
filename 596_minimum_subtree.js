'use strict';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let subtree;
let subtreeSum = Infinity;

const findSubtree = (root) => {
    if (root === null) {
        return;
    }
    let result = findSubtreeHelper(root);
    return result.subtree;
};

const findSubtreeHelper = (node) => {
    if (node === null) {
        return new Result(null, null);
    }
    let left = findSubtreeHelper(node.left);
    let right = findSubtreeHelper(node.right);

    total = left.sum + node.val + right.sum;
    if (total <= subtreeSum) {
        subtreeSum = total;
        subtree = node;
    }
    return total;
};
