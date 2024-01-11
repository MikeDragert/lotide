// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const takeUntil = function(array, callback) {
  if (!Array.isArray(array)) {
    return [];
  }
  let returnArray = [];
  for (const value of array) {
    if (callback(value)) {
      return returnArray;
    } else {
      returnArray.push(value);
    }
  }
  return returnArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood']);

assertArraysEqual(takeUntil([], x => x === ','),[]);
assertArraysEqual(takeUntil(undefined, x => x === ','),[]);
assertArraysEqual(takeUntil([1,2,3,4,5,6], x => x == '1'),[]);  //only 2 == by design
assertArraysEqual(takeUntil([1,2,3,4,5,6], x => x >= 100),[1,2,3,4,5,6]);