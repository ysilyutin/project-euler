# Find the sum of the digits in the number 100!

# Factorial
def problem(n):
	result = n;
	for i in range(1, n):
		result *= i;
		
# Sum of digits
	temp = str(result)
	total = 0;
	for j in range(len(temp)):
		total += int(temp[j])


	return total

print problem(100)
