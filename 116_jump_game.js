'use strict';

const canJump = (nums) => {
    // Use the dynamic programing. Time: O(n^2)
    // There would be better way if you use Greedy algorithm, Time: O(n)...
    // but not a universal way
    if (nums === null || nums.length === 0) {
        return false;
    }
    let size = nums.length;
    // initial dp
    let can = [];
    for (let i = 0; i < size; i++) {
        can.push(false);
    }
    can[0] = true;

    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (can[j] && i - j <= nums[j]) {
                can[i] = true;
                break;
            }
        }
    }
    return can[size - 1];
};

// const main = () => {
//     let nums;
//     nums = [2,3,1,1,4];
//     console.log(canJump(nums) === true);
//     nums = [3,2,1,0,4];
//     console.log(canJump(nums) === false);
// };
// main();
