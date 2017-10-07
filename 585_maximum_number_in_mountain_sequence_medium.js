const mountainSequence = (nums) => {
    let start = 0, end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < nums[mid + 1]) {
            start = mid;
        }else {
            end = mid;
        }
    }
    if (nums[start] > nums[end]) {
        return nums[start];
    }
    return nums[end];
};



// const main = () => {
//     let nums;
//     nums = [1, 2, 4, 8, 6, 3];
//     console.log(mountainSequence(nums) == 8);
//
//     nums = [10, 9, 8, 7];
//     console.log(mountainSequence(nums) == 10);
// };
// main();
