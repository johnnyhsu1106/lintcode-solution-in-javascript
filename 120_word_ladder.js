'use strict';
//  Please notice:
// in LeetCode, type of paremeters (beginWord, endWord, WordList) => (String, String, Array)
// in LintCode, type of paremeters (start, end, dict ) => (String, String, Set)

const ladderLength = (beginWord, endWord, wordSet) => {
    if (beginWord === endWord) {
        return 1;
    }
    if (wordSet.length === 0) {
        return 0;
    }
    wordSet.add(beginWord);
    wordSet.add(endWord);

    let queue = [beginWord];
    let visited = new Set([beginWord]);
    let minLength = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        minLength++
        for (let i = 0; i < size; i++) {
            let word = queue.shift();

            if (word === endWord) {
                return minLength;
            }
            let nextWords = getNextWords(word, wordSet);
            nextWords.forEach((nextWord) => {
                if (! visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push(nextWord);
                }
            });
        }
    }
    return 0;
};

const getNextWords = (word, wordSet) => {
    let nextWords = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {

            let index = 'a'.charCodeAt(0) + j;
            let newChar = String.fromCharCode(index);

            if (word.charAt(i) !== newChar) {
                let nextWord = replaceChar(i, word, newChar);
                if (wordSet.has(nextWord)) {
                    nextWords.push(nextWord);
                }
            }

        }
    }
    return nextWords;
};

const replaceChar = (index, word, newChar) => {
    return word.substring(0, index).concat(newChar).concat(word.substring(index + 1));

};


// const main = () => {
//     let beginWord = 'hit';
//     let endWord = 'cog';
//     let wordSet = new Set(["hot","dot","dog","lot","log"]);
//     console.log(ladderLength(beginWord, endWord, wordSet));
// };
// main();
