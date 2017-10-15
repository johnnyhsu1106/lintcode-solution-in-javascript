// 'use strict';
//
//
//
// const mergeSort = (nums) =>  {
//     helper(nums, 0, nums.length - 1);
// };
//
// const helper = (nums, start, end) => {
//     if (start === end) {
//         return;
//     }
//
//     let mid = Math.floor((start + end) / 2);
//     helper(nums, start, mid);
//     helper(nums, mid + 1, end)
//     merge(nums, start, mid, end);
// };
//
//
// const merge = (nums, leftStart, leftEnd, rightEnd) => {
//     let result = [];
//     let rightStart =  leftEnd + 1;
//     while (leftStart < leftEnd && rightStart < rightEnd) {
//         if (nums[leftStart] < nums[rightStart]) {
//             result.push(nums[leftStart]);
//             leftStart++;
//         } else {
//             result.push(nums[rightStart]);
//             rightStart++;
//         }
//     }
//     while (leftStart < leftEnd) {
//         result.push(nums[leftStart]);
//         leftStart++;
//     }
//     while (rightStart < rightEnd) {
//         result.push(nums[rightStart]);
//         rightStart++;
//     }
//     console.log(result)
//     //  copy all value from result to nums
//
// };
//
// const main = () => {
//     let nums;
//     nums = [1, 4, 2, 3, 8, 0];
//
//     merge(nums, 0, 2, 5);
//     console.log(nums);
// };
// main();
