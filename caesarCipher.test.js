const caesarCipher = require('./casesarCipher');

test('basic lowercase cipher', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('basic uppercase cipher', () => {
    expect(caesarCipher('DEF', 1)).toBe('EFG');
});

test('wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('wrapping from Z to A', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('wrapping punctuation', () => {
    expect(caesarCipher(',.!?', 1)).toBe('.!?,');
})

test('single sentence with punctuation', () => {
    expect(caesarCipher('Hello world!', 5)).toBe('Mjqqt btwqi?');
});

test('series of sentences with capitalization and punctuation', () => {
    expect(caesarCipher(
        'Hi. My name is John. Nice to meet you! And...you are?',
        3
    )).toBe(
        'Kl, Pb qdph lv Mrkq, Qlfh wr phhw brx. Dqg,,,brx duh!'
    );
})

test('no shift returns the same', () => {
    expect(caesarCipher('Hello world!', 0)).toBe('Hello world!');
});

test('non-number shift factor throws error', () => {
    expect(() => {
        caesarCipher('Hello world!', '0');
    }).toThrow(TypeError);
});

test('non-integer shift factor throws error', () => {
    expect(() => {
        caesarCipher('Hello world!', 1.1);
    }).toThrow(Error);
});

test('negative shift factor throws error', () => {
    expect(() => {
        caesarCipher('Hello world!', -1);
    }).toThrow(RangeError);
});


