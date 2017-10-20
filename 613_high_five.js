'use strict';

class Record {
    constructor(id, score) {
        this.id = id;
        this.score = score;
    }
}

const highFive1 = (records) => {
    //  Time Complexity: O(nlogn) n stands for the number of data for id.
    if (records === null || records.length === 0) {
        return new Map();
    }

    let scoreMap = new Map();
    let scoreAvg = new Map();
    for (let record of records) {
        if (! scoreMap.has(record.id)) {
            scoreMap.set(record.id, []);
        }
        scoreMap.get(record.id).push(record.score);
    }
    for (let [id, scores] of scoreMap) {
        scores.sort((num1, num2) => {return num1 > num2 ? 1 : -1});
        let sum = scores.slice(scores.length - 5, scores.length ).reduce((a, b) => {return a + b});
        scoreAvg.set(id, sum / 5.0);
    }
    return scoreAvg;
};



const highFive2 = (records) => {
    // please implment heap or install heap from http://www.collectionsjs.com/heap
    // so you can use heap to optimize this solution
    const Heap = require('collections/heap');
    if (records === null || records.length === 0) {
        return new Map();
    }
    let scoreMap = new Map();
    let scoreAvg = new Map();
    for (let record of records) {
        if (! scoreMap.has(record.id)) {
            scoreMap.set(record.id, new Heap([], null, (a, b) => {return b - a})); // min heap
        }
        scoreMap.get(record.id).push(record.score)
        if (scoreMap.get(record.id).length > 5) {
            scoreMap.get(record.id).pop();
        }
    }
    for (let [id, scores] of scoreMap) {
        let sum = 0;
        while (scores.length !== 0) {
            sum += scores.pop();
        }
        scoreAvg.set(id, sum / 5.0);
    }
    return scoreAvg;
}

// const main = () => {
//     let records = [];
//     records.push(new Record(1, 91));
//     records.push(new Record(1, 92));
//     records.push(new Record(2, 93));
//     records.push(new Record(2, 99));
//     records.push(new Record(2, 98));
//
//     records.push(new Record(2, 97));
//     records.push(new Record(1, 60));
//     records.push(new Record(1, 58));
//     records.push(new Record(2, 100));
//     records.push(new Record(1, 61));
//     records.push(new Record(2, 70));
//     records.push(new Record(1, 50));
//
//     console.log(highFive1(records));
//     console.log(highFive2(records));
// };
// main();
