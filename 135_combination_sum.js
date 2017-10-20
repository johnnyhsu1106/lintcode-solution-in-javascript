'use strict';

const combinationSum = (candicates, target) => {
    if (candicates === null || candicates.length === 0) {
        return [];
    }
    // remember javascript sort method is unstable, it covert number to string and sorted it.
    candicates.sort((num1, num2) => {return num1 > num2 ? 1 : -1});
    let result = [];
    let combination = [];
    dfs(candicates, target, combination, 0,  result);

    return result;
};

const dfs = (candicates, remain, combination, startIdx, result) => {

    if (remain === 0) {
        result.push(combination.concat([]));
        return ;
    }
    let size = candicates.length;
    for (let i = startIdx; i < size; i++) {
        if (candicates[i] > remain) {
            break;
        }
        if (i === 0 || candicates[i] !== candicates [i - 1]) {
            combination.push(candicates[i]);
            dfs(candicates, remain - candicates[i], combination, i, result);
            combination.pop();
        }
    }
};



// const main = () => {
//     let candicates, target;
//     candicates = [2, 3, 3, 6, 7];
//     target = 7;
//     console.log(combinationSum(candicates, target));
//
//     candicates =[3,12,9,11,6,7,8,5,4];
//     target = 15;
//     console.log(combinationSum(candicates, target));
// };
// main();
