function diffArray(arr1, arr2) {
	var newArr = arr1.filter(function (element) {
		var arr2Index = arr2.indexOf(element); 
		if (arr2Index === -1) {
			return true;
		}	
		else {
			arr2.splice(arr2Index, 1);
			return false;
		}
	});
	return newArr.concat(arr2);
}