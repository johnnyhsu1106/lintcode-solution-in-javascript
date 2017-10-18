'use strict';

const partition2 = (nums, low, high) => {
    // please see the problem 148 sort color (the same concept)
    if (nums === null || nums.length === 0){
        return;
    }
    let i = 0, left = 0, right = nums.length - 1;

    while (i < right) {
        if (nums[i] < low) {
            swap(nums, i, left);
            left++;
            i++;
        } else if (nums[i] > high) {
            swap(nums, i, right);
            right--;
        } else {
            i++;
        }
    }
};
const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};


// const main = () => {
//     let nums, low, high;
//     nums = [4,3,4,1,2,3,1,2];
//     low = 2, high = 3;
//     partition2(nums, low, high);
//     console.log(nums);
// };
// main();
