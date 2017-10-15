'use strict';

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

 const insert = (node, x) => {
     if (node === null) {
         let insertNode = ListNode(x);
         node.next = insertNode;
         return node;
     }

     let prev = null;
     let curr = node;

     while (true) {
         prev = curr;
         curr = curr.next;

         if (prev.val <= x && x <= curr.val) {
             break;
         }
        //  prev is tail and curr is head
         if (prev.val > curr.val &&  prev.val <  x ||  x < curr.val) {
             break;
         }
        //  the whole linked list has only one node
         if (curr === node) {
             break;
         }
     }
     let insertNode = new ListNode(x);
     prev.next = insertNode;
     insertNode.next = curr;
     return insertNode;

 };

//  const main = () => {
//      let node, x;
//      node = new ListNode(3);
//      node.next = new ListNode(5);
//      node.next.next = new ListNode(1);
//      node.next.next.next = node;
//      x = 4;
//
//      console.log(insert(node, x));
//  };
// main();
