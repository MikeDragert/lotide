// FUNCTION IMPLEMENTATION
//*****  NOTE:  I had originally done a recursive deep flatten because I didn't read the instructions properly.  Decided to keep it because it works
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

const flatten = function(toBeFlattened) {
  let flattened = [];
  if (Array.isArray(toBeFlattened)) {
    for (let value of toBeFlattened) {
      if (Array.isArray(value)) {
        flattened = flattened.concat(flatten(value));
      } else {
        flattened.push(value);
      }
    }
  } else {
    flattened.push(toBeFlattened);
  }
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, [7,[8,9]]], 5, [6]]),[1, 2, 3, 7, 8, 9, 5, 6]);
assertArraysEqual(flatten([1, 2, [], 5, [6]]),[1, 2, 5, 6]);
assertArraysEqual(flatten([[1, 2], [3, 4, 5], [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([]),[]);
assertArraysEqual(flatten(6), [6]);

