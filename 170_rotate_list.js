'use strict';
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const rotateRight = (head, k) => {
    if (head === null) {
        return head;
    }
    let size = listSize(head);
    k = k % size;

    if (k === 0) {
        return head;
    }
    let kthNodePrev = findKthNode(head, size - k);
    let kthNode = kthNodePrev.next;
    let tail = findKthNode(head, size);

    //  connect the nodes (rotate)
    tail.next = head;
    kthNodePrev.next = null;
    return kthNode;

};

const findKthNode = (head, k) => {
    let curr = head;
    for (let i = 1; i < k; i++) {
        curr = curr.next;
    }
    return curr;
};

const listSize = (head) => {
    let curr = head;
    let size = 0;
    while (curr !== null) {
        curr = curr.next;
        size++;
    }
    return size;
};


// const main = () => {
//     let head, k;
//     head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//     head.next.next.next = new ListNode(4);
//     head.next.next.next.next = new ListNode(5);
//     k = 2;
//     console.log(rotateRight(head, k));
//
// };
// main();
