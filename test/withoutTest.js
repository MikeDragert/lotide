const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  let startArray = [1, 2, 3];
  let filteredArray = without([1, 2, 3], [1]);

  it(`should not change the starting array`, () => {
    assert.deepEqual(startArray, [1, 2, 3]);
  });
  it(`should return [2, 3] when removing the [1]`, () => {
    assert.deepEqual(filteredArray, [2, 3]);
  });
  it(`should return [2, 3] when removing the [1]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`should return ["1", "2"] when removing [1, 2, "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
  });
  it(`should return ["1", "2", "3"] when removing []`, () => {
    assert.deepEqual(without(["1", "2", "3"],[]),["1", "2", "3"]);
  });
  it(`should`, () => {
    assert.deepEqual(without(["1", "2", "3"],["1", "2", "3"]),[]);
  });
});
