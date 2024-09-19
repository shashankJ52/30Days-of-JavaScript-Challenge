/***** DAY 2 EXERCISE *****/

/***** Exercise LEVEL 1  *****/

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of JavaScript";
// 2. Print the string on the browser console using console.log()
console.log(challenge);
// 3. Print the length of the string on the browser console using console.log()
console.log("LENGTH :", challenge.length);
// 4. Change all the string characters to capital letters using toUpperCase() method
console.log("Capitalize :", challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log("LowerCase :", challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log("First Word :", challenge.substring(0, 3));
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("Slice :", challenge.slice(11));
// 8. Check if the string contains a word Script using includes() method
console.log("Includes Script :", challenge.includes("Script"));
// 9. Split the string into an array using split() method
console.log("SPLIT 1:", challenge.split());
// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log("SPLIT 2:", challenge.split(" "));
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));
// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
challenge = challenge.replace("JavaScript", "Python");
console.log(challenge);
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
challenge = "30 Days of JavaScript";
console.log("CharAt(15) :", challenge.charAt(15));
// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("charCodeAt('J') :", challenge.charCodeAt(11));
// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("First Occurrence ('a') :", challenge.indexOf("a"));
// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("Last Occurrence ('a') :", challenge.lastIndexOf("a"));
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
	"You cannot end a sentence with because because because is a conjunction";
console.log("First Occurrence ('bcuz') :", sentence.indexOf("because"));
console.log("Last Occurrence ('bcuz') :", sentence.lastIndexOf("because"));
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(" 30 Days Of JavaScript ");
console.log(" 30 Days Of JavaScript ".trim());
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Starts with :", challenge.startsWith("30"));
// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Ends with :", challenge.endsWih("30"));
// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("MATCH :", challenge.match("a"));
// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let newString = "";
newString = newString.concat("30 Days of", "JavaScript");
console.log(newString);
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("30 Days Of JavaScript ".repeat(2));
