'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseBetween = (head, m, n)  => {
    // key create a dummy node
    if (head === null) {
        return head;
    }

    let dummy = new ListNode(0)
    dummy.next = head;

    //  find the node at m - 1 postion
    let node_m_prev = findKthNode(dummy, m - 1);
    let node_m = node_m_prev.next;

    let node_n = findKthNode(dummy, n);
    let node_n_next = node_n.next;
    node_n.next = null;

    node_m_prev.next = reverse(node_m);
    node_m.next = node_n_next;

    return dummy.next;
};

const findKthNode = (dummy, k) => {
    let node = dummy;
    for (let i = 0; i < k; i++) {
        node = node.next
    }
    return node
}

const reverse = (node) => {
    let prev = null;
    let curr = node;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};



// const main = () => {
//     let head, m, n;
//     head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//     head.next.next.next = new ListNode(4);
//     head.next.next.next.next = new ListNode(5);
//
//     console.log(reverseBetween(head, 1, 2));
// };
// main();
