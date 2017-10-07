'use strict';

const findMin = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }

    const target = nums[nums.length - 1];
    let start = 0, end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) /2);
        if (nums[mid] <= target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    return Math.min(nums[start], nums[end]);

};
