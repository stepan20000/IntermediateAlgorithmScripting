function convertToRoman(num) {
	var rom = ''; 
	var thousands;
	var ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	var tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
	var hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
	var thousand = 'M';
	if (Math.floor(num / 1000) > 0) {
		thousands = Math.floor(num / 1000);
		for (var i = 0; i < thousands; i++) {
			rom = rom + thousand;
		}
	   num = num - 1000 * Math.floor(num / 1000);
	}	
	if(Math.floor(num / 100) > 0) {
		rom = rom + hundreds[Math.floor(num / 100) -1];
		num = num - 100 * Math.floor(num / 100);
	}
	if (Math.floor(num / 10) > 0) {
		rom = rom + tens[Math.floor(num / 10) -1];
		num = num - 10 * Math.floor(num / 10);
	}
	if (num > 0) {
		rom = rom + ones[num -1];	
	}	
	return rom;
}