const removeFromArray = function(array, ...remove) {
  for (const item of remove) {
    array = array.filter((arrItem) => arrItem !== item);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
