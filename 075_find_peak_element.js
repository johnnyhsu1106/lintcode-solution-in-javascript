'use strict';

const findPeak = (nums) => {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] < nums[mid + 1]) {
            start = mid;
        } else if (nums[mid] > nums[mid + 1]){
            end = mid;
        }
    }
    if (nums[start] > nums[end]) {
        return start;
    }
    return end;
};

// const main = () => {
//     let nums;
//     nums = [1, 2, 1, 3, 4, 5, 7, 6];
//     console.log(findPeak(nums));
// };
// main();
