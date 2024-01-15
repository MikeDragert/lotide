const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]] === undefined) {
        results[sentence[index]] = [];
      }
      results[sentence[index]].push(index);
    }
  }
  return results;
};

module.exports = letterPositions;