const countLetters = require('../countLetters');
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("should return proper counts of each letter", () => {
    
    let count = countLetters("lighthouse in the house");
    assert.equal(count.l, 1);
    assert.equal(count.i, 2);
    assert.equal(count.g, 1);
    assert.equal(count.h, 4);
    assert.equal(count.t, 2);
    assert.equal(count.o, 2);
    assert.equal(count.u, 2);
    assert.equal(count.s, 2);
    assert.equal(count.e, 3);
    assert.equal(count.n, 1);
    assert.equal(count[" "], undefined);

  });
  it("should return empty object if given empty string", () => {
    let count = countLetters("");
    assert.equal(Object.keys(count).length,0);
  });
});
