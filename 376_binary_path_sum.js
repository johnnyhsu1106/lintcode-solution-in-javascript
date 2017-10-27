'use strict';

const binaryTreePathSum = (root, target) => {
    let result = [];
    let path = [];
    if (root === null) {
        return result;
    }
    path.push(root.val);
    dfs(root, path, target - root.val, result);
    return result;
}

const dfs = (root, path, remain, result) => {
    if (root.left === null && root.right === null) {
        if (remain === 0) {
            result.push(path.concat([]))
        }
    }
    if (root.left !== null) {
        path.push(root.left.val);
        dfs(root.left, path, remain - root.left.val, result);
        path.pop();
    }
    if (root.right !== null) {
        path.push(root.right.val);
        dfs(root.right, path, remain - root.right.val, result);
        path.pop();
    }
};
