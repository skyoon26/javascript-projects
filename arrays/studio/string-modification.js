const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0, 3); //or can do: str.replace("Lau", "") + str.slice(0, 3);
// console.log(newStr); returns "nchCodeLau"

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original name is ${str}, but we switched it up to ${newStr}. Try it out!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userAns = input.question("Please enter the number of letters to relocate: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userAns >= str.length) {
    console.log(`${userAns} is too many, as there are only ${str.length} letters in ${str}. 
    Will default to 3 letters. Here is your result: ${newStr}`);
} else if (userAns < str.length) {
    let userStr = str.slice(userAns) + str.slice(0, userAns);
    console.log(`We will move ${userAns} letters! This is your result: ${userStr}`);
} else {
    console.log(`${userAns} is not a valid number!`);
} 