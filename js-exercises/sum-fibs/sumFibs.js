function sumFibs(num){
  var a = 1, b = 0, temp, numClone = num, sum = 1;

  while (num >= 0 && sum < numClone){
    temp = a;
    a = a + b;
    b = temp;
    if(a%2 != 0) {
    sum = sum + a;  
    }
    num--;
  }

  return sum;
}

export {
  sumFibs,
};
