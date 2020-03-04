function sumAll(args) {
  var startNum = Math.min(...args);
  var endNum = Math.max(...args);
  var sumBetweenTheRange =  (((endNum - startNum) + 1) * (endNum + startNum)) / 2; // Sum of all integers in the given range
  return sumBetweenTheRange;
}

export {
  sumAll,
};
