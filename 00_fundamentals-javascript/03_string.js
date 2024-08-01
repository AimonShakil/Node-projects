// Difference in Property of String and methods
// In summary, properties provide information about the string, while methods perform operations on the string. 
// String Property: Properties of strings are static values associated with a string that describe some aspect of the string.
// strings are immutable, means thier original value remains same 


const str1 = "Hello";
console.log(str1.length); // Outputs: 5
//String Methods : Methods of strings are functions that can perform actions on strings or return information about strings.
let str = "M Piaic Class";
let newStr = str.charAt(7);
console.log(newStr);
const strr = "Hello";
console.log(strr.charAt(0)); // Outputs: "H"
console.log(strr.indexOf("l")); // Outputs: 2
console.log(strr.toUpperCase()); // Outputs: "HELLO"
let school = "Apna College is a good  Channel  "; // Str Trim to remove white spaces
console.log(school.trim());
let college = "IMCGGirls School"; // starting and ending between values
console.log(college.slice(0, 8));
let strs = "hello";
console.log(strs.replace("h", "y")); // replacing a value in a string

// strings concatenation
let eS = "IMCG";
let fL = "F6/2";
let nA = eS + fL;
console.log(nA);
export {};
