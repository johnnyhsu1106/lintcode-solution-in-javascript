'use strict';

const searchBigSortedArray = (reader, target) => {
    let k = 1;
    while (reader.get(k) <= target) {
        k = k * 2;
    }
    let start = Math.floor(k / 2);
    let end = k;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (reader.get(mid) < target) {
            start = mid;
        } else if (reader.get(mid) > target) {
            end = mid;
        } else {
            return mid;
        }
    }
    if (reader.get(start) === target) {
        return start;
    }
    if (reader.get(end) === target) {
        return end;
    }
    return -1;
};
