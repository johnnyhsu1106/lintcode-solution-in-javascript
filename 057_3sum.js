'use strict';

const threeSum = (nums) => {
    if (nums === null || nums.length < 3) {
        return [];
    }
    let result = [];
    nums.sort((num1, num2) => {return num1 > num2 ? 1 : -1});

    let size = nums.length;
    for (let i = 0; i < size - 2; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) {

            let start = i + 1 , end = size - 1;

            while (start < end) {
                let sum = nums[i] + nums[start] + nums [end]
                if (sum === 0) {
                    result.push([nums[i], nums[start], nums[end]])
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++;
                    }
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (sum > 0) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return result;
};



// const main = () => {
//     let nums;
//     nums = [-1, 0, 1, 2, -1, -4];
//     console.log(threeSum(nums));
//
// };
// main();
