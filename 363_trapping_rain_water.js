'use strict';

const trap = (heights) => {
    if (heights === null || heights.length < 2) {
        return 0
    }
    let left = 0, right = heights.length - 1;
    let leftHeight = heights[left];
    let rightHeight = heights[right];
    let result = 0;

    while (left < right) {
        if (leftHeight < rightHeight) {
            left++;
            if (leftHeight > heights[left]) {
                result += leftHeight - heights[left];
            } else {
                leftHeight = heights[left];
            }
        } else {
            right--;
            if (rightHeight > heights[right]) {
                result += rightHeight - heights[right];
            } else {
                rightHeight = heights[right];
            }
        }
    }
    return result;
};


// const main = () => {
//     let heights;
//     heights = [0,1,0,2,1,0,1,3,2,1,2,1];
//     console.log(trap(heights));
// };
// main();
