'use strict';


const plusOne = (digits) => {
    if (digits === null || digits.length === 0) {
        return digits;
    }
    let carry = 1;
    let size = digits.length;

    for (let i = size - 1; i >= 0; i--) {
        let total = digits[i] + carry;
        digits[i] = total % 10;
        carry = Math.floor(total / 10);
    }
    if (carry > 0) {
        digits.splice(0, 0, carry);
    }
    return digits
};


// const main = () => {
//     let digits
//     digits = [1,2,3];
//     console.log(plusOne(digits));
//
//     digits = [9,9,9];
//     console.log(plusOne(digits));
// };
// main();
