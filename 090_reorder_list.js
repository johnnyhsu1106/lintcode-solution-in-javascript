'use strict';

const reorderList = (head) => {
    if (head === null || head.next === null) {
        return;
    }
    let middle = findMiddle(head)  // find the middle node
    let tail = reverseList(middle.next); // get the second half linked list
    middle.next = null; // separate the first half and second half
    mergeTwoList(head, tail);
};

const findMiddle = (head) =>  {
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const mergeTwoList = (head1, head2) => {
    //  two pointers
    let dummy = new ListNode(0);
    let head = dummy;
    let index = 0;

    while (head1 !== null && head2 !== null) {
        if (index % 2 === 0) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
        index++;
    }
    if (head1 !== null) {
        head.next = head1;
    }else {
        head.next = head2;
    }
};
