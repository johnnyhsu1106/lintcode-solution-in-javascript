'use strict';

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const merge = (intervals) => {
    if (intervals === null || intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((interval1, interval2) => {
        let diff = interval1.start - interval2.start;
        if (diff === 0) {
            diff = interval1.end - interval2.end;
        }
        return diff;
    });

    let result = [intervals[0]];
    let size = intervals.length;

    for (let i = 1; i < size; i++) {
        let interval = intervals[i];
        let len = result.length;

        if(result[len - 1].end < interval.start) {
            result.push(interval);
        } else {
            result[len - 1].end = Math.max(result[len - 1].end, interval.end);
        }
    }
    return result;
};


// const main = () => {
//     let intervals;
//     intervals = [new Interval(1,3), new Interval(2,6), new Interval(8,10), new Interval(15,18)];
//
//     console.log(merge(intervals));
// };
// main();
