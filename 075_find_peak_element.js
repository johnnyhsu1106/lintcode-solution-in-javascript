'use strict';

const findPeak = (nums) => {
    if (nums === null) {
        return;
    }
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] <= nums[mid + 1]) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] > nums[end]) {
        return start;
    } else {
        return end;
    }
};
