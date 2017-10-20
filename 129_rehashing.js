'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const rehashing = (hashTable) => {
    if (hashTable === null || hashTable.length === 0) {
        return [];
    }
    let capacity = hashTable.length;
    let newCapacity = capacity * 2;

    let newHashTable = [];
    for (let i = 0; i < newCapacity; i++) {
        newHashTable.push(null);
    }

    hashTable.forEach((node) => {

        while (node !== null) {
            let code = hashcode(node.val, newCapacity);

            if (newHashTable[code] === null) {
                newHashTable[code] = node;
            } else {
                let head = newHashTable[code];
                while (head.next !== null) {
                    head = head.next;
                }
                head.next = node;
            }
            let next = node.next;
            node.next = null;
            node = next;
        }
    });
    return newHashTable;

};

const hashcode = (key, capacity) => {
    return (key % capacity + capacity) % capacity;
};


// const main = () => {
//     let hashTable, node1, node2;
//     node1 = new ListNode(21);
//     node1.next = new ListNode(9);
//     node2 = new ListNode(14);
//     hashTable = [null, node1, node2, null];
//
//     console.log(rehashing(hashTable));
//
// };
// main();
