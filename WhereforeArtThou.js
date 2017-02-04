//This function should work even if the source has more than one key-value pairs
function whatIsInAName(collection, source) {
// Make an array with the sources keys
	var keysSource = Object.keys(source);
// Iterate over the collection's objects with filter function and iterate over the keysSource with for .. of
// if at least one property-value of the source isn't in the current collection object make flag false and then
// don't add this object to the result array arr (filter function returns false)
	var arr = collection.filter(function (element) {
		var flag = true;
		for(var key of keysSource) {
			if(element[key] !== source[key]) {
				console.log("flag false");
				flag = false;		
			}				
		}
		if(flag) {
			return true;
		}
		else {
			return false;
		}
	});
	return arr;
}	