const tail = require('../index').tail;
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [5, 6] for [5, 6, 7]", () => {
    let arr = [5,6,7];
    let tailArr = tail(arr);
    assert.deepStrictEqual(tailArr, [6, 7]);
  });
  it("returns an empty array for [1]", () => {
    assert.deepStrictEqual(tail([1]), []);
  });
  it("returns empty array when given an empty array", () => {
    assert.deepStrictEqual(tail([]), []);
  });
  it(`returns ["Hello", "Lighthouse", "Labs"] when given ["Hello", "Lighthouse", "Labs"]")`, () => {
    let arr = ["Hello", "Lighthouse", "Labs"];
    let tailArr = tail(arr);
    assert.deepStrictEqual(tailArr, ["Lighthouse", "Labs"]);
  });
});