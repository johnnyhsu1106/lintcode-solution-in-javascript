'use strict';

const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }
    let size_A = getListSize(headA);
    let size_B = getListSize(headB);
    let diff = Math.abs(size_A - size_B);

    let currA = headA, currB = headB;

    if (size_A > size_B) {
        for (let i = 0; i < diff; i++) {
            currA = currA.next;
        }
    } else if (size_B > size_A) {
        for (let i = 0; i < diff; i++) {
            currB = currB.next;
        }
    }
    while (currA !== null && currB !== null && currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }
    if (currA !== null && currB !== null) {
        return currA;
    }
    return null;
};

const getListSize = (head) => {
    let size = 0;
    let curr = head;
    while (curr !== null) {
        curr = curr.next;
        size++;
    }
    return size;
};
