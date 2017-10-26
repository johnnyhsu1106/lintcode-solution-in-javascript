class Treenode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


let longest;
const longestConsecutive = (root) => {
    longest = 0;
    helper(root);
    return longest;
};

const helper = (root) => {
    if (root === null) {
        return 0;
    }
    let leftPath = helper(root.left);
    let rightPath = helper(root.right);

    let subtreeLongest = 1;
    if (root.left !== null && root.val + 1 === root.left.val) {
        subtreeLongest = Math.max(subtreeLongest, leftPath + 1);
    }
    if (root.right !== null && root.val + 1 === root.right.val) {
        subtreeLongest = Math.max(subtreeLongest, rightPath + 1);
    }
    longest = Math.max(longest, subtreeLongest);

    return subtreeLongest;
}



// const main = () => {
//     let root;
//     root = new Treenode(1);
//     root.right = new Treenode(3);
//     root.right.left = new Treenode(2);
//     root.right.right = new Treenode(4);
//     root.right.right.right = new Treenode(5);
//     console.log(longestConsecutive(root) === 3);
//
//
//     root = new Treenode(2);
//     root.right = new Treenode(3);
//     root.right.left = new Treenode(2);
//     root.right.left.left = new Treenode(1);
//     console.log(longestConsecutive(root) === 2);
//
// };
// main();
