'use strict';

// class TreeNode {
//     constructor (value) {
//         this.val = value;
//         this.left = null;
//         this.right = null;
//     }
// }


const flatten = (root) => {
    flattenHelper(root);
};

const flattenHelper = (root) => {
    //  use divided and conquer.
    if (root === null) {
        return null;
    }

    let leftTail = flattenHelper(root.left);
    let rightTail = flattenHelper(root.right);

    if (leftTail !== null) {
        leftTail.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    if (rightTail !== null) {
        return rightTail;
    }
    if (leftTail !== null) {
        return leftTail;
    }
    return root;
};


// const main = () => {
//     let root;
//     root = new TreeNode(1);
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(5);
//     root.left.left = new TreeNode(3);
//     root.left.right = new TreeNode(4);
//     root.right.right = new TreeNode(6);
//     flatten(root);
//     console.log(root);
// };
// main();
