'use strict';
const lastPostion = (nums, target) => {

    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] > target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            start = mid;
        }
    }
    if (nums[end] === target) {
        return end;
    }
    if (nums[start] === target) {
        return start;
    }
    return -1;
};



// const main = () => {
//     const nums = [1, 2, 2, 4, 5, 5];
//     console.log(lastPostion(nums, 2) === 2);
//     console.log(lastPostion(nums, 5) === 5);
//     console.log(lastPostion(nums, 6) === -1)
//
// }
// main();
