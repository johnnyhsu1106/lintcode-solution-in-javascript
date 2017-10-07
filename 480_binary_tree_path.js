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
    } else if (root.left === null && root.right === null) {
        return [root.val.toString()];
    }

    let left_paths = binaryTreePaths(root.left);
    let right_paths = binaryTreePaths(root.right);
    //  Array.map((num) => {return num....})  Thiw will return new Array;
    let left = left_paths.map((path) =>{ return root.val.toString() + '->' + path });
    let right = right_paths.map((path) => { return root.val.toString() + '->' + path });

    return left.concat(right);

};


const binaryTreePaths_2 = (root) => {
    // use divide and conquer
    // use normal loop in JS.

    if (root === null) {
        return [];
    } else if (root.left === null && root.right === null) {
        return [String(root.val)];
    }
    let left_paths = binaryTreePaths(root.left);
    let right_paths = binaryTreePaths(root.right);

    let paths = [];

    for (let i = 0; i < left_paths.length; i++) {
        paths.push(root.val.toString() + '->' + left_paths[i]);
    }
    for (let i = 0; i < right_paths.length; i++) {
        paths.push(root.val.toString() + '->' + right_paths[i]);
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
