'use strict';

class ListNode {

    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(0,0);
        this.tail = new ListNode(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        let node = this.map.get(key);
        this.removeNode(node);
        this.moveNodeToTail(node);

        return node.value
    }

    set(key, value) {
        if (this.map.has(key)) {
            this.map.set(key, value);
            let node = this.map.get(key);
            this.removeNode(node);
            this.moveNodeToTail(node);
        } else {
            if (this.map.size === this.capacity) {
                let node = this.head.next;
                this.map.delete(node.key);
                this.head.next = this.head.next.next;
                this.head.next.prev = this.head;
            }
            let newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this.moveNodeToTail(newNode);
        }
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    moveNodeToTail(node) {
        node.prev = this.tail.prev;
        node.prev.next = node
        node.next = this.tail;
        this.tail.prev = node;
    }
}


// const main = () => {
//     let cache;
//     cache = new LRUCache(2)
//     cache.set(1, 1)
//     cache.set(2, 2)
//     console.log(cache.get(1) == 1)
//     cache.set(3, 3)
//     console.log(cache.get(2) == -1)
//     cache.set(4, 4)
//     console.log(cache.get(1) == -1)
//     console.log(cache.get(3) == 3)
//     console.log(cache.get(4) == 4)
//
// };
// main();
