// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let finalCount = {};
  for(const value of allItems){
    if  (itemsToCount[value]) {
      finalCount[value] = finalCount[value] ? finalCount[value] + 1 : 1;
    }
  }
  return finalCount;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

result1 = countOnly(firstNames, { });
assertEqual(result1["Jason"], undefined);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], undefined);
assertEqual(result1["Agouhanna"], undefined);