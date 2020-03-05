import { isString } from "util";

function abbreviateString(str) {
  if (!isString(str)) {
    throw 'Invalid Input';
  } else {
    let wordsInEnteredString = str.split(' ');
    return wordsInEnteredString[0] + ' ' + extractLastWordInUpperCase(wordsInEnteredString) + '.';
  }
}

function extractLastWordInUpperCase(wordsInEnteredString) {
  return wordsInEnteredString[wordsInEnteredString.length - 1].substring(0, 1).toUpperCase();
}

export { abbreviateString };
