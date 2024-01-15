const findKey = require("../findKey");
const assert = require("chai").assert;

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("should return noma if given stars === 2", () => {
    let foundKey = findKey(testObject, x => x.stars === 2);
    assert.equal(foundKey, "noma");
  });
  it("should return Akaleri if given stars === 3", () => {
    let foundKey = findKey(testObject, x => x.stars === 3);
    assert.equal(foundKey, "Akaleri");
  });
  it("should return blank if given stars === 0", () => {
    let foundKey = findKey(testObject, x => x.stars === 0);
    assert.equal(foundKey, "");
  });
  it("should return blank if given a key that doesn't exist", () => {
    let foundKey = findKey(testObject, x => x.dud === 0);
    assert.equal(foundKey, "");
  });
});