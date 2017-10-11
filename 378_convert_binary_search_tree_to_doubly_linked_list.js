'use strict';
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
class DoublyListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class Result {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
}
const bstToDoublyList = (root) => {
    let result = helper(root);
    return result.head;
}
const helper = (root) => {
    if (root === null) {
        return new Result(null, null);
    }

    let node = new DoublyListNode(root.val);
    let left = helper(root.left);
    let right = helper(root.right);
    let head, tail;

    if (left.head === null && left.tail === null) {
        head = node
    }
    else {
        head = left.head;
        left.tail.next = node;
        node.prev = left.tail;
    }
    if (right.head === null && right.tail === null) {
        tail = node;
    } else {
        tail = right.tail;
        node.next = right.head;
        right.head.prev = node;
    }
    return new Result(head, tail);
};

// const main = () => {
//     let root;
//     root = new TreeNode(4);
//     root.left = new TreeNode(2);
//     root.right = new TreeNode(5);
//     root.left.left = new TreeNode(1);
//     root.left.right = new TreeNode(3);
//
//     console.log(bstToDoublyList(root));
// };
// main();
