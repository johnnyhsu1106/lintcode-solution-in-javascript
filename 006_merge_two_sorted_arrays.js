'use strict';

const mergeSortearray = (nums1, nums2) => {
    if (nums1.length === 0 && nums2.length === 0) {
        return [];
    }
    if (nums1.length === 0) {
        return nums2;
    }
    if (nums2.length === 0) {
        return nums1;
    }

    let result = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    return result;
};


// const main = () => {
//     let nums1, nums2;
//     nums1 = [1,2,3,4];
//     nums2 = [2,4,5,6];
//     console.log(mergeSortearray(nums1, nums2))
// };
// main();
