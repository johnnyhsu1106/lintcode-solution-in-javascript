'use strict';
const climbStairs_1 = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    let ways = [];
    for (let i = 0; i <= n; i++) {
        ways[i] = 0;
    }
    ways[0] = 1;
    ways[1] = 1;
    for (let i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
};

const climbStairs_2 = (n) =>  {
    // optimize the space
    if (n === 0 || n === 1) {
        return 1;
    }

    let ways = [1, 1];
    let count;
    for (let i = 2; i <= n; i++) {
        count = ways[0] + ways[1];
        ways[0] = ways[1]
        ways[1] = count;
    }
    return count;
};

// const main = () => {
//     console.log(climbStairs_1(10));
//     console.log(climbStairs_2(10));
// };
// main();
