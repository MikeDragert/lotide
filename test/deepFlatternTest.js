//*****  NOTE:  I had originally done a recursive deep flatten because I didn't read the instructions properly.  Decided to keep it because it works
const deepFlatten = require("../deepFlatten");
const assert = require("chai").assert;

describe("#deepFlatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] if given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(deepFlatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 7, 8, 9, 5, 6] if given [1, 2, [3, [7,[8,9]]], 5, [6]]", () => {
    assert.deepEqual(deepFlatten([1, 2, [3, [7,[8,9]]], 5, [6]]),[1, 2, 3, 7, 8, 9, 5, 6]);
  });
  it("should return [1, 2, 5, 6] if given [1, 2, [], 5, [6]])", () => {
    assert.deepEqual(deepFlatten([1, 2, [], 5, [6]]),[1, 2, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] if given [[1, 2], [3, 4, 5], [6]]", () => {
    assert.deepEqual(deepFlatten([[1, 2], [3, 4, 5], [6]]),[1, 2, 3, 4, 5, 6]);
  });
  it("should return [] if given []", () => {
    assert.deepEqual(deepFlatten([]),[]);
  });
  it("should return [6] if given [6]", () => {
    assert.deepEqual(deepFlatten(6), [6]);
  });
});