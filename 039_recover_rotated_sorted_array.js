'use strict';

const recoverRotatedSortedArray = (nums) => {
    if (nums === null || nums.length === 0) {
        return;
    }
    let sep = nums.length - 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            sep = i;
        }
    }
    if (sep === nums.length - 1) {
        return;
    }
    swap(nums, 0, sep);
    swap(nums, sep + 1, nums.length - 1);
    swap(nums, 0, nums.length - 1);
};

const swap = (nums, i, j) => {
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
};

// const main = () => {
//     let nums;
//     nums = [4, 5, 1, 2, 3];
//     recoverRotatedSortedArray(nums);
//     console.log(nums);
//
//     nums = [1, 2, 3, 4, 5];
//     recoverRotatedSortedArray(nums);
//     console.log(nums);
// } ;
// main();
