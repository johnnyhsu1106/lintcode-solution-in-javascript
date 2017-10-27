'use strict';


// Set.prototype.isEqual = function(setB){
//     for (let element of setB) {
//         if (! this.has(element)) {
//             return false;
//         }
//     }
//     for (let element of this) {
//         if ( ! setB.has(element)) {
//             return false;
//         }
//     }
//     return true;
//
// };
//
//
// Set.prototype.isSubset = function(setB){
//     for (let element of this) {
//         if ( ! setB.has(element)) {
//             return false;
//         }
//     }
//     return true;
// };
//
//
// const repeatedString = (A, B) => {
//
//     let sizeA = A.length, sizeB = B.length;
//     let setA = new Set(A), setB = new Set(B);
//     let minTimes;
//
//     if (sizeA >= sizeB) {
//         if (! setB.isSubset(setA)) {
//             return -1;
//         }
//
//     } else {
//         if (! setA.isEqual(setB)) {
//             return -1;
//         }
//
//     }
//     if (sizeA <= sizeB) {
//         if (sizeB % sizeA === 0) {
//             minTimes = sizeB / sizeA;
//         } else {
//             minTimes = Math.floor(sizeB / sizeA)  + 1
//         }
//     } else {
//         minTimes = 1;
//     }
//
//     while (true) {
//         A = multiplyString(A, minTimes);
//         if (A.includes(B)) {
//             return minTimes;
//         }
//         minTimes++;
//     }
// };
//
// const multiplyString = (string, times) => {
//     let result = '';
//     for (let i = 0; i < times; i++) {
//         result = result.concat(string);
//     }
//     return result;
// };


// const main = () => {
//     let A, B;
//     A = "abcabcabcabc";
//     B = 'abac';
//     console.log(repeatedString(A, B));
//
// };
// main();
