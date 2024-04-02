const palindromes = function (string) {
  let stripped = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  stripped = stripped.replaceAll(' ', '');
  stripped = stripped.toLowerCase();
  for (i = 0; i < stripped.length / 2; i++) {
    let j = stripped.length - i - 1;
    if (stripped[i] !== stripped[j]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
