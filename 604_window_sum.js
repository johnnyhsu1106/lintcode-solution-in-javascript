'use strict';
 const winSum = (nums, k) =>  {
     if (nums === null || nums.length === 0) {
         return [];
     }
     let result = [];
     let sum = 0;
     for (let i = 0; i < k; i++) {
         sum += nums[i];
     }
     result.push(sum);

     for (let i = k; i < nums.length; i++) {
         sum = sum + nums[i] - nums[i - k];
         result.push(sum);
     }
     return result;
 };


// const main = () => {
//     let nums, k;
//     nums = [1,2,7,8,5];
//     k = 3;
//     console.log(winSum(nums, k) );
// };
// main();
