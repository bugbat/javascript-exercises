const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
	return arr.reduce((total, num) => total + num);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(num) {
  if (num === 0) return 1;
	if (num < 3) return num;
  let factorial = 1;
  for (i = 1; i < num + 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
