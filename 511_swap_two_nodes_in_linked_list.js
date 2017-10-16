'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const swapNodes = (head, v1, v2) => {
    if (head === null) {
        return null
    }
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev1 = findPrevNode(dummy, v1);
    let prev2 = findPrevNode(dummy, v2);

    if (prev1 === null || prev2 === null) {
        return head;
    }
    if (prev1 === prev2) {
        return head;
    }
    if (prev1.next === prev2) {
        swapAdjacent(prev1);
    } else if (prev2.next === prev1) {
        swapAdjacent(prev2);
    } else {
        swapRemote(prev1, prev2);
    }
    return dummy.next
};

const findPrevNode = (dummy, val) => {
    let curr = dummy;
    while (curr.next !== null) {
        if (curr.next.val === val) {
            return curr;
        }
        curr = curr.next;
    }
    return null;

};

const swapAdjacent = (prev) => {
    let curr1 = prev.next;
    let curr2 = curr1.next;
    let next2 = curr2.next;

    prev.next = curr2;
    curr2.next = curr1;
    curr1.next = next2;
};

const swapRemote = (prev1, prev2) => {
    let curr1 = prev1.next;
    let curr2 = prev2.next;
    let next1 = curr1.next;
    let next2 = curr2.next;

    prev1.next = curr2;
    curr2.next = next1;
    prev2.next = curr1;
    curr1.next = next2;
};




// const main = () => {
//     let head, v1, v2;
//     head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//     head.next.next.next = new ListNode(4);
//     v1 = 1;
//     v2 = 4;
//     console.log(swapNodes(head, v1, v2));
//
// };
// main();
