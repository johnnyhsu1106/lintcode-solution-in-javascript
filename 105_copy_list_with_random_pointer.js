'use strict';

class RandomListNode {
    constructor(label) {
        this.label = label;
        this.next = this.random = null;
    }
}
const copyRandomList = (head) => {
    // Use hashmap to do mapping (extra space: O(n))
    // 1. copy node to new node
    // 2. copy next pointer
    // 3. copy random pointer

    if (head === null) {
        return null;
    }
    // copy node
    let nodeMap = new Map();
    let curr = head;
    while (curr !== null) {
        nodeMap.set(curr, new RandomListNode(curr.label))
        curr = curr.next;
    }
    // copy the next pointer
    for (let [node, newNode] of nodeMap) {
        // remember the check node.next is null or not.
        // Pass null to map.get(), it will return undefined
        if (node.next !== null) {
            newNode.next = nodeMap.get(node.next);
        }
        if (node.random !== null) {
            newNode.random = nodeMap.get(node.random);
        }
    }
    return nodeMap.get(head);
};


const copyRandomList2 = (head) => {
    //  1->2->3-4  become 1->1'->2->2'->3->3'->4->4'
    //  1. copy next
    //  2. copy random
    //  3. split list
    if (head === null) {
        return null;
    }
    copyNext(head);
    copyRandom(head);
    let newHead = splitList(head);
    return newHead;
};

const copyNext = (head) => {
    //  1->2->3-4
    // 1->1'->2->2'->3->3'->4->4'
    let oldCurr = head;
    while (oldCurr !== null) {
        let newCurr = new RandomListNode(oldCurr.label);
        newCurr.random = oldCurr.random;
        newCurr.next = oldCurr.next
        oldCurr.next = newCurr
        oldCurr = oldCurr.next.next;
    }
};

const copyRandom = (head) => {
    let oldCurr = head;
    while (oldCurr !== null) {
        if (oldCurr.next.random !== null) {
            oldCurr.next.random = oldCurr.random.next;
            oldCurr = oldCurr.next.next;
        }
    }
};

const splitList = (head) => {
    //  1->1'->2->2'->3->3'->4->4' become 1->2->3-4  and 1'->2'->3'-4'
    let oldCurr = head;
    let newHead = head.next;

    while (oldCurr !== null) {
        let newCurr = oldCurr.next;
        oldCurr.next = oldCurr.next.next;
        if (newCurr.next !== null) {
            newCurr.next = newCurr.next.next;
            oldCurr = oldCurr.next
        }else {
            break
        }
    }
    return newHead;
};
