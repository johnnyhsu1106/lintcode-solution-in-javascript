const permuteUnique = (nums) => {
    if (nums === null) {
        return [];
    }
    if (nums.length === 0) {
        return [[]];
    }
    let result = [];
    let permutation = [];
    let visited = [];
    nums.sort((num1, num2) =>{ return num1 > num2 ? 1 : -1 });
    for (let i = 0; i < nums.length; i++) {
        visited[i] = false;
    }
    dfs(nums, permutation, visited, result);

    return result;
};

const dfs = (nums, permutation, visited, result) =>  {

    if (permutation.length === nums.length) {
        result.push(permutation.concat([]))
    }

    for (let i = 0; i < nums.length; i++) {
        if (! visited[i]) {
            if (i === 0 || nums[i] !== nums[i - 1] || visited[i - 1]) {
                permutation.push(nums[i]);
                visited[i] = true;
                dfs(nums, permutation, visited, result);
                visited[i] = false;
                permutation.pop();
            }
        }
    }
};

// const main = () => {
//     let nums = [3, 3, 0, 3];
//     console.log(permuteUnique(nums));
// };
// main();
