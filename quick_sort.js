'use strict';
const quickSort = (nums) => {
    if (nums === null || nums.length <= 1) {
        return nums;
    }
    helper(nums, 0, nums.length - 1);

};
const helper = (nums, start, end) => {
    if (start >= end) {
        return;
    }
    let pivot = nums[Math.floor((start + end) / 2)];
    let left = start, right = end;

    while (left <= right) {
        while (left <= right && nums[left] < pivot) {
            left++;
        }
        while (left <= right && nums[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;

        }
    }

    helper(nums, start, right);
    helper(nums, left, end)
};

// const main = () => {
//     let nums;
//     nums = [2, 4, 1, 3, 8];
//     quickSort(nums);
//     console.log(nums);
//
// };
// main();
