function capitalize(input) {
    if (typeof input != 'string') {
        throw new TypeError('Argument must be a string')
    }
    
    return input.charAt(0).toUpperCase() + input.slice(1);
}

module.exports = capitalize;
