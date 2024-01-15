const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it(`should return "The Wire" for "drama"`, () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`should return "The Expanse" for "sci_fi"`, () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
  it(`should return undefined for ""`, () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });
  it(`should return undefined for a show that is not in the given object`, () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});