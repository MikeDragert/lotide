// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
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
assertEqual((eqObjects(shirtObject, anotherSHirtObject)), true);
const longSleeveSHirtObject = { size: "medium", color: ["red", "blue"], sleevelength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveSHirtObject),false);
const shirtOneColourObject = { color: ["red"], size: "medium"};
assertEqual(eqObjects(shirtObject, shirtOneColourObject),false);
const shirtNoArrayObject = { color: "red", size: "medium"};
assertEqual(eqObjects(shirtObject, shirtNoArrayObject),false);