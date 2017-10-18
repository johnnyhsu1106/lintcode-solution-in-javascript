'use strict';

const mergeSortedArray = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let index = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[index--] = nums1[i--];
        } else {
            nums1[index--] = nums2[j--];
        }
    }
    while (i >= 0) {
        nums1[index--] = nums1[i--];
    }
    while (j >= 0) {
        nums1[index--] = nums2[j--];
    }
};


// const main = () => {
//     let nums1, nums2, m, n;
//     nums1 = [1, 2, 3, 'empty', 'emtpy'];
//     nums2 = [4, 5];
//     m = 3;
//     n = 2;
//     mergeSortedArray(nums1, m, nums2, n);
//     console.log(nums1);
// };
// main();
