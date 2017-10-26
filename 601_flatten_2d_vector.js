'use strict';


class Vector2D {
    constructor(vec2d) {
        this.vec2d = vec2d;
        this.x = 0;
        this.y = 0;
    }
    next() {
        if (this.hasNext()) {
            let value = this.vec2d[this.x][this.y];
            this.y++;
            if (this.y >= this.vec2d[this.x].length) {
                this.y = 0;
                this.x++;
            }
            return value;
        }
    }
    hasNext() {
        return this.x < this.vec2d.length && this.y < this.vec2d[x].length;
    }
}
