'use strict';

const partitionArray = (nums, k) => {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] < k) {
            left++
        }
        while (left < right && nums[right] >= k) {
            right--;
        }
        if (left < right) {
            swap(left, right, nums);
            left++;
            right--;
        }
    }

    if (nums[left] >= k){
        return left;
    }return left + 1;
};


const swap = (idx1, idx2, nums) => {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
};


// const main = () => {
//     let nums, k;
//     nums = [3, 2, 2, 1];
//     k = 2;
//     console.log(partitionArray(nums, k))
//     console.log(nums);
//
//     nums = [7,7,9,8,6,6,8,7,9,8,6,6];
//     k = 10;
//     console.log(partitionArray(nums, k))
//     console.log(nums);
//
//     nums = [7,7,9,8,6,6,8,7,9,8,6,6];
//     k = 5;
//     console.log(partitionArray(nums, k))
//     console.log(nums);
// };
// main();
