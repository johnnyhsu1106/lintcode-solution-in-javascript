'use strict';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const binaryTreePaths = (root) => {
    // use divide and conquer
    // use Array.prototype.map() and Array.prototype.concat()
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        return [root.val.toString()];
    }

    let leftPaths = binaryTreePaths(root.left);
    let rightPaths = binaryTreePaths(root.right);
    //  Array.map((num) => {return num....})  Thiw will return new Array;
    let left = leftPaths.map((path) =>{ return root.val.toString() + '->' + path });
    let right = rightPaths.map((path) => { return root.val.toString() + '->' + path });

    return left.concat(right);

};


const binaryTreePaths_2 = (root) => {
    // use divide and conquer
    // use normal loop in JS.
    let paths = [];

    if (root === null) {
        return paths;
    }
    let leftPaths = binaryTreePaths_2(root.left);
    let rightPaths = binaryTreePaths_2(root.right);

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



const binaryTreePaths_3 = (root) => {
    // use dfs traverse
    if (root === null) {
        return [];
    }
    let result = [];
    let path = [];
    path.push(root.val.toString());

    dfs(root, path, result);
    return result;
}

const dfs = (root, path, result) => {
    if (root.left === null & root.right === null) {
        result.push(path.join(''));
    }

    if (root.left !== null) {
        path.push('->');
        path.push(root.left.val.toString());
        dfs(root.left, path, result);
        path.pop();
        path.pop();
    }
    if (root.right !== null) {
        path.push('->');
        path.push(root.right.val.toString());
        dfs(root.right, path, result);
        path.pop();
        path.pop();
    }
};



// const main = () => {
//     let root;
//     root = new TreeNode(1);
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(3);
//     root.right.left = new TreeNode(5);
//     console.log(binaryTreePaths(root));
//     console.log(binaryTreePaths_2(root));
// };
// main();
