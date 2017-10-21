'use strict';

const jump = (nums) => {
    // DP solution
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let minJumps = [];
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        minJumps.push(Infinity);
    }
    minJumps[0] = 0;
    for (let i = 1; i < size; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= i - j && minJumps[j] !== Infinity) {
                minJumps[i] = Math.min(minJumps[i], minJumps[j] + 1)
            }
        }
    }
    return minJumps[size - 1];
};



// const main = () => {
//     let nums;
//     nums = [2,3,1,1,4];
//     console.log(jump(nums));
// };
// main();
