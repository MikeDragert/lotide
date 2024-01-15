const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("letterPositions", () => {
  it(`should return {h: [0], e: [1], l: [2, 3], o: [5]}, [5]] if given "hell o"`, () => {
    let positions = letterPositions("hell o");
    assert.deepEqual(positions, {h: [0],
      e: [1],
      l: [2, 3],
      o: [5]});
  });
});