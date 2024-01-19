const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.replace("Lau", "") + str.slice(0, 3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original name was ${str} but we turned it into ${newStr}!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question("How many letters would you like to move? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (info > 10) {
    console.log(`Whoa! ${info} is way too many! There are only ${str.length} letters in ${str}. Will default to move 3.`);
} else if (info <=10) {
    console.log(`Awesome! We will move ${info} letters!`);
} else {
    console.log(`${info} is not a valid number!`);
}