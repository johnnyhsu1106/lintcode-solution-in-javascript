const search = (nums, target) => {

    if (nums === undefined || nums.length == 0 || target === undefined) {
        return -1
    }
    let start = 0
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target <= nums[mid]) {
                end = mid
            } else {
                start = mid;
            }
        }
        else {
            if (nums[mid] <= target && target <= nums[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1
};



const main = () => {
    let nums = [4, 5, 6, 7, 0, 1, 2];
    let target = 7;
    console.log(search(nums, target));
}
main();
