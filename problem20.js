// Find the sum of the digits in the number 100!

// Factorial
function foo(n) {
	var total = 0;
	var fact = n;
	for (var j = 1; j < n; j += 1) {
		fact *= j;
	}

	var str = fact.toString();

// Sum of digits
	for (var i = 0; i < str.length; i += 1) {
		total += parseInt(str.charAt(i), 10);
	}
	return total
}

console.log(foo(10));
