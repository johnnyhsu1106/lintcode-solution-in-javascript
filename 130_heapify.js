'use strict';

const heapify1 = (nums) => {
    let size = nums.length;
    for (let i = 1; i < size; i++) {
        percolateUp(nums, i);
    }
};
const percolateUp = (nums, i) => {
    while (parentIndex(i) >= 0 && nums[i] < nums[parentIndex(i)] ) {
        swap(nums, i, parentIndex(i));
        i = parentIndex(i);
    }
};
const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};
const parentIndex = (i) => {
    return Math.floor((i - 1) / 2);
};

//
const heapify2 = (nums) => {
    let size = nums.length;
 for (let i = Math.floor((size - 1) / 2) ; i >= 0 ; i--){
     percolateDown(nums, i);
 }
}
const percolateDown = (nums, i) =>  {
    while (leftChidIndex(i) < nums.length) {
        let smallChild = nums[leftChidIndex(i)];
        let smallChildIndex = leftChidIndex(i);

        if (rightChiildIndex(i) < nums.length) {
            if (nums[rightChiildIndex(i)] < smallChild) {
                smallChildIndex = rightChiildIndex(i);
            }
        }
        if (nums[i] < nums[smallChildIndex]) {
            break;
        }
        swap(nums, i , smallChildIndex);
        i = smallChildIndex;
    }
};
const leftChidIndex = (i) => {
    return 2 * i + 1;
};
const rightChiildIndex = (i) => {
    return 2 * i + 2;
};



// const main = () =>  {
//     let nums;
//     nums = [3, 2, 1, 4, 5];
//     heapify1(nums);
//     console.log(nums);
//
//     nums = [3, 2, 1, 4, 5];
//     heapify2(nums);
//     console.log(nums);
// };
// main();
