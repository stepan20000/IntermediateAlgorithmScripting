function myReplace(str, before, after) {
	function replacer(match, p1, p2, p3, offset, string) {
		if (match === match.toUpperCase()) {
			return after.toUpperCase(0);
		}
		else if (match[0] === match[0].toUpperCase()) {
			return after[0].toUpperCase() + after.substring(1, after.length); 
		}
		else {
			return after;
		}
	}
	var re = new RegExp('\\b(' + before + ')\\b','gi');
	return str.replace(re, replacer);
}