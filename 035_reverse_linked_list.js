'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverse = (head) =>  {
    if (head === null) {
        return head;
    }
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};

// const main = () => {
//     let head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//
//     console.log(head);
//     console.log(reverse(head));
// };
// main();
