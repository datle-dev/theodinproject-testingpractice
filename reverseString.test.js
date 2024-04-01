const reverseString = require('./reverseString');

test('reverses string', () => {
    expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test('reversing string of numbers works', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('reversing string of characters works', () => {
    expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
});

test('reversing palindrome returns the same', () => {
    expect(reverseString('racecar')).toBe('racecar');
});

test('capitalization preserved', () => {
    expect(reverseString('HeLoO wOrLd!')).toBe('!dLrOw OoLeH');
});

test('empty string returns the same', () => {
    expect(reverseString('')).toBe('');
});

test('non-string input (Number) throws TypeError', () => {
    expect(() => {
        reverseString(1);
    }).toThrow(TypeError);
});

test('non-string input (Boolean) throws TypeError', () => {
    expect(() => {
        reverseString(true);
    }).toThrow(TypeError);
});

test('non-string input (Array) throws TypeError', () => {
    expect(() => {
        reverseString([1, 2, 3]);
    }).toThrow(TypeError);
});