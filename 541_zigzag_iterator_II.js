class ZigzagIterator2 {

    constructor(vecs) {
        this.queue = [];
        for (let vec of vecs) {
            if (vec.length !== 0) {
                this.queue.push(vec);
            }
        }
    }

    next() {
        if (this.hasNext()) {
            let v = this.queue.shift();
            let value = v.shift();
            if (v.length !== 0) {
                this.queue.push(v);
            }
            return value;
        }
    }

    hasNext() {
        return this.queue.length !== 0;
    }
}



// const main = () => {
//     let zig, v1, v2, result;
//     result = [];
//     vecs = [[1,2,3],
//             [4,5,6,7],
//             [8,9]]
//     zig = new ZigzagIterator2(vecs);
//
//     while (zig.hasNext()) {
//         result.push(zig.next());
//     }
//     console.log(result);
//
//
//     result = [];
//     vecs = [[ ],
//            [4,5,6,7],
//            [8,9]]
//     zig = new ZigzagIterator2(vecs);
//
//     while (zig.hasNext()) {
//         result.push(zig.next());
//     }
//     console.log(result);
// };
// main();
