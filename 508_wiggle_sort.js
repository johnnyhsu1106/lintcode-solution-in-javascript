'use strict';

const wiggleSort = (nums) => {
    if (nums === null || nums.length === 0) {
        return;
    }
    let size = nums.length;
    for (let i = 1; i < size; i++) {
        if (i % 2 === 1 && nums[i] < nums[i - 1] || i % 2 === 0 && nums[i] > nums[i - 1]) {
            swap(nums, i, i - 1);
        }
    }
};

const swap = (nums, i , j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};


// const main = () => {
//     let nums;
//     nums = [3, 5, 2, 1, 6, 4];
//     wiggleSort(nums);
//     console.log(nums);
// };
// main();
