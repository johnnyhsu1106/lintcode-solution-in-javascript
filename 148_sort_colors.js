'use strict';


const sortColors1 = (nums) => {
    if (nums === null || nums.length === 0) {
        return nums;
    }
    // Magical Solution
    let i = 0, left = 0, right = nums.length - 1;
    while (i < right) {
        if (nums[i] === 0) {
            swap(nums, i , left);
            left++;
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else {
            swap(nums, i, right);
            right--;
        }
    }
};

const sortColors2= (nums) => {
    if (nums === null || nums.length === 0) {
        return nums;
    }
    //  two pointer, partition array twice;

    let left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] < 1) {
            left++;
        }
        while (left < right && nums[right] >= 1) {
            right--;
        }
        if (left < right) {
            swap(nums, left ,right);
            left++;
            right--;
        }
    }
    left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] <= 1) {
            left++;
        }
        while (left < right && nums[right] == 2) {
            right--;
        }
        if (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }
};

const swap = (nums, idx1, idx2) => {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
};


// const main = () => {
//     let nums;
//     nums = [0, 1, 2, 1, 0];
//     sortColors1(nums);
//     console.log(nums);
//
//     nums = [0, 1, 2, 1, 0];
//     sortColors2(nums);
//     console.log(nums);
// };
// main();
