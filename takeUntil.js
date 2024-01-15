const takeUntil = function(array, callback) {
  if (!Array.isArray(array)) {
    return [];
  }
  let returnArray = [];
  for (const value of array) {
    if (callback(value)) {
      return returnArray;
    } else {
      returnArray.push(value);
    }
  }
  return returnArray;
};

module.exports = takeUntil;