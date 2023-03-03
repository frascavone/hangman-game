const { areEquals } = require('./helpers.js');

test('Checks if two arrays are Equals', () => {
  expect(areEquals([1, 2, 3], [1, 3, 2])).toBe(true);
});
