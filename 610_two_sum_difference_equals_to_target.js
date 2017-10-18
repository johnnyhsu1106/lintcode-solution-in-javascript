'use strict';

const twoSum7 = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return [];
    }
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(num)) {
            return [map.get(num) + 1, i + 1];
        }
        // console.log(num + target);
        map.set(num + target, i);
        map.set(num - target, i);

    }
};


// const main = () => {
//     let nums, target;
//     nums = [2, 7, 15, 24];
//     target = 5;
//     console.log(twoSum7(nums, target));
// };
// main();
