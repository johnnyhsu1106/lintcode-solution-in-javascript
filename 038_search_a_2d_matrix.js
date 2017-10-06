'use strict';
const searchMatrix = (matrix, target) => {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return 0
    }
    let count = 0;
    let m = matrix.length, n = matrix[0].length;
    let x = m - 1, y = 0;

    while (x >= 0 && y < n) {
        if (matrix[x][y] < target) {
            y++;
        } else if (matrix[x][y] > target) {
            x--;
        } else {
            count++;
            x--;
            y++;
        }
    }
    return count;
}


// const main = () => {
//     let matrix;
//     let target;
//     matrix = [[1, 3, 5, 7],
//               [2, 4, 7, 8],
//               [3, 5, 9, 10]];
//     target = 3;
//
//     console.log(searchMatrix(matrix, target));
// };
// main();
