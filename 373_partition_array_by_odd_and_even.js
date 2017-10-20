'use strict';

const partitionArray = (nums) => {
    if (nums === null || nums.length === 0) {
        return;
    }
    let left = 0, right = nums.length - 1;

    while (left < right) {
        while (left < right && nums[left] % 2 === 1) {
            left++;
        }
        while (left < right && nums[right] % 2 === 0) {
            right--;
        }
        if (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
};

// const main = () => {
//     let nums;
//     nums = [1, 2, 3, 4];
//     partitionArray(nums);
//     console.log(nums);
// };
// main();
