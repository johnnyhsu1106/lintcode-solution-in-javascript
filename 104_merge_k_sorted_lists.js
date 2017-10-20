'use strict';
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const mergeKLists_merge = (lists) => {
    if (lists === null || lists.length === 0) {
        return [];
    }
    return helper(lists, 0, lists.length - 1);
};

const helper = (lists, start, end) => {
    if (start === end) {
        return lists[start];
    }
    let mid = Math.floor(start + (end - start)  / 2);
    let left = helper(lists, start, mid);
    let right = helper(lists, mid + 1, end);

    return mergeTwoLists(left, right);
};

const mergeTwoLists = (head1, head2) => {
    let dummy = new ListNode(0);
    let curr = dummy;
    let curr1 = head1, curr2 = head2;
    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            curr.next = curr1;
            curr1 = curr1.next;
        } else {
            curr.next = curr2;
            curr2 = curr2.next;
        }
        curr = curr.next;
    }
    if (curr1 !== null) {
        curr.next = curr1;
    }
    if (curr2 !== null) {
        curr.next = curr2;
    }
    return dummy.next;
};



const mergeKLists_heap = (lists) => {
    const Heap = require('collections/heap');
    let minHeap = new Heap([], null, (node1, node2) => {return node2.val - node1.val});
    let dummy = new ListNode(0);
    let tail = dummy;

    lists.forEach((list) => {
        if (list !== null) {
            minHeap.push(list);
        }
    });

    while (minHeap.length !== 0) {
        let node = minHeap.pop();
        if (node.next !== null) {
            minHeap.push(node.next);
        }
        tail.next = node;
        tail = tail.next;
    }
    return dummy.next;
};


// const main = () =>  {
//     let lists, node1, node2;
//
//     node1 = new ListNode(2);
//     node1.next = new ListNode(4);
//     node2 = new ListNode(-1);
//     lists = [node1, null, node2];
//     console.log(mergeKLists_merge(lists));
//
//
//     node1 = new ListNode(2);
//     node1.next = new ListNode(4);
//     node2 = new ListNode(-1);
//     lists = [node1, null, node2];
//     console.log(mergeKLists_heap(lists));
// };
// main();
