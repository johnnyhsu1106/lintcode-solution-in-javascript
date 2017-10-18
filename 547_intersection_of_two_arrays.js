'use strict';


const intersection1 = (nums1, nums2) => {
    // hash set
    // Time: O(n)
    let result = [];
    let unique = new Set(nums1);

    nums2.forEach((num) => {
        if (unique.has(num)) {
            result.push(num);
            // avoid the duplicate num
            unique.delete(num);
        }
    });
    return result;
};


const intersection2 = (nums1, nums2) => {
    // sort + two pointer
    // Time: O(nlogn)
    let result = [];
    nums1.sort((num1, num2) => { return num1 > num2 ? 1: -1 });
    nums2.sort((num1, num2) => { return num1 > num2 ? 1: -1 });

    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        }else if (nums2[j] < nums1[i]) {
            j++;
        } else {
            result.push(nums1[i])
            i++;
            j++
            // avoid the duplicate number
            while (i < nums1.length && nums1[i] === nums1[i - 1]) {
                i++;
            }
            while (j < nums2.length && nums2[j] === nums2[j - 1]) {
                j++;
            }
        }
    }
    return result;
};

const intersection3 = (nums1, nums2) => {
    // hash set + binary search
    // Time: O(nlogn + mlogn) = O((m+n)logn), approximatly O(nlogn)
    let unique = new Set();
    let result = [];
    let small, big;
    if (nums1.length > nums2.lenght) {
        small = nums2;
        big = nums1;
    } else {
        small = nums1;
        big = nums2;
    }
    small.sort((num1, num2) => { return num1 > num2 ? 1 : -1 });
    big.forEach((num)=> {
        if (binarySearch(small, num)) {
            unique.add(num);
        }
    } );
    unique.forEach((num) => {
        result.push(num);
    });
    return result;
};

const binarySearch = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] === target || nums[end] === target) {
        return true;
    }
    return false;
};



// const main = () => {
//     let nums1, nums2;
//     nums1 = [1, 2, 2, 1];
//     nums2 = [2, 2];
//     console.log(intersection1(nums1, nums2));
//     console.log(intersection2(nums1, nums2));
//     console.log(intersection3(nums1, nums2));
// };
// main();
