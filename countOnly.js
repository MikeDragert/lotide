const countOnly = function(allItems, itemsToCount) {
  let finalCount = {};
  for (const value of allItems) {
    if  (itemsToCount[value]) {
      finalCount[value] = finalCount[value] ? finalCount[value] + 1 : 1;
    }
  }
  return finalCount;
};

module.exports = countOnly;