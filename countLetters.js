const countLetters = function(sentence) {
  let count = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      count[letter] = count[letter] ? count[letter] + 1 : 1;
    }
  }
  return count;
};

module.exports = countLetters;