'use strict';

const permute = (nums) => {
    if (nums === null) {
        return [];
    }
    if (nums.length === 0) {
        return [[]];
    }
    let result = [];
    let permutation = [];
    let set = new Set();
    dfs(nums, permutation, set, result);

    return result;

};
const dfs = (nums, permutation, set, result) => {
    if (permutation.length === nums.length) {
        result.push(permutation.concat([]));
    }

    for (let i = 0; i < nums.length; i++) {
        if (! set.has(nums[i])) {
            set.add(nums[i]);
            permutation.push(nums[i]);
            dfs(nums, permutation, set, result)
            permutation.pop();
            set.delete(nums[i]);
        }
    }
};



// const main = () => {
//     let nums;
//     nums = [1, 2];
//     console.log(permute(nums))
// };
// main();
