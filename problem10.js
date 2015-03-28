// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function answer(){
  var sumOfPrimes = 2;
  for (var i = 3; i < 2000000; i+=2) {
    if(isPrimeNumber(i)){
      sumOfPrimes +=i;
    }
  }
  return sumOfPrimes;


  function isPrimeNumber(numb){
    var isPrime = true;
    for (var i = 3; i * i <= numb; i+=2) {
      if(numb % i === 0){
        isPrime = false;
      }
    }
    return isPrime;
  }
}

console.log(answer());
