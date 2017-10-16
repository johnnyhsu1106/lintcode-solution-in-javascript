'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const partition = (head, x) => {
    if (head === null) {
        return head;
    }
    let leftDummy = new ListNode(0);
    let rightDummy = new ListNode(0);

    let leftTail = leftDummy;
    let rightTail = rightDummy;

    while (head !== null) {
        if (head.val < x) {
            leftTail.next = head;
            leftTail = leftTail.next;
        } else {
            rightTail.next = head;
            rightTail = rightTail.next;
        }
        head = head.next;
    }
    // rightTail.next = null;
    leftTail.next = rightDummy.next;

    return leftDummy.next;
};


const main = () => {
    let head, x;
    head = new ListNode(1);
    head.next = new ListNode(4);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(2);
    x = 4;
    console.log(partition(head, x));
};
main();
