const { areEquals } = require("./helpers.js");

test("Checks if two arrays are Equals", () => {
	expect(areEquals([1, 2, 3], [1, 3, 2])).toBe(true);
});

test("Checks if two array not empty", () => {
	expect(areEquals([], [])).toBe(false);
});

test("Checks function crash if input aren not arrays", () => {
	expect(areEquals(true, 3.45)).toBe(false);
});
