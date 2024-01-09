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

const without = function(arr, excludeArr) {
  let returnArray = [];
  for (const value of arr) {
    if (!excludeArr.includes(value)) {
      returnArray.push(value);
    }
  }
  return returnArray;
};

// TEST CODE
let startArray = [1, 2, 3];
let filteredArray = without([1, 2, 3], [1]);
assertArraysEqual(startArray, [1, 2, 3]);
assertArraysEqual(filteredArray, [2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["1", "2", "3"],[]),["1", "2", "3"]);
assertArraysEqual(without(["1", "2", "3"],["1", "2", "3"]),[]);