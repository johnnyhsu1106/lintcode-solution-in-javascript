'use strict';
const twoSum6 = (nums, target) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    nums.sort((num1, num2) => {return num1 > num2 ? 1 : -1});
    let start = 0, end = nums.length - 1;
    let count = 0;
    while (start < end){
        if (nums[start] + nums[end] === target) {
            count++;
            start++;
            end--;

            while (start < end && nums[start] === start[start -  1]) {
                start++;
            }
            while (start < end && nums[end] === nums[end + 1]) {
                end--;
            }
        } else if (nums[start] + nums[end] > target) {
            end--;
        } else {
            start++;
        }
    }
    return count;
};


// 
// const main = () => {
//     let nums, target;
//
//     nums = [1,1,2,45,46,46];
//     target = 47;
//     console.log(twoSum6(nums, target));
//
//
//     nums = [1,1,1,2,12,45,46,46,47,47];
//     target = 47;
//     console.log(twoSum6(nums, target));
// };
// main();
