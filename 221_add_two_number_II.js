'use strict';


class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}
const addLists2 = (l1, l2) => {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    l1 = reverseList(l1);
    l2 = reverseList(l2);
    return reverseList(addLists(l1, l2));
};

const reverseList = (l) => {
    let prev = null;
    let curr = l;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const addLists = (l1, l2) => {

    let dummy = new ListNode(0);
    let l = dummy;
    let carry = 0;
    let sum, digit;

    while (l1 !== null && l2 !== null) {
        sum = l1.val + l2.val + carry;
        digit = sum % 10;
        carry = Math.floor(sum / 10);
        l.next = new ListNode(digit); // the way to change the linked list. node.next = ListNode(val)
        l = l.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1 !== null) {
        sum = l1.val + carry;
        digit = sum % 10;
        carry = Math.floor(sum / 10);
        l.next = new ListNode(digit);
        l = l.next;
        l1 = l1.next;
    }
    while (l2 !== null) {
        sum = l2.val + carry;
        digit = sum % 10;
        carry = Math.floor(sum / 10);
        l.next = new ListNode(digit);
        l = l.next;
        l2 = l2.next;
    }

    if (carry !== 0) {
        l.next = new ListNode(carry);
    }
    return dummy.next
};

// const main = () => {
//     let l1, l2;
//     l1 = new ListNode(7);
//     l1.next = new ListNode(2);
//     l1.next.next = new ListNode(4);
//     l1.next.next.next = new ListNode(3);
//
//     l2 = new ListNode(5);
//     l2.next = new ListNode(6);
//     l2.next.next = new ListNode(4);
//
//     console.log(addLists2(l1, l2));
//
// };
// main();
