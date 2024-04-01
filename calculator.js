function Calculator () {
    const add = (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            throw new TypeError('Arguments must be of type Number');
        }
        return a + b;
    };

    const subtract = (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            throw new TypeError('Arguments must be of type Number');
        }
        return a - b;
    };

    const multiply = (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            throw new TypeError('Arguments must be of type Number');
        }
        return a * b;
    };

    const divide = (a, b) => {
        if (typeof a != 'number' || typeof b != 'number') {
            throw new TypeError('Arguments must be of type Number');
        }
        return a / b;
    };

    return {
        add,
        subtract,
        multiply,
        divide,
    };
};

module.exports = Calculator;