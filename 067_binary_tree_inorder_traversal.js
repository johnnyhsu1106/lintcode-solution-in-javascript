'use strict';

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

const inorderTraversal = (root) => {
    if (root === null) {
        return [];
    }
    let result;
    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);
    left.push(root.val);
    result = left.concat(right);
    return result;
};


// const main = () => {
//     let root;
//     root = new TreeNode(1);
//     root.right = new TreeNode(2);
//     root.right.left = new TreeNode(3);
//
//     console.log(inorderTraversal(root));
// };
// main();
