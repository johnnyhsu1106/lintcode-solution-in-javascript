'use strict';

const longestConsecutive = (nums) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let set = new Set(nums);
    let longest = 0;
    for (let num of nums) {
        let down = num - 1;
        while (set.has(down)) {
            set.delete(down);
            down--;

        }

        let up = num + 1;
        while (set.has(up)) {
            set.delete(up);
            up++;
        }
        longest = Math.max(longest, up -  down - 1)
    }
    return longest;
};

// const main = () => {
//     let nums;
//     nums =  [100, 4, 200, 1, 3, 2];
//     console.log(longestConsecutive(nums));
// };
// main();
