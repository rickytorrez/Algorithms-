## Analyze an array's value and print the average ##

def printAverage(arr):
	sum = arr[0]
	for var in range(1, len(arr)):
		sum += arr[var]
	print sum / float(len(arr))

printAverage(arr)