const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  if ('repeatTimes' in options) {
    repeatTimes = options['repeatTimes'];
  } 
  if ('separator' in options) {
    separator = options['separator'];
  } 
  if ('addition' in options) {
    addition = String(options['addition']);
  } 
  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = options['additionRepeatTimes'];
  }
  if ('additionSeparator' in options) {
    additionSeparator = options['additionSeparator'];
  }
  function createArray(str, times) {
    let arr = []
    for (let i = 0; i < times; i++) {
      arr.push(str);
    }
    return arr;
  }
  let fullAddition = createArray(addition, additionRepeatTimes).join(additionSeparator);
  let extentedString = createArray((str + fullAddition), repeatTimes).join(separator);
  return extentedString;
};
  