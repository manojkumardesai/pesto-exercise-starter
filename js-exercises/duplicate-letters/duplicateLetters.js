function duplicateLetters(...args) {
  var maxDuplicatedLetterCount, userInputString;

  if(checkIfInputIsValidString(args)) { // checks if user has entered a value and ensures value to be a string
    userInputString = args[0].toLowerCase(); // Converting to lowercase to consider capital and smallcases
    let letterCountMap = {};
    userInputString.split('').map((letter) => {
      if(letterCountMap[letter]) {
        letterCountMap[letter]++;
      } else {
        letterCountMap[letter] = 1;
      }
    });
    maxDuplicatedLetterCount = Math.max(...Object.values(letterCountMap));
    return maxDuplicatedLetterCount > 1 ? maxDuplicatedLetterCount : false;  // return number of characters only if duplicated else false
  } else { // returns false if empty string or non string is passed
    return false;
  }
  
  function checkIfInputIsValidString() {
    return typeof(args[0]) == 'string' && args[0] && !parseInt(args[0]);
  }
}

export {
  duplicateLetters,
};
