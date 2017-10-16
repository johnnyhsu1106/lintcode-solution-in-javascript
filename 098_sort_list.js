'use strict';
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const sortList = (head) => {
    // merge sort
    if (head === null || head.next === null) {
        return head;
    }


    let middle = findMiddle(head);
    let right = sortList(middle.next);
    middle.next = null;
    let left = sortList(head);

    return mergeList(left, right);


};

const findMiddle = (head) => {

    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const mergeList = (l1, l2) => {

    let dummy = new ListNode(0)
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1 !== null) {
        tail.next = l1;
    }
    if (l2 !== null) {
        tail.next = l2;
    }
    return dummy.next;
};



// const main = () => {
//     let head;
//     head = new ListNode(1);
//     head.next = new ListNode(3);
//     head.next.next = new ListNode(5);
//     console.log(sortLists(head));
//
// };
// main();
