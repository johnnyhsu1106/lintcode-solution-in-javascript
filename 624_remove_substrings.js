'use strict';

const minLength = (str, dict) => {
    // BFS
    if (str.length == 0 || dict.size === 0) {
        return -1
    }
    let queue = [str];
    let visited = new Set([str]);
    let min = str.length;

    while (queue.length !== 0) {
        let str = queue.shift();
        min = Math.min(min, str.length);
        for (let sub of dict) {
            let found = str.indexOf(sub);

            while (found !== -1) {
                let newStr = str.slice(0, found).concat(str.slice(found + sub.length));
                if (! visited.has(newStr)) {
                    queue.push(newStr);
                    visited.add(newStr);
                }
                found = str.indexOf(sub, found + 1)
            }
        }
    }
    return min;
};


// const main = () => {
//     let str = 'ccdaabcdbb';
//     let dict = new Set(['ab','cd']);
//     console.log(minLength(str, dict));
// };
// main();
