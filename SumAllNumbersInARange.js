function sumAll(arr) {
	var summ = 0;
	var first, last;
	if (arr[0] == arr[1]) {
		return arr[0] + arr[1];
	}
	else if(arr[0] < arr[1]){
		first = arr[0];
		last = arr[1];	
	}
	else {
		first = arr[1];
		last = arr[0];
	}
	for (var i = first; i <= last; i++) {
		summ = summ + i;	
	}
	return summ;	
}