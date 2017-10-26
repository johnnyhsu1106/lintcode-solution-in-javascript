'use strict';

const isValidParentheses = (s) => {
    if (s === null || s.length <= 1) {
        return false;
    }
    let map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');

    let stack = [];

    for (let char of s) {
        if (map.has(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0 || map.get(stack.pop()) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
