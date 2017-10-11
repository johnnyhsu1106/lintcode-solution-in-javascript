'use strict';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const isValidBST_1 = (root) => {
    //  divide and conquer
    let max = Infinity;
    let min = -Infinity;
    return helper(root, min, max);
};

const helper = (root, min, max) => {
    if (root === null) {
        return true;
    }

    if (root.val <= min || root.val >= max) {
        return false;
    }
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);;
};



// const main = () => {
//     let root;
//     root = new TreeNode(2);
//     root.left = new TreeNode(1);
//     root.right = new TreeNode(3);
//     console.log(isValidBST(root));
//
// }
// main();
