
const without = function(arr, excludeArr) {
  let returnArray = [];
  for (const value of arr) {
    if (!excludeArr.includes(value)) {
      returnArray.push(value);
    }
  }
  return returnArray;
};

module.exports = without;