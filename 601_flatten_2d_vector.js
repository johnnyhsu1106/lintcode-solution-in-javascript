'use strict';

class Vevctor2D {
    constructor(vec2d) {
        this.x = 0;
        this.y = 0;
        this.vec2d = vec2d;
    }
    next() {
        if (this.hasNext()) {
            let num =  this.vec2d[this.x][this.y];
            this.y++;
            if (this.y === this.vec2d[this.x].length) {
                this.y = 0;
                this.x++;
            }
            return num;
        }
        return false;
    }
    hasNext() {
        return this.x < this.vec2d.length && this.y < this.vec2d[this.x].length;
    }
};

// const main = () => {
//     let vector2D = [[1,2],[3],[4,5,6]];
//     let vec2d = new Vevctor2D(vector2D);
//     console.log(vec2d.next());
//     console.log(vec2d.next());
//     console.log(vec2d.next());
//     console.log(vec2d.next());
//     console.log(vec2d.next());
//     console.log(vec2d.next());
//     console.log(vec2d.next());
// };
// main();
