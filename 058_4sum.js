'use strict';

const fourSum = (nums, target) =>  {
    if (nums === null || nums.length < 4) {
        return [];
    }
    nums.sort((num1, num2) => { return num1 > num2 ? 1 : -1} );

    let results = [];
    let size = nums.length;
    for (let i = 0; i < size - 3; i++) {
        if (i === 0 || nums[i] != nums [i - 1] ) {

            for (let j = i + 1; j < size - 2; j++) {
                if (j === i + 1 || nums[j] != nums[j - 1]) {

                    let start = j + 1, end = size - 1;

                    while (start < end) {
                        let sum = nums[i] + nums[j] + nums[start] + nums[end];

                        if (sum === target) {
                            results.push([nums[i], nums[j], nums[start], nums[end]]);
                            start++;
                            end--;

                            while (start < end && nums[start] === nums[start - 1]) {
                                start++;
                            }
                            while (start < end && nums[end] === nums[end + 1]) {
                                end--;
                            }
                        }
                        else if (sum > target) {
                            end--;
                        }
                        else {
                            start++;
                        }
                    }
                }
            }
        }
    }
    return results;
};

// const main = () => {
//     let nums, target;
//     nums = [1, 0, -1, 0, -2, 2];
//     target = 0;
//     console.log(fourSum(nums, target));
//     nums = [0, 0, 0, 0];
//     target = 0;
//     console.log(fourSum(nums, target));
// };
// main();
