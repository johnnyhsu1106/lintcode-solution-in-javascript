'use strict';

const minWindow = (source, target) =>  {
    if (source.length === 0 || target.length === 0) {
        return '';
    }

    let result = '';
    let subLength = Infinity;

    let sCount = new Map();
    let tCount = new Map();

    for (let char of source) {
        sCount.set(char, 0);
    }
    for (let char of target) {
        if (! tCount.has(char)) {
            tCount.set(char, 0);
        }
        tCount.set(char, tCount.get(char) + 1);
    }

    let j = 0;
    let size = source.length;

    for (let i = 0; i < size; i++) {
        while (j < size && ! isSubstring(sCount, tCount)) {
            let char = source.charAt(j);
            sCount.set(char, sCount.get(char) + 1)
            j++;
        }

        if (isSubstring(sCount, tCount) && j - i < subLength) {
            result = source.substring(i, j);
            subLength = j - i;
        }
        let char = source.charAt(i);
        sCount.set(char, sCount.get(char) - 1);

    }
    return result;
};


const isSubstring = (sCount, tCount) => {

    for (let [char, count] of tCount) {
        if (! sCount.has(char) || sCount.get(char) < count) {
            return false;
        }
    }
    return true;
};


// 
// const main = () => {
//     let source, target;
//     source = 'ADOBECODEBANC';
//     target = 'ABC';
//     console.log(minWindow(source, target));
//
//     source = 'cabwefgewcwaefgcf';
//     target = 'cae';
//     console.log(minWindow(source, target));
//
// };
// main();
