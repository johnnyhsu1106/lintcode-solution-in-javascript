'use strict';
const findClosestElements = (nums, target, k) => {
    let result = [];
    if (nums === null || nums.length === 0 || k <= 0) {
        return result;
    }
    const index = findClosestElementIndex(nums, target);

    let left = index - 1, right = index;

    for (let i = 0; i < k; i++) {
        if (left < 0) {
            result.push(nums[right++]);
        } else if (right >= nums.length) {
            result.push(nums[left--]);
        } else {
            if (target - nums[left] <= nums[right] - target) {
                result.push(nums[left--]);
            } else {
                result.push(nums[right++]);
            }
        }
    }
    return result;
};


const findClosestElementIndex = (nums, target) => {
    let start = 0 , end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < target) {
            start = mid;
        }else if (nums[mid] > target) {
            end = mid;
        } else {
            return mid;
        }
    }
    if (target - nums[start] <= nums[end] - target) {
        return start;
    }
    return end;
};


const main = () => {
    let nums, target, k;
    nums = [1, 2, 3];
    target = 2;
    k = 3;
    console.log(findClosestElements(nums, target, k));
    // [2, 1, 3]
    nums = [1, 4, 6, 8];
    target = 3;
    k = 3;
    console.log(findClosestElements(nums, target, k));
    // [4, 1, 6]
    nums = [1, 4, 6, 10, 20];
    target = 1;
    k = 4;
    console.log(findClosestElements(nums, target, k));
    // [1, 4, 6, 10]

};
main();
