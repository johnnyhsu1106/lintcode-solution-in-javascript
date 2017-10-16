'use strict';

const hasCycle = (head) => {
    if (head === null) {
        return false;
    }
    let slow = head, fast = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;

    }
    return false;
};
