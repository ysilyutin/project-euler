function sumOfSquare() {

  var result1 = 0, i = 1;
  var result2 = 0, j = 1;

  for (i; i <= 100; i += 1) {
    result1 += (i * i);
  }

  for (j; j <= 100; j += 1) {
    result2 += j;
  }
  return result2 * result2 - result1;
}

console.log(sumOfSquare());
