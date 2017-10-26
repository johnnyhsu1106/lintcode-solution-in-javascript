'use strict';

const guess = (number) => {
    const answer = 3;
    if (number > answer) { return -1 }
    else if (number < answer) { return 1 }
    return 0;

}
const guessNumber = (n) => {
    let start = 1, end = n;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === 1) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (guess(start) === 0) {
        return start;
    }
    if (guess(end) === 0) {
        return end;
    }
};


// const main = () => {
//     let n = 10;
//     console.log(guessNumber(n));
// };
// main();
