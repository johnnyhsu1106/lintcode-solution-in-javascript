'use strict';

// class TreeNode {
//     constructor (value) {
//         this.val = value;
//         this.left = null;
//         this.right = null;
//     }
// }


class ResultType {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
};

const isBalanced = (node) => {
    let result = helper(node);
    return result.isBalanced;
};

const helper = (node) => {
    if (node === null) {
        return new ResultType(true, 0);
    }
    left = helper(node.left);
    right = helper(node.right);

    if (!left.isBalanced || !right.isBalanced) {
        return new ResultType(false, 0);
    }
    if (Math.abs(left.height - right.height) > 1) {
        return new ResultType(false, 0);
    }

    return new ResultType(true, Math.max(left.height, right.height) + 1);

};

// const main = () => {
//     let node;
//     node = new TreeNode(3);
//     node.right = new TreeNode(20);
//     node.right.left = new TreeNode(15);
//
//     console.log(isBalanced(node));
//
// };
// main();
