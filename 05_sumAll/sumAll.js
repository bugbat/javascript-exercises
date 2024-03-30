const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (typeof num1 != "number" || typeof num2 != "number") return 'ERROR';
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
