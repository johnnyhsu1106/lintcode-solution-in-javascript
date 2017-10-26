'use strict';

const lengthOfLongestSubstringKDistinct = (string, k) => {
    if (string.length === 0 || k === 0) {
        return 0;
    }
    let j = 0;
    let longest = 0;
    let size = string.length;
    let charCount = new Map();

    for (let i = 0; i < size; i++) {
        while (j < size && (charCount.size < k || charCount.has(string.charAt(j)))) {
            let char = string.charAt(j);
            if (! charCount.has(char)) {
                charCount.set(char, 0);
            }
            charCount.set(char, charCount.get(char) + 1);
            j++;
        }
        longest = Math.max(longest, j - i);

        let char = string.charAt(i);
        if (charCount.has(char)) {
            if (charCount.get(char) > 1) {
                charCount.set(char, charCount.get(char) - 1);
            }
            else {
                charCount.delete(char);
            }
        }
    }
    return longest;

};



// const main = () =>  {
//     let string, k;
//     string = 'eceba';
//     k = 3;
//     console.log(lengthOfLongestSubstringKDistinct(string, k));
// };
// main();
