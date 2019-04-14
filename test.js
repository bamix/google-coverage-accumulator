var { calculate, invert } = require('./calculator');

test('calculate 1', () => {
    expect(calculate([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
});

test('calculate 2', () => {
    expect(calculate([[1, 3], [2, 4]])).toEqual([[1, 4]]);
});

test('calculate 3', () => {
    expect(calculate([[1, 3], [3, 7]])).toEqual([[1, 7]]);
});

test('invert 1', () => {
    expect(invert([[0, 2], [3, 5]], 5)).toEqual([[2, 3]]);
});

test('invert 2', () => {
    expect(invert([[1, 2], [3, 5]], 5)).toEqual([[0, 1], [2, 3]]);
});

test('invert 3', () => {
    expect(invert([[0, 2], [3, 5]], 7)).toEqual([[2, 3], [5, 7]]);
});

test('invert 4', () => {
    expect(invert([[0, 5]], 5)).toEqual([]);
});