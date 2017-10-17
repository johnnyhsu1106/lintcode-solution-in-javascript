'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseKGroup = (head, k) => {
    if (head === null || k < 0) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    while (prev !== null) {
        prev = reverseNextKNodes(prev, k);
    }
    return dummy.next;
}

const reverseNextKNodes = (head, k) => {
    // head -> n1 -> n2 ->... -> nk -> nk+1
    // head -> nk -> nk-1_...-> n1 -> nk+1

    let n1 = head.next;
    let nk = findKthNode(head, k);

    if (nk === null) {
        return null;
    }
    let nkPlus1 = nk.next;
    nk.next = null; // disconnect nk and nkNext
    //  reverse n1 -> .... -> nk
    nk = reverseList(n1);
    head.next = nk;
    n1.next = nkPlus1;

    return n1
};

const findKthNode = (head, k) => {
    // head -> n1 -> n2 -> .... -> nk , return nk
    let curr = head;
    let count = 0;

    while (curr !== null && count !== k ) {
        curr = curr.next;
        count++;
    }
    return curr;
};

const reverseList = (head) => {
    let prev = null
    let curr = head
    while (curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev;
};



// const main = () => {
//     let head, k;
//     head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//     head.next.next.next = new ListNode(4);
//     head.next.next.next.next = new ListNode(5);
//     k = 2;
//     console.log(reverseKGroup(head, k));
// };
// main();
