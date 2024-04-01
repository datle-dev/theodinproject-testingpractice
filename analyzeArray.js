function analyzeArray(arr) {
    if (arr.length === 0) {
        throw new Error('Argument cannot be an empty array');
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            throw new TypeError('Array must only contain numbers');
        }
    }

    let average;
    let min;
    let max;
    let length;

    min = Math.min(...arr);
    max = Math.max(...arr);
    length = arr.length;
    average = arr.reduce((acc, cur) => acc + cur) / length;

    return {
        average: average,
        min: min,
        max: max,
        length: length,
    }
}

module.exports = analyzeArray;
