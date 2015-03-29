// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


var temp = [], result = 0, i = 2;

temp[0] = 0;
temp[1] = 1;

for (i; i <= 50; i += 1) {
  temp[i] = temp[i - 2] + temp[i - 1];
  if (temp[i] < 4000000 && temp[i] % 2 === 0) {
    result += temp[i];
  }
}

console.log(result);
