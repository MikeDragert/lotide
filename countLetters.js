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
let count = countLetters("lighthouse in the house");
assertEqual(count.l, 1);
assertEqual(count.i, 2);
assertEqual(count.g, 1);
assertEqual(count.h, 4);
assertEqual(count.t, 2);
assertEqual(count.o, 2);
assertEqual(count.u, 2);
assertEqual(count.s, 2);
assertEqual(count.e, 3);
assertEqual(count.n, 1);
assertEqual(count[" "], undefined);

count = countLetters("");
assertEqual(Object.keys(count).length,0);