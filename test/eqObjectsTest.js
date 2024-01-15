const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  const shirtObject = { color: ["red", "blue"], size: "medium"};
  const anotherShirtObject = {size:"medium", color: ["red", "blue"]};
  const longSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleevelength: "long"};
  const shirtOneColourObject = { color: ["red"], size: "medium"};
  const shirtNoArrayObject = { color: "red", size: "medium"};
  const shortSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleevelength: "short"};

  it("should return true shirt and anothershirt are the same just in different order", () => {
    assert.equal((eqObjects(shirtObject, anotherShirtObject)), true);
  });
  it("should return false as longSleeveShirt has an extra property over shirt", () => {
    assert.equal(eqObjects(shirtObject, longSleeveShirtObject),false);
  });
  it("should return false as shirtOneColour has only one color while shirt has 2", () => {
    assert.equal(eqObjects(shirtObject, shirtOneColourObject),false);
  });
  it("should return false as shirtNoArray has a red color note part of an array, while shirt has 2", () => {
    assert.equal(eqObjects(shirtObject, shirtNoArrayObject),false);
  });
  it("should return false", () => {
    assert.equal(eqObjects(shortSleeveShirtObject, shirtNoArrayObject),false);
  });
});