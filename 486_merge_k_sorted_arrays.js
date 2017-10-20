'use strict';

const Heap = require('collections/heap');

const mergeSortedArrays_heap = (arrays) => {
    if (arrays === null || arrays.length === 0|| arrays[0] === 0) {
        return [];
    }
    let minHeap = Heap([], null, ([val1, x1, y1], [val2, x2, y2]) => {return val2 - val1});
    let result =[];
    // inintial the k numbers in minHeap
    let size = arrays.length;
    for (let x = 0; x < size; x++) {
        let array = arrays[x];
        if (array.length !== 0) {
            minHeap.push([array[0], x, 0 ]);
        }
    }

    while (minHeap.length !== 0) {
        let [val, x, y] = minHeap.pop();
        result.push(val);
        if (y + 1 < arrays[x].length) {
            minHeap.push([arrays[x][y + 1], x, y + 1]);
        }
    }
    return result;
};

const mergeSortedArrays_merge = (arrays) => {
    // divide and conquer (like merge sort. merge two arrays at one time.)
    if (arrays.length === 0) {
        return [];
    }
    if (arrays.length === 1) {
        return arrays[0];
    }
    let mid = Math.floor(arrays.length / 2);
    let left = mergeSortedArrays_merge(arrays.slice(0, mid));
    let right = mergeSortedArrays_merge(arrays.slice(mid));
    return mergeTwoArrays(left, right);

};

const mergeTwoArrays = (arr1, arr2) => {
    if (arr1 === null && arr2 ===  null) {
        return [];
    }
    if (arr1 === null) {
        return arr2;
    }
    if (arr2 === null) {
        return arr1;
    }

    let result = [];
    let i = 0, j = 0;
    let size1 = arr1.length, size2 = arr2.length;
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    while (i < size1) {
        result.push(arr1[i++]);
    }
    while (j < size2) {
        result.push(arr2[j++]);
    }

    return result;
};



// const main = () => {
//     let arrays;
//     arrays = [[1, 3, 5, 7],
//               [2, 4, 6],
//               [0, 8, 9, 10, 11]];
//     console.log(mergeSortedArrays_heap(arrays));
//     console.log(mergeSortedArrays_merge(arrays));
// };
// main();
