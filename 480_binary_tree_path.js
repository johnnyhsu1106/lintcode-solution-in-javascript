'use strict';

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

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
    if (root.left === null && root.right === null) {
        return paths.push(root.val.toString());
    }

    let leftPaths = binaryTreePaths(root.left);
    let rightPaths = binaryTreePaths(root.right);


    for (let i = 0; i < leftPaths.length; i++) {
        paths.push(root.val.toString() + '->' + leftPaths[i]);
    }
    for (let i = 0; i < rightPaths.length; i++) {
        paths.push(root.val.toString() + '->' + rightPaths[i]);
    }
    return paths;
};



// const main = () => {
//     let root;
//     root = new TreeNode(1);
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(3);
//     root.right.left = new TreeNode(5);
//     console.log(binaryTreePaths(root));
// };
// main();
