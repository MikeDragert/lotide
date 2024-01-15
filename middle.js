const eqArrays = require('./eqArrays');

const middle = function(arr) {
  if ((!arr) || (arr.length < 3)) return [];
  let middleIndex = Math.floor(arr.length / 2) - 1;
  let endIndex = middleIndex + 2;
  if (arr.length % 2 === 1) {
    middleIndex++;
  }
  return arr.slice(middleIndex,endIndex);
};

module.exports = middle;