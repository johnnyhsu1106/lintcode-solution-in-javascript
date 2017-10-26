'use strict';

const binaryTreePaths = (root) => {
    if (root === null) {
        return [];
    }
    let paths = [];
    let leftPaths = binaryTreePaths(root.left);
    let rightPaths = binaryTreePaths(root.right);

    for (let path of leftPaths) {
        paths.push(root.val.toString() + '->' + path);
    }
    for (let path of rightPaths) {
        paths.push(root.val.toString() + '->' + path);
    }
    if (root.left === null && root.right === null) {
        paths.push(root.val.toString());
    }
    return paths;
};
