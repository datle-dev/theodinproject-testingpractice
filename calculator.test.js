const Calculator = require('./calculator');

calculator = Calculator();

// ================================================
// Addition
// ================================================
test('add 2 and 2 returns 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('add (-2) and (-2) returns -4', () => {
    expect(calculator.add(-2, -2)).toBe(-4);
});

test('add 1.2 and 2.4 returns 3.6', () => {
    expect(calculator.add(1.2, 2.4)).toBeCloseTo(3.6);
});


// ================================================
// Subtraction
// ================================================
test('subtract 2 from 2 returns 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtract (-2) from (-2) returns 0', () => {
    expect(calculator.subtract(-2, -2)).toBe(0);
});

test('subtract 1.2 from 2.4 returns 1.2', () => {
    expect(calculator.subtract(2.4, 1.2)).toBeCloseTo(1.2);
});


// ================================================
// Multiplication
// ================================================
test('multiply 2 by 2 returns 4', () => {
    expect(calculator.multiply(1, 0)).toBe(0);
});

test('multiply 2 by (-2) returns -4', () => {
    expect(calculator.multiply(1, 0)).toBe(0);
});

test('multiply 2 by 0 returns 0', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
});


// ================================================
// Division
// ================================================
test('divide 2 by 1 returns 2', () => {
    expect(calculator.divide(2, 1)).toBe(2);
});

test('divide 2 by 2 returns 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('divide 4 by -2 returns -2', () => {
    expect(calculator.divide(4, -2)).toBe(-2);
});

test('divide -4 by 2 returns -2', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
});

test('divide by 0 returns infinity', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
});


// ================================================
// TypeErrors
// ================================================
test('non-number (String) first argument throws TypeError', () => {
    expect(() => {
        calculator.add('hello', 1);
    }).toThrow(TypeError);
})

test('non-number (String) second argument throws TypeError', () => {
    expect(() => {
        calculator.subtract(1, 'hello');
    }).toThrow(TypeError);
})

test('non-number (Boolean) first argument throws TypeError', () => {
    expect(() => {
        calculator.multiply(true, 1);
    }).toThrow(TypeError);
})

test('non-number (Boolean) second argument throws TypeError', () => {
    expect(() => {
        calculator.divide(1, true);
    }).toThrow(TypeError);
})

test('non-number (Array) first argument throws TypeError', () => {
    expect(() => {
        calculator.add([1, 2, 3], 1);
    }).toThrow(TypeError);
})

test('non-number (Array) second argument throws TypeError', () => {
    expect(() => {
        calculator.subtract(1, [1, 2, 3]);
    }).toThrow(TypeError);
})

test('non-number arguments (Boolean, String) throws TypeError', () => {
    expect(() => {
        calculator.multiply(true, 'hello');
    }).toThrow(TypeError);
})

test('non-number arguments (String, Array) throws TypeError', () => {
    expect(() => {
        calculator.divide('hello', [1, 2, 3]);
    }).toThrow(TypeError);
})