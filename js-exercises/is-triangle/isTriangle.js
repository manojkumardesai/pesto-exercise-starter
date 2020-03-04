function isTriangle(line1, line2, line3) {
  var line1Sq, line2Sq, line3Sq;
  line1Sq = Math.pow(line1,2);
  line2Sq = Math.pow(line2,2);
  line3Sq = Math.pow(line3,2);
  if (pythagoreanCheck()) {
    return true;
  } else {
    return false;
  }

  function pythagoreanCheck() {
  return ((line1Sq + line2Sq) == line3Sq) || ((line2Sq + line3Sq) == line1Sq) || ((line1Sq + line3Sq) == line2Sq);
  }
}

export {
  isTriangle,
};
