const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("should return proper counts for passed in names, including undefined if not found", () => {
    let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result1["Jason"], 1);
    assert.equal(result1["Karima"], undefined);
    assert.equal(result1["Fang"], 2);
    assert.equal(result1["Agouhanna"], undefined);
  });
  it("should return undefined for everything if given an empty object", () => {
    let result1 = countOnly(firstNames, { });
    assert.equal(result1["Jason"], undefined);
    assert.equal(result1["Karima"], undefined);
    assert.equal(result1["Fang"], undefined);
    assert.equal(result1["Agouhanna"], undefined);
  });
});