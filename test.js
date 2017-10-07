'use strict';
// scopeTest( );

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
let p = root;

console.log(root == p);
