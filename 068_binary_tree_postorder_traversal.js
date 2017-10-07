'use strict';
const postorderTraversal = (root) => {
    let result = [];
    if (root === null) {
        return result;
    }

    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);
    result = result.concat(left, right);
    result.push(root.val);

    return result;
};
