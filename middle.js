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

const middle = function(arr) {
  if ((!arr) || (arr.length < 3)) return [];
  let middleIndex = Math.floor(arr.length / 2) - 1;
  let endIndex = middleIndex + 2;
  if (arr.length % 2 === 1) {
    middleIndex++;
  }
  return arr.slice(middleIndex,endIndex);
};

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
