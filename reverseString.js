function reverseString(input) {
    if (typeof input != 'string') {
        throw new TypeError('Argument must be a string');
    }

    let reversed = '';

    for (let i = 0; i < input.length; i++) {
        reversed = input.at(i) + reversed;
    }

    return reversed;
}

module.exports = reverseString;
