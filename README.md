#IntermediateAlgorithmScripting

Collection of scripts from Free Code Camp's Intermediate Algorithm Scripting Section

##Names of scripting challenges:

###Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.  
```javascript
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
```

###Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.  
```javascript
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
```

###Roman Numeral Converter
Convert the given number into a roman numeral.  
```javascript
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
```

###Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of 
all objects that have matching property and value pairs (second argument). Each property and value pair of 
the source object has to be present in the object from the collection if it is to be included in the returned array.  
```javascript
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
```

###Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
```javascript
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
```

###Pig Latin
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
```javascript
function translatePigLatin(str) {
	var indexOfVowel;
	var consonant = [];
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(str[0]) == -1)  {
		var strArr = str.split("");
		for(var i = 0, n = strArr.length; i < n; i++){
			if (vowels.indexOf(strArr[i]) != -1) {
				indexOfVowel = i;
				break;
			}
		}
		for (var i = 0; i < indexOfVowel; i++) {
			consonant.push(strArr.shift());	
		}		
		return strArr.join("") + consonant.join("") + "ay";		
	}
	else {
		return str + "way";
	}	  
}
```

###DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```javascript
function pairElement(str) {
	var pairs = {
		"A" : "T",
		"T" : "A",
		"C" : "G",
		"G" : "C"	
	};
	var strArr = str.split("");
	for (var i = 0, n = strArr.length; i < n; i++) {
		strArr[i] = [strArr[i], pairs[strArr[i]]];
	}
	return strArr;
}
```

###Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
```javascript
function fearNotLetter(str) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var start;
	str = str.toLowerCase();
	start = alphabet.indexOf(str[0]);
	if (start != -1){
		for (var i = 0; i < 26 - start; i++) {
			if (str[i] != alphabet[start + i] && str[i] !== undefined) {
				return alphabet[start + i];
			}
		}
	return undefined;
	}
}
```

###Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
```javascript
function booWho(bool) {
	if (bool === null) {
		return false;
	}
	else if (bool === undefined) {
		return false;
	}
	else if (Object.getPrototypeOf(bool) === Boolean.prototype) {
		return true;
	}
	else {
		return false;
	}
}
```

###Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
```javascript
function uniteUnique(arr) {
	var newArr = [];
	for (var key in arguments) {
		for (var j = 0, m = arguments[key].length; j < m; j++) {
			if (newArr.indexOf(arguments[key][j]) == -1) {
				newArr.push(arguments[key][j]);
			}
		}
	}	
	return newArr;
}
```

###Convert HTML Entities Incomplete
```javascript

```

###Spinal Tap Case Incomplete
```javascript

```

###Sum All Odd Fibonacci Numbers Incomplete
```javascript

```

###Sum All Primes Incomplete
```javascript

```

###Smallest Common Multiple Incomplete
```javascript

```

###Finders Keepers Incomplete
```javascript

```

###Drop it Incomplete
```javascript

```

###Steamroller Incomplete
```javascript

```

###Binary Agents Incomplete
```javascript

```

###Everything Be True Incomplete
```javascript

```

###Arguments Optional Incomplete
```javascript

```
