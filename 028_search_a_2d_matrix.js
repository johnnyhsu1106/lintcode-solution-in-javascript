const searchMatrix = (matrix, target) => {
    // edge case
    if (matrix === null || matrix.length === 0 || matrix[0].length ===0) {
        return false;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    let start = 0, end = m * n - 1;

    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        let x = Math.floor(mid / n), y =  mid % n;
        if (matrix[x][y] == target) {
            return true
        } else if (matrix[x][y] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    x = Math.floor(start / n), y = start % n ;
    if (matrix[x][y] === target) {
        return true;
    }
    x = Math.floor(end / n), y = end % n ;
    if (matrix[x][y] === target) {
        return true
    }
    return false;
};
