const findKeyByValue = function(objectToSearch, valueToFind) {
  const pairs = Object.entries(objectToSearch);
  for (const [key, value] of pairs) {
    if (value === valueToFind) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;