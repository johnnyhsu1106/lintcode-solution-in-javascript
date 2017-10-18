'use strict';

const intersection1 = (nums1, nums2) => {
    // Time: O(n)
    // Space: O(n)

    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }
    let result = [];
    let uniqueCount = new Map();

    nums1.forEach((num) => {
        if (! uniqueCount.has(num)) {
            uniqueCount.set(num, 0);
        }
        uniqueCount.set(num, uniqueCount.get(num) + 1);
    });
    nums2.forEach((num) => {
        if (uniqueCount.has(num) && uniqueCount.get(num) > 0) {
            result.push(num);
            uniqueCount.set(num, uniqueCount.get(num) - 1);
        }
    });
    return result;
};


const intersection2 = (nums1, nums2) => {
    // Time: O(nlogn + mlogm)
    // Space: O(1)

    if (nums1.length === 0 || nums2.length === 0) {
        return [];
    }
    let result = [];
    nums1.sort((num1, num2) => { return num1 > num2 ? 1 : -1});
    nums2.sort((num1, num2) => { return num1 > num2 ? 1 : -1});

    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

// const main = () => {
//     let nums1, nums2;
//     nums1 = [1, 2, 2, 1];
//     nums2 = [2, 2,];
//     console.log(intersection1(nums1, nums2));
//     console.log(intersection2(nums1, nums2));
// };
// main();
