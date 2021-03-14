const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let array of matrix) {
    for (let item of array) {
      if (item === '^^') {
        count += 1;
      }
    }
  }
  return count;
};
