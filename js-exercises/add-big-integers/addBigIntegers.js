function addBigIntegers(userInputIntegers) {
  let bigIntegersListToBeAdded = userInputIntegers.split("\n");
  return bigIntegersListToBeAdded.reduce(addIntegersBySchoolTechnique);
}

function addIntegersBySchoolTechnique(previousTotal, currentIntegerToBeAdded) {
  if (previousTotal.length > currentIntegerToBeAdded.length) {
    currentIntegerToBeAdded = addZeroToMakeDigitsEqual(previousTotal, currentIntegerToBeAdded);
  } else {
    previousTotal = addZeroToMakeDigitsEqual(currentIntegerToBeAdded, previousTotal);
  }
  let sum = 0;
  let carry = 0;
  let resultOfAddition = [];
  for (var i = previousTotal.length - 1; i >= 0; i--) {
    sum = parseInt(previousTotal[i]) + parseInt(currentIntegerToBeAdded[i]) + parseInt(carry);
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    resultOfAddition.push(sum);
  }
  resultOfAddition.reverse().join("");
  return resultOfAddition.join("");
}

function addZeroToMakeDigitsEqual(firstNumber, secondNumber) {
  while (firstNumber.length > secondNumber.length) {
    secondNumber = "0" + secondNumber;
  }
  return secondNumber;
}

export { addBigIntegers };