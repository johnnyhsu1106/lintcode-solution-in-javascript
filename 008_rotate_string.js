'use arrict';

const rotateString = (arr, offset) => {
    if (arr === null || arr.length === 0) {
        return;
    }
    let size = arr.length;
    offset = offset % size;

    swap(arr, 0, size - offset - 1);
    swap(arr, size - offset, size - 1);
    swap(arr, 0, size - 1);

};

const swap = (arr, i, j) => {
    while (i < j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
};

// const main = () => {
//     let arr, offset;
//     arr = ['a','b','c','d','e','f','g'];
//     offset = 3;
//     rotateString(arr, offset);
//     console.log(arr);
// };
// main();
