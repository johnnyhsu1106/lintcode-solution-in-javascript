'use strict';

const partition = (s) => {
    if (s === null || s.length === 0) {
        return [];
    }
    let results = [];
    let partitions = [];
    dfs(s, partitions, 0, results);

    return results;
};

const dfs = (s, partitions, startIdx, results) => {

    if (startIdx === s.length) {
        results.push(partitions.concat([]));
    }

    for (let i = startIdx; i < s.length; i++) {

        let sub = s.substring(startIdx, i + 1);

        if (isPalindrome(sub)) {
            partitions.push(sub);
            dfs(s, partitions, i + 1, results);
            partitions.pop();
        }

    }
};
const isPalindrome = (string) => {
    let start = 0, end = string.length - 1;
    while (start < end) {
        if (string.charAt(start) !== string.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};


// const main = () => {
//     let s;
//     s = 'aab'
//     console.log(partition(s));
// };
// main();
