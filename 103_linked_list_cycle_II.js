'use strict';

const  detectCycle = () => {
    if (head === null || head.next === null) {
        return null;
    }
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    if (slow === fast) {
        fast = head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
    return null;
};
