//*****  NOTE:  I had originally done a recursive deep flatten because I didn't read the instructions properly.  Decided to keep it because it works
const deepFlatten = function(toBeFlattened) {
  let flattened = [];
  if (Array.isArray(toBeFlattened)) {
    for (let value of toBeFlattened) {
      if (Array.isArray(value)) {
        flattened = flattened.concat(deepFlatten(value));
      } else {
        flattened.push(value);
      }
    }
  } else {
    flattened.push(toBeFlattened);
  }
  return flattened;
};

module.exports = deepFlatten;