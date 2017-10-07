'use strict';

const closestNumber =  (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            return mid;
        }else if (nums[mid] < target) {
            start = mid;
        }else {
            end = mid;
        }
    }
    if (target - nums[start] > nums[end] - target) {
        return end;
    }
    return start;
};


// const main = () => {
//     let nums;
//     nums = [1, 2, 3];
//     console.log(closestNumber(nums, 2) === 1);
//
//     nums = [1, 4, 6];
//     console.log(closestNumber(nums, 3) === 1);
//
//     nums = [1, 4, 6];
//     console.log(closestNumber(nums, 5) === 1 || closestNumber(nums, 5) === 2);
//
//     nums = [1, 3, 3, 4];
//     console.log(closestNumber(nums, 2) === 0 || closestNumber(nums, 2) === 1 || closestNumber(nums, 2) === 2);
// };
// main();
