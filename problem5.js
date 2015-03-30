// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

/* ------ Refactoring has done

var i = 190;
for (i; i; i += 190) {
  if (i % 3 === 0 && i % 4 === 0 && i % 6 === 0 && i % 7 === 0 && i % 8 === 0 && i % 9 === 0 && i % 11 === 0 && i % 12 === 0 && i % 13 === 0 && i % 14 === 0 && i % 15 === 0 && i % 16 === 0 && i % 17 === 0 && i % 18 === 0 && i % 20 === 0) {
    console.log(i);
    break;
  }
}

------ */

var k = 1;

function findNumber(n) {
  var temp = [];
  var i = 0, j = 0;
  var result = [];


  // Create an array from 1 to 10
  for (i; i <= 10; i += 1) {
    temp.push(i);
  }

  // Loop for checking lenght of result array
  for (j; j < temp.length; j += 1) {
    if (n % temp[j] === 0) {
      result.push(temp[j]);
    }
  }
  return result;
}

for (k; k > 0; k += 1) {
  if (findNumber(k).length === 10) {
    console.log(k);
    break;
  }
}
