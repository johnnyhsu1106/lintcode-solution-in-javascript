'use strict';

const hasCycle = (head) => {
    if (head === null) {
        return false;
    }
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
