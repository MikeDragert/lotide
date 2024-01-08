// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs","Bootcamp");
assertEqual("MikeIsAwesome","MikeIsAwesome");
assertEqual(1,1);
assertEqual(10, 10.1);
assertEqual(10, 5);
assertEqual(4, "4");
