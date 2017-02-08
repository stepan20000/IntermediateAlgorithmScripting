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

###Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
```javascript
function convertHTML(str) {
	var translate = {
		'&' : "&amp;",
		'<' : "&lt;",
		'>' : "&gt;",
		'"' : "&quot;",
		"'" : "&apos;"	
	};
	function replacerHTML(match){
		return translate[match];		
	}
  	var re = new RegExp(/(&)|(<)|(>)|(")|(')/,'g'); 
	return str.replace(re, replacerHTML);
}
```

###Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
```javascript
function spinalCase(str) {
	function replacerSpinal(match, p1, p2, p3, offset, string) {
		return p1 + " " + p2;
	}
	str = str.replace(/([a-z])([A-Z])/g,replacerSpinal);
  	return str.toLowerCase().split(/[^A-Za-z0-9]/).join("-");
}
```

###Sum All Odd Fibonacci Numbers 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
```javascript
function sumFibs(num) {
	if (num == 1 || num === 0) {
		return num;	
	}
	else {
		var sum = 1;
		for(var last = 1, next = 1; next <= num; next = last + next, last = next - last) {
			if(next % 2 !== 0) {
				sum = sum + next;			
			}		
		}	
		return sum;
	}	
}
```

###Sum All Primes
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
```javascript
function sumPrimes(num) {
	if (num === 0 || num == 1) {
		return undefined;	
	}
  	else if(num == 2) {
  		return num;
  	}
  	else {
// sum is the desired sum
// To simplify the algorithm set the start sum to 2.
// primes is the array with the prime numbers, we iterate the odd numbers i = 3, i += 2 (because even number are not prime) 
// and check if current number is prime
// and if so we add this number to the primes array. Then use the prime numbers from primes array for checking if a current number 
// is prime if(i % prime == 0)  
  		var sum = 2;
  		var primes = [];
// No need to divide current number to divider that greater then Math.ceil(Math.sqrt(num)) 
  		var square = Math.ceil(Math.sqrt(num));
  		for(var i = 3; i <= num; i += 2)
  		{
// if at the end of the second for loop primeFlag is true then we current number is prime and we add this number to the prime array 
  			var primeFlag = true;
			for (var prime of primes) {
				if(prime > square){
					break;				
				}
				else if(i % prime === 0) {
					primeFlag  = false;
					break;
				}
			}
			if(primeFlag) {
				primes.push(i);
				sum = sum + i;
			}	
  		}
  		return sum; 	
 	} 		
}
```

###Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
```javascript
function smallestCommons(arr) {
	var minNum, maxNum, testCommon;
	var testArr = [];	
	var common = 1;
	var flag = true; 
//Define the minimum and maximum numbers in a range
	if (arr[0] < arr[1]) {
		minNum = arr[0];
		maxNum = arr[1];
	}
	else {
		minNum = arr[1];
		maxNum = arr[0];
	}
//Make an array with all numbers for which we should find the smallest common multiple  
	for (let i = minNum, j = 0; i <= maxNum; i++, j++) {
		testArr[j] = i;
// remember the number which is definitely a common multiple because it is just a multiple of all numbers
		common = common * i;
		if (common >= Number.MAX_SAFE_INTEGER) {
			return "Error! The multiple of the numbers a great then Number.MAX_SAFE_INTEGER";
		}
	}
// Step by step multiply the max	number and test a result (testCommon % testArr[j] !== 0)  if it is an our require value
	for (var i = 1, n = common / maxNum; i <= n; i++ ) {
		flag = true;
		testCommon = maxNum * i;
		for (let j = 0, m = testArr.length; j < m; j++) {
			if (testCommon % testArr[j] !== 0) {
				flag = false;
				break;
			}
		}
		if (flag) {
			return testCommon;
		}
	}	
}
```

###Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
```javascript
//This function goes to the end of the array even after first element found. 
// Nevertheless, I left it as it is because like this shorthand solutions 
function findElement(arr, func) {	
  	return arr.filter(func)[0];
}
```

###Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
```javascript
function dropElements(arr, func) {
	for(var i = 0, n = arr.length; i < n; i++){
		if (func(arr[i])) {
			break; 
		}	
	}
	for (var j = 0; j <  i; j++) {
		arr.shift();
	}
	return arr;
}
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
