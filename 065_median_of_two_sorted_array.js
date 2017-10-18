'use strict';

const findMedianSortedArrays = (nums1, nums2) => {
    let n = nums1.length + nums2.length;
    if (n % 2 === 1) {
        return findKthNum(nums1, nums2, (n + 1) / 2);
    } else {
        return (findKthNum(nums1, nums2, n / 2) + findKthNum(nums1, nums2, n / 2 + 1)) / 2;
    }
};

const findKthNum = (nums1, nums2, k) => {
    if (nums1.length === 0) {
        return nums2[k - 1];
    }
    if (nums2.length === 0) {
        return nums1[k - 1];
    }
    if (k === 1) {
        return Math.min(nums1[0], nums2[0]);
    }

    let mid = Math.floor(k / 2);
    let a = nums1.length >= mid ? nums1[mid - 1] : Infinity;
    let b = nums2.length >= mid ? nums2[mid - 1] : Infinity;
    if (a < b) {
        return findKthNum(nums1.slice(mid), nums2, k - mid);
    } else {
        return findKthNum(nums1, nums2.slice(mid), k - mid);
    }
};

  
