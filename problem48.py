# The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
# Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

import time

def euler(n):
	result = 0
	for i in range(1, n + 1):
		result += (i ** i)
	return str(result)[-10:]
	
s = time.time()
print euler(1000)
print "Time to calculate: ",time.time()-s
