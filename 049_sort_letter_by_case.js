'use strict';

const sortLetters = (chars) => {
    if (chars === null || chars.length === 0) {
        return;
    }
    let left = 0, right = chars.length - 1;
    while (left < right) {
        while (left < right && chars[left] === chars[left].toLowerCase()) {
            left++;
        }
        while (left < right && chars[right] === chars[right].toUpperCase()) {
            right--;
        }
        if (left < right) {
            let temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
    }

};

// const main = () => {
//     let chars;
//     chars = ['a','b', 'A', 'c', 'D'];
//     sortLetters(chars);
//     console.log(chars);
// };
// main();
