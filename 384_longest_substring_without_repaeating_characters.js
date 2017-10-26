'use strict';

const lengthOfLongestSubstring = (s) => {
    if (s.length === 0 || s. length === 1) {
        return s.length;
    }
    let unique = new Set();
    let j = 0;
    let result = 0;
    let size = s.length;

    for (let i = 0; i < size; i++) {

        while (j < size && ! unique.has(s.charAt(j))) {
            unique.add(s.charAt(j));
            j++;
        }
        result = Math.max(result, j - i);
        unique.delete(s.charAt(i));
    }
    return result;
};



// const main = () => {
//     let s;
//     s = 'abcabcbb';
//     console.log(lengthOfLongestSubstring(s));
//
//     s = 'bbbbb';
//     console.log(lengthOfLongestSubstring(s));
//
// };
// main();
