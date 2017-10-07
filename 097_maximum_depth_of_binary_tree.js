'use strict';

const maxDepth = (root) => {
    if (root === null) {
        return 0;
    }
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
};
