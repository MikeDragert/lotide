const flatten = function(toBeFlattened) {
  let flattened = [];
  if (Array.isArray(toBeFlattened)) {
    for (let value of toBeFlattened) {
      if (Array.isArray(value)) {
        flattened = flattened.concat(value);
      } else {
        flattened.push(value);
      }
    }
  } else {
    flattened.push(toBeFlattened);
  }
  return flattened;
};

module.exports = flatten;