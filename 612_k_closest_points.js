'use strict';

const Heap = require('collections/heap');

class Point {
    constructor(x = 0, y= 0) {
        this.x = x;
        this.y = y;
    }
}

const kClosest = (points, origin, k) => {
    if (points.length === 0 || k === 0) {
        return [];
    }
    let result = [];
    let maxHeap = new Heap();
    for (let point of points) {
        let distance = getDistance(point, origin);
        maxHeap.push([distance, point.x, point.y]);
        if (maxHeap.length > k) {
            maxHeap.pop();
        }
    }

    let sortedMaxHeap = maxHeap.sorted(([distance1, x1, y1], [distance2, x2, y2]) => {
        let diff = distance1 - distance2;
        if (diff === 0) {
            diff = x1 - x2;
        }
        if (diff === 0) {
            diff = y1 - y2;
        }
        return diff;
    });
    for (let point of sortedMaxHeap) {
        result.push(new Point(point[1], point[2]));
    }
    return result;
};

const getDistance = (point, origin) => {
    return (point.x - origin.x) ** 2 + (point.y - origin.y) ** 2;
};


// const main = () => {
//     let points, origin, k;
//     points = [new Point(4, 6), new Point(4, 7),
//              new Point(4, 4), new Point(2, 5),
//              new Point(1, 1), new Point(-1, -1),
//              new Point(-2, 5), new Point(2, -5),
//              new Point(-1, 0), new Point(0, 1)
//             ];
//     origin = new Point(0, 0);
//     k = 6;
//     console.log(kClosest(points, origin, k));
//
// };
// main();
