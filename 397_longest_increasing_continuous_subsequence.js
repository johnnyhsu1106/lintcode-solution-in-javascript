'use strict';

const findLengthOfLCIS = (nums) => {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    return Math.max(getLongest(nums), getLongest(nums.reverse()))

};
const getLongest = (nums) =>  {
    let size = nums.length;
    let longest = 1;
    let count = 1;
    for (let i = 1; i < size ; i++) {
        if (nums[i - 1] < nums[i]) {
            count++;
        }else {
            count = 1;
        }
        longest = Math.max(longest, count)
    }
    return longest;
};


// const main = () =>  {
//     let nums;
//     nums = [1,3,5,7];
//     console.log(findLengthOfLCIS(nums));
//     nums = [2,2,2,2,2];
//     console.log(findLengthOfLCIS(nums));
//
// };
// main();
