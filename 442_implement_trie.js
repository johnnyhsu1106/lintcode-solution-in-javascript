'use strict';

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isCompleteWord = false;
        this.word = '';
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            let child = node.children.get(char);
            if (child === undefined) {
                child = new TrieNode();
                node.children.set(char, child);
            }
            node = child;
         }
         node.isCompleteWord = true;
         node.word = word;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            let child = node.children.get(char);
            if (child === undefined) {
                return false;
            }
            node = child;
        }
        return node.isCompleteWord;
    }
    startWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            let child = node.children.get(char);
            if (child === undefined) {
                return false;
            }
            node = child;
        }
        return true;
    }
}




// const main = () =>  {
//     let trie;
//     trie = new Trie();
//     trie.insert('lintcode');
//     console.log(trie.search('code'));
//     console.log(trie.startWith('lint'));
//     console.log(trie.startWith('linterror'));
//     trie.insert('linterror');
//     console.log(trie.search('lintcode'));
//     console.log(trie.startWith('linterror'));
//
// };
// main();
