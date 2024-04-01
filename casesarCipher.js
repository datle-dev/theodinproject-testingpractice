function caesarCipher(input, factor) {
    const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const punctuation = [',', '.', '!', '?']
    
    let shifted = '';

    if (typeof factor != 'number') {
        throw new TypeError('Shift factor must be a number');
    }

    if (!Number.isInteger(factor)) {
        throw new Error('Shift factor must be an integer');
    }

    if (factor < 0) {
        throw new RangeError('Shift factor must be greater than or equal to 0');
    }

    const shiftLower = (input, factor) => {
        if (input.length >= 26) {
            factor = factor % 26;
        }
        const matchIndex = lowerCaseLetters.indexOf(input);
        let shiftedIndex = matchIndex + factor;
        if (shiftedIndex >= 26) {
            shiftedIndex = shiftedIndex % 26;
        }
        return lowerCaseLetters[shiftedIndex]
    }

    const shiftUpper = (input, factor) => {
        if (input.length >= 26) {
            factor = factor % 26;
        }
        const matchIndex = upperCaseLetters.indexOf(input);
        let shiftedIndex = matchIndex + factor;
        if (shiftedIndex >= 26) {
            shiftedIndex = shiftedIndex % 26;
        }
        return upperCaseLetters[shiftedIndex]
    }
    
    const shiftPunctuation = (input, factor) => {
        if (input.length >= 4) {
            factor = factor % 4;
        }
        const matchIndex = punctuation.indexOf(input);
        let shiftedIndex = matchIndex + factor;
        if (shiftedIndex >= 4) {
            shiftedIndex = shiftedIndex % 4;
        }
        return punctuation[shiftedIndex]
    }

    for (let i = 0; i < input.length; i++) {
        if (lowerCaseLetters.includes(input[i])) {
            shifted += shiftLower(input[i], factor);
        } else if (upperCaseLetters.includes(input[i])) {
            shifted += shiftUpper(input[i], factor);
        } else if (punctuation.includes(input[i])) {
            shifted += shiftPunctuation(input[i], factor);
        } else {
            shifted += input[i];
        }
    }

    return shifted;
}

module.exports = caesarCipher;
