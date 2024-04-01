const analyzeArray = require('./analyzeArray');

test('basic array', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3,
    });
});

test('unsorted array with negative number', () => {
    expect(analyzeArray([77, 409, -20, 91, 622])).toEqual({
        average: 235.8,
        min: -20,
        max: 622,
        length: 5,
    });
});

test('array with only 1 element', () => {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1,
    });
});

test('empty array throws error', () => {
    expect(() => {
        analyzeArray([]);
    }).toThrow(Error);
});

test('array with non-number elements throws error', () => {
    expect(() => {
        analyzeArray([true, 'string', ['sub', 'array'], 1, {dummy: 1, object: 2}]);
    }).toThrow(Error);
});
