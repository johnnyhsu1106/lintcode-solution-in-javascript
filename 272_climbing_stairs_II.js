'use strict';

const climbStair2 = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let ways = [1, 1, 2];
    let count;

    for (let i = 3; i <= n; i++) {
        count = ways[0] + ways[1] + ways[2];
        ways[0] = ways[1];
        ways[1] = ways[2];
        ways[2] = count;
    }
    return count
};

// const main = () => {
//     let n;
//     console.log(climbStair2(3));
// };
// main();
