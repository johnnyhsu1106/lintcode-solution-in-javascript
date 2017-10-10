'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const binaryTreeToLists = (root) => {
    if (root === null) {
        return [];
    }
    let result = [];
    let queue = [root];

    while (queue.length !== 0) {
        let dummy = new ListNode(0);
        let tail = dummy;
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            tail.next = new ListNode(node.val);
            tail = tail.next;

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(dummy.next);
    }
    return result;

};


// const main = () => {
//     let root;
//     root = new TreeNode(1);
//     root.left = new TreeNode(2);
//     root.left.left = new TreeNode(4);
//     root.right = new TreeNode(3);
//     console.log(binaryTreeToLists(root));
//
// };
//
// main();
