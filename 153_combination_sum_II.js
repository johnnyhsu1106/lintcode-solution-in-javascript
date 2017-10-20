'use strict';

const combinationSum2 = (candicates, target) => {
    if (candicates === null || candicates.length === 0) {
        return [];
    }
    let results = [];
    let combination = [];
    candicates.sort((num1, num2) => { return num1 > num2 ? 1 : -1})
    dfs(candicates, 0, target, combination ,results);

    return results;
};

const dfs = (candicates, startIdx, remain, combination, results) => {
    if (remain === 0) {
        results.push(combination.concat([]));
    }
    let size = candicates.length;

    for (let i = startIdx; i < size; i ++) {
        if (candicates[i] > remain) {
            break;
        }
        if (i === 0 || candicates[i] !== candicates[i - 1] || i === startIdx) {
            combination.push(candicates[i]);
            dfs(candicates, i + 1, remain - candicates[i], combination, results)
            combination.pop();
        }
    }
};
