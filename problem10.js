// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function isPrimeNumber(numb) {
  var isPrime = true;
  var j = 3;
  for (j; j * j <= numb; j += 2) {
    if (numb % j === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}


function answer() {
  var sumOfPrimes = 2;
  var i = 3;
  for (i; i < 2000000; i += 2) {
    if (isPrimeNumber(i)) {
      sumOfPrimes += i;
    }
  }
  return sumOfPrimes;
}


console.log(answer());
