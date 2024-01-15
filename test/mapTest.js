const map = require("../map");
const assert = require("chai").assert;
const words = ["ground", "control", "to", "major", "tom"];
describe("#map", () => {
  it(`should return ["g", "c", "t", "m", "t"] if given word => word[0]`, () => {
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it(`should return an empty array if given an empty array to start with`, () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
});