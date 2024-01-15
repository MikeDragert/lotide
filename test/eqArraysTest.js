//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should return true [1, 2, 3] and [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  it("should return false [1, 2, 3] and [3, 2, 1]", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]),false);
  });
  it(`should return true ["1", "2", "3"] and ["1", "2", "3"]`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
  });
  it(`should return false ["1", "2", "3"] and ["1", "2", 3]`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
  });
  it("should return false [] and [1, 2, 3]", () => {
    assert.equal(eqArrays([], [1, 2, 3]),false);
  });
  it("should return true [] and []", () => {
    assert.equal(eqArrays([], []),true);
  });
});