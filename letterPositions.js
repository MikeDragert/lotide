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

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length;index++) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]] === undefined) {
        results[sentence[index]] = [];
      }
      results[sentence[index]].push(index);
    }
  }
  return results;
}
let positions = letterPositions("hell o");

assertArraysEqual(positions.h, [0]);
assertArraysEqual(positions.e, [1]);
assertArraysEqual(positions.l, [2,3]);
assertArraysEqual(positions.o, [5]);
