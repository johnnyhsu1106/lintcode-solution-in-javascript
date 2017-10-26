'use strict';

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const insert = (intervals, newInterval) =>  {
    let result = [];
    let insertPosition = 0;

    for (let interval of intervals) {
        if (interval.end < newInterval.start) {
            result.push(interval);
            insertPosition++;
        } else if (interval.start > newInterval.end) {
            result.push(interval);
        } else {
            newInterval.start = Math.min(newInterval.start, interval.start);
            newInterval.end = Math.max(newInterval.end, interval.end);
        }
    }
    result.splice(insertPosition, 0, newInterval);

    return result;
};


// const main = () => {
//     let intervals, newInterval;
//     intervals = [new Interval(1,3), new Interval(6, 9)];
//     newInterval = new Interval(2,5);
//     console.log(insert(intervals, newInterval))
// };
// main();
