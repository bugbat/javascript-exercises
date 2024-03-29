const repeatString = function(word, repeats) {
  if (repeats < 0) return "ERROR";
  let repeatedWord = "";
  for (let i = 0; i < repeats; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
