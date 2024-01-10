// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence){
  let count = {};
  for (const letter of sentence) {
    if (letter !== ' '){
        count[letter] = count[letter] ? count[letter] + 1 : 1;
    }
  }
  return count;
}


// TEST CODE
// assertEqual("Lighthouse Labs","Bootcamp");
// assertEqual("MikeIsAwesome","MikeIsAwesome");
// assertEqual(1,1);
// assertEqual(10, 10.1);
// assertEqual(10, 5);
// assertEqual(4, "4");

console.log(countLetters("lighthouse in the house"));
console.log(countLetters(""));


