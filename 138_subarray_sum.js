'use strict';

const subarraySum = (nums) => {
    // p[j] = p[i - 1], sum(nums.slice(i, j+ 1)) = 0, aka. return [i + 1, j]
    let preSumTable = new Map();
    preSumTable.set(0, -1);
    let sum = 0;
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        sum += nums[i];
        if (preSumTable.has(nums[i])) {
            return [preSumTable.get(sum) + 1, i];
        }
        preSumTable.set(sum, i);
    }
};


// const main = () => {
//     let nums;
//     nums = [-3, 1, 2, -3, 4];
//     console.log(subarraySum(nums));
// };
// main();
