class ZigzagIterator1 {

    constructor(v1, v2) {
        this.queue = [];
        if (v1.length !== 0) {
            this.queue.push(v1);
        }
        if (v2.length !== 0) {
            this.queue.push(v2);
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

class ZigzagIterator2 {

    construtor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
        this.idx1 = 0;
        this.idx2 = 0;
    }

    next() {
        if (this.hasNext) {
            let num;
            if (this.idx1 < this.v1.length && this.idx2 < this.v2.length) {
                if (this.idx1 === this.idx2) {
                    num = this.v1[this.idx1];
                    this.idx1++;
                } else {
                    num = this.v2[this.idx2];
                    this.idx2++;
                }

            }
            if (this.idx1 < this.v1.length) {
                num = this.v1[this.idx1];
                this.idx1++;
            }
            if (this.idx2 < this.v2.length) {
                num = this.v2[this.idx2];
                this.idx2++;
            }
        }
    }

    hasNext() {
        return this.idx1 < this.v1.length || this.idx2 < this.v2.length;
    }
}



// const main = () => {
//     let zig, v1, v2, result;
//     result = [];
//     v1 = [1, 2];
//     v2 = [3, 4, 5, 6];
//     zig = new ZigzagIterator1(v1, v2);
//
//     while (zig.hasNext()) {
//         result.push(zig.next());
//     }
//     console.log(result);
//
//
//     result = [];
//     v1 = [1, 2];
//     v2 = [3, 4, 5, 6];
//     zig = new ZigzagIterator1(v1, v2);
//
//     while (zig.hasNext()) {
//         result.push(zig.next());
//     }
//     console.log(result);
// };
// main();
