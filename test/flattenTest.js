const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] if given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 7, 8, 9, 5, 6] if given [1, 2, [3, 7, 8, 9], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 7, 8, 9], 5, [6]]),[1, 2, 3, 7, 8, 9, 5, 6]);
  });
  it("should return [1, 2, 5, 6] if given [1, 2, [], 5, [6]])", () => {
    assert.deepEqual(flatten([1, 2, [], 5, [6]]),[1, 2, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] if given [[1, 2], [3, 4, 5], [6]]", () => {
    assert.deepEqual(flatten([[1, 2], [3, 4, 5], [6]]),[1, 2, 3, 4, 5, 6]);
  });
  it("should return [] if given []", () => {
    assert.deepEqual(flatten([]),[]);
  });
  it("should return [6] if given [6]", () => {
    assert.deepEqual(flatten(6), [6]);
  });
});