'use strict';

const mergeSortedarray = (nums1, nums2) => {

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
    let size1 = nums.length, size2 = nums2.length;

    while (i < size1 && j < size2) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    while (i < size1) {
        result.push(nums1[i]);
        i++;
    }
    while (j < size2) {
        result.push(nums2[j]);
        j++;
    }
    return result;
};


// const main = () => {
//     let nums1, nums2;
//     nums1 = [1,2,3,4];
//     nums2 = [2,4,5,6];
//     console.log(mergeSortedarray(nums1, nums2))
// };
// main();
