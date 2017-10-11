'use strict';
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Result {
    constructor(existP, existQ, node) {
        this.existP = existP;
        this.existQ = existQ;
        this.node = node;
    }

}
const lowestCommonAncestor3 = (root, p, q) => {
    let result = helper(root, p, q);
    if (result.existP && result.existQ) {
        return result.node;
    }
    return null;

};

const helper = (root, p, q) => {
    if (root === null) {
        return new Result(false, false, null);
    }

    let leftResult = helper(root.left, p, q);
    let rightResult = helper(root.right, p, q)

    let existP = leftResult.existP || rightResult.existP || root === p;
    let existQ = leftResult.existQ || rightResult.existQ || root === q;

    if (root === p  || root === q) {
        return new Result(existP, existQ, root);
    }
    else if (leftResult.node !== null && rightResult.node !== null) {
        return new Result(existP, existQ, root);
    } else if (leftResult.node !== null) {
        return new Result(existP, existQ, leftResult.node);
    } else if (rightResult.node !== null) {
        return new Result(existP, existQ, rightResult.node);
    }
    return new Result(existP, existQ, null);
};


// const main = () => {
//     let root, p, q;
//     root = new TreeNode(4);
//     root.left = new TreeNode(3);
//     root.right = new TreeNode(7);
//     root.right.left = new TreeNode(5);
//     root.right.right = new TreeNode(6);
//
//     p = root.left;
//     q = root.right;
//     console.log(lowestCommonAncestor3(root, p, q));
//
//     p = root.right.left;
//     q = root.right.right;
//     console.log(lowestCommonAncestor3(root, p, q));
//
// };
// main();
