'use strict';

const twoSum = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return [];
    }
    let map = new Map();
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
};

// const main = () => {
//     let nums, target;
//     nums = [2, 7, 11, 15];
//     target = 9;
//     console.log(twoSum(nums, target));
// };
// main();
