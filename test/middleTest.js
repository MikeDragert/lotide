const middle = require('../index').middle;
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns and empty array when given and empty array", () => {
    assert.deepStrictEqual(middle([]), []);
  });
  it("returns an empty array when given [1]", () => {
    assert.deepStrictEqual(middle([1]), []);
  });
  it("returns an empty array when given [1,2]", () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });
  it("returns the middle two for an even numbered array", () => {
    assert.deepStrictEqual(middle([1,2,3,4]), [2, 3]);
  });
  it("returns the middle value for an odd numbered array", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns [3, 4] for [1,2,3,4,5,6]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5,6]), [3, 4]);
  });
  it("returns [4] fpr [1,2,3,4,5,6,7]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
});