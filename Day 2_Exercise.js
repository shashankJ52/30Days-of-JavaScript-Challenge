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
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Last Occurrence ('bcuz') :", sentence.lastIndexOf("because"));
// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Search Occurrence ('bcuz') :", sentence.search("because"));
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(" 30 Days Of JavaScript ");
console.log(" 30 Days Of JavaScript ".trim());
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Starts with :", challenge.startsWith("30"));
// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Ends with :", challenge.endsWith("30"));
// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("MATCH :", challenge.match("a"));
// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let newString = "";
newString = newString.concat("30 Days of", "JavaScript");
console.log(newString);
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("30 Days Of JavaScript ".repeat(2));

/***** Exercise LEVEL 2  *****/
/*

1.Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
2. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

3. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

4. Check if 'on' is found in both python and jargon

5. I hope this course is not full of jargon. Check if jargon is in the sentence.

6. Generate a random number between 0 and 100 inclusively.

7. Generate a random number between 50 and 100 inclusively.

8. Generate a random number between 0 and 255 inclusively.

9. Access the 'JavaScript' string characters using a random number.

10. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
11. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
/***** Exercise LEVEL 3  *****/
/*
'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/
