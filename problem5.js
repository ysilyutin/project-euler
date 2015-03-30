// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findNumber(n) {
  var temp = [];
  var i = 0, j = 0;
  var number = false;
  var result = [];
  var len = result.length;

  // Create an array from 1 to 10
  for (i; i <= 20; i += 1) {
    temp.push(i);
  }

  // Loop for checking lenght of result array
  	for (j; j < temp.length; j += 1) {
  		if (n % temp[j] === 0) {
  		  result.push(temp[j]);
  		  number = true;
  		} else {
  		  number = false;
  		}
  	}
  return result;
}

for (var i = 1; i > 0; i += 1) {
	if (findNumber(i).length === 20) {
		console.log(i);
		break;
	}
}
