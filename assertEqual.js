// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: %o === %o", actual, expected);
  } else {
    console.log("🛑🛑🛑 Asertion Failed: %o !== %o", actual, expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs","Bootcamp");
assertEqual("MikeIsAwesome","MikeIsAwesome");
assertEqual(1,1);
assertEqual(10, 5.6);
assertEqual(4, "4");
