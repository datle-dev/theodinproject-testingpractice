const capitalize = require('./capitalize');

test('capitalize first letter of input string', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});

test('string of length 1 still works', () => {
    expect(capitalize('a')).toBe('A');
});

test('string of all capitals returns the same', () => {
    expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD');
});

test('string of numbers returns the same', () => {
    expect(capitalize('123')).toBe('123');
});

test('string of special characters returns the same', () => {
    expect(capitalize('!@#')).toBe('!@#');
});

test('empty input returns empty string', () => {
    expect(capitalize('')).toBe('');
});

test('non-string input (Number) throws TypeError', () => {
    expect(() => {
        capitalize(1);
    }).toThrow(TypeError);
});

test('non-string input (Boolean) throws TypeError', () => {
    expect(() => {
        capitalize(true);
    }).toThrow(TypeError);
});

test('non-string input (Array) throws TypeError', () => {
    expect(() => {
        capitalize([1, 2, 3]);
    }).toThrow(TypeError);
});