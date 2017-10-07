'use strict';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const lowestCommonAncestor = (root, p, q) => {
    if (root === null) {
        return null;
    }
    if (p === root || q === root) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    } else if (left !== null) {
        return left;
    } else if (right !== null) {
        return right;
    }
    return null ;

}

// const main = () => {
//     let root, p , q;
//     root = new TreeNode(4);
//     root.left = new TreeNode(3);
//     root.right = new TreeNode(7);
//     root.right.left = new TreeNode(5);
//     root.right.right = new TreeNode(6);
//
//     // p = root.left;
//     // q = root.right.left;
//     // console.log(lowestCommonAncestor(root, p, q));
//
//     p = root.right.left;
//     q = root.right.right;
//     console.log(lowestCommonAncestor(root, p, q));
//
//
//
// };
// main();
