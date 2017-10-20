'use strict'
// LintCode :
    // @parameters: start: string, end: string, dict: Set
// LeetCdoe:
    // @parameters: beginWord: string, endWord: string, wordList: Array;

// The following code is the solution for LintCode
// If you'd like to test this in LeetCode, add the following code in the beginning of codes
// so you can convert Array to Set
// dict = new Set(wordList);
const findLadders = (start, end, dict) => {

    if (dict === null || start === null || end === null) {
        return [];
    }
    if (start === end) {
        return [[start]];
    }
    let result = [];
    let path = [start];
    dict.add(start);
    dict.add(end);
    // iniialize the distanceMap, nextWordMap
    let distanceMap = new Map();
    let nextWordsMap = new Map();
    for (let word of dict) {
        distanceMap.set(word, 0);
        nextWordsMap.set(word, []);
    }

    bfs(start, end, dict, distanceMap, nextWordsMap);
    dfs(start, end, dict, distanceMap, nextWordsMap, path, result);

    return result;
};

const dfs = (word, end, dict, distanceMap, nextWordsMap, path, result) => {
    // traversal all paths from start to end and follow this requirement
    // distanceMap.get(word) = distance.get(nextWord) + 1

    if (word === end) {
        result.push(path.concat([]));
        return;
    }
    let nextWords = nextWordsMap.get(word);
    for (let nextWord of nextWords) {
        if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
            path.push(nextWord);
            dfs(nextWord, end, dict, distanceMap, nextWordsMap, path, result);
            path.pop();
        }
    }
};

const bfs = (start, end, dict, distanceMap, nextWordsMap) => {
    // find the each node's (word's) distance from the end to start : {word: distance}
    // find the word's next words :{word: [next_word1, next_word2,.... ]}
    let queue = [end];
    let visited = new Set([end]);
    let distance = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let word = queue.shift();
            distanceMap.set(word, distance);
            let nextWords = getNextWords(word, dict);
            nextWordsMap.set(word, nextWords);
            nextWords.forEach((nextWord) => {
                if (! visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push(nextWord);
                }
            });
        }
        distance++;
    }
};

const getNextWords = (word, dict) => {
    let nextWords = [];
    let size = word.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < 26; j++) {
            let char = word.charAt(i);
            let newChar = String.fromCharCode('a'.charCodeAt(0) + j);
            if (char !== newChar) {
                let nextWord = replaceChar(i, newChar, word);
                if (dict.has(nextWord)) {
                    nextWords.push(nextWord);
                }
            }
        }
    }
    return nextWords;
};

const replaceChar = (index, newChar, word) => {
    return word.substring(0, index).concat(newChar).concat(word.substring(index + 1))
};




// const main = () => {
//
//     let start, end, dict;
//     start = 'hit';
//     end = 'cog';
//     dict = new Set(["hot","dot","dog","lot","log"]);
//     console.log(findLadders(start, end, dict)); 
// };
// main();
