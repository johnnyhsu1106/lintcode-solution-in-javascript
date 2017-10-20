'use strict';

const recoverRotatedSortedArray = (nums) => {
    if (nums === null || nums.length === 0) {
        return;
    }

    let size = nums.length;
    let sep = size - 1;
    for (let i = 0; i < size - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            sep = i;
        }
    }
    if (sep === size - 1) {
        return;
    }
    swap(nums, 0, sep);
    swap(nums, sep + 1, size - 1);
    swap(nums, 0, size - 1);
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
