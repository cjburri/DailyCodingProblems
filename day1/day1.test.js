const isSumPossible = require('./day1.js')

test('prompt question is accepted, sum is 17', () => {
    expect(isSumPossible([10,15,3,7], 17)).toBe(true);
});

test('sanity check on prompt question, sum is 18', () => {
    expect(isSumPossible([10,15,3,7], 18)).toBe(true);
});

test('forcing false on prompt question, sum is 19', () => {
    expect(isSumPossible([10,15,3,7], 19)).toBe(false);
});

test('sanity check on forcing false on prompt question, sum is 21', () => {
    expect(isSumPossible([10,15,3,7], 21)).toBe(false);
});

test('testing a true output with negative numbers in list', () => {
    expect(isSumPossible([10, -3, 5, -50], 7)).toBe(true);
});

test('testing a false output with negative numbers in list', () => {
    expect(isSumPossible([10, -3, 5, -50], 21)).toBe(false);
});

test('testing a true output with negative target', () => {
    expect(isSumPossible([10, -3, 5, -50], -40)).toBe(true);
});

test('testing a false output with negative target', () => {
    expect(isSumPossible([10, -3, 5, -50], -1)).toBe(false);
});

test('testing empty set', () => {
    expect(isSumPossible([], 1)).toBe(false);
});
