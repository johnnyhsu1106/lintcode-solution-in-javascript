'use strict'

const Heap = require('collections/heap');
const topKFrequentWords = (words, k) => {
    if (words === null || words.length === 0 || k ===0){
        return [];
    }
    let result = [];
    wordsCount = new Map();
    words.forEach((word) => {
        if (! wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }
        wordsCount.set(word, wordsCount.get(word) + 1);
    });
    let minHeap = new Heap([], null, (a, b) => {return b - a});
    wordsCount.forEach((count, word) => {
        minHeap.push([count, word]);
        // if (minHeap.length > k ) {
        //     minHeap.pop();
        // }
    });

    // return minHeap.sorted();
};
const main = () => {

};
main();
