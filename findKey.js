// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return "";
};

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


let foundKey = findKey(testObject, x => x.stars === 2);
assertEqual(foundKey, "noma");
foundKey = findKey(testObject, x => x.stars === 3);
assertEqual(foundKey, "Akaleri");
foundKey = findKey(testObject, x => x.stars === 0);
assertEqual(foundKey, "");
foundKey = findKey(testObject, x => x.dud === 0);
assertEqual(foundKey, "");