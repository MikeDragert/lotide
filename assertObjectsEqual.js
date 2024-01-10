// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};


// TEST CODE
const shirtObject = { color: ["red", "blue"], size: "medium"};
const anotherSHirtObject = {size:"medium", color: ["red", "blue"]};
assertObjectsEqual(shirtObject, anotherSHirtObject);
// const longSleeveSHirtObject = { size: "medium", color: ["red", "blue"], sleevelength: "long"};
// assertObjectsEqual(shirtObject, longSleeveSHirtObject);
// const shirtOneColourObject = { color: ["red"], size: "medium"};
// assertObjectsEqual(shirtObject, shirtOneColourObject);
// const shirtNoArrayObject = { color: "red", size: "medium"};
// assertObjectsEqual(shirtObject, shirtNoArrayObject)
// const shortSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleevelength: "short"};
// assertObjectsEqual(shortSleeveShirtObject, shirtNoArrayObject);
