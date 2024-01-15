const takeUntil = require("../takeUntil");
const assert = require("chai").assert;
describe("#takeUntil", () => {
  it(`shouuld return [1,2,5,7,2] when given [1, 2, 5, 7, 2, -1, 2, 4, 5]`, () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);
  });
  it(`should return ["I've", "been", "to", "Hollywood"] when given ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]`, () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood']);
  });
  it(`should return empty array when given an empty array`, () => {
    assert.deepEqual(takeUntil([], x => x === ','),[]);
  });
  it(`should return an empty array when given "undefined"`, () => {
    assert.deepEqual(takeUntil(undefined, x => x === ','),[]);
  });
  it(`should return an empty array when the first element in the array is specified `, () => {
    assert.deepEqual(takeUntil([1,2,3,4,5,6], x => x === 1),[]);
  });
  it(`should return the whole array if a value specified is not found.`, () => {
    assert.deepEqual(takeUntil([1,2,3,4,5,6], x => x >= 100),[1,2,3,4,5,6]);
  });
});

