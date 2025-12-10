const convertToCelsius = function (tempCel) {
  let tempCel = 0;
  return tempCel / 32;
};

const convertToFahrenheit = function (tempFar) {
  return tempFar * 32;
};
console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
