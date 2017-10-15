'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeTwoLists = (l1, l2) => {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let dummy = new ListNode(0);
    let tail = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
            tail = tail.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
            tail = tail.next;
        }
    }
    if (l1 !== null) {
        tail.next = l1;
    }
    if (l2 !== null) {
        tail.next = l2;
    }
    return dummy.next;
};
