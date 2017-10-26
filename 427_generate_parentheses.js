'use strict';

const generateParenthesis = (n) => {
    if (n === 0) {
        return [];
    }
    let result = [];
    let paren = '';
    helper(n, n, paren, result);

    return result;
};
const helper = (left, right, paren, result) => {
    if (left === 0 && right === 0) {
        result.push(paren);
        return;
    }
    if (left > 0) {
        helper(left - 1, right, paren + '(', result);
    }
    // left must less than right so it can become a ()
    if (right > 0 && left < right) {
        helper(left, right - 1, paren + ')' , result);
    }

};

// const main = () => {
//     let n;
//     n = 3;
//     console.log(generateParenthesis(n));
// };
// main();
