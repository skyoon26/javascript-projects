/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// 1a:
  for (let i = 0; i <= 20; i++) {
    console.log(i);
} 

// 1b:
  for (let i = 3; i <= 30; i = i + 2) {
    console.log(i);
  }

// 1c:
  for (let i = 12; i >= -14; i = i - 2) {
    console.log(i);
  }

// 1d:
  for (let i = 50; i >= 20; i-=1) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let str = "LaunchCode";
let myArray = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i = 0; i <= str.length; i++) {
  console.log(str[str.length - i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    let num = Number(arr[i]);
    evens.push(num);
    // evens = evens + arr[i]; 
  } else {
    let num = Number(arr[i]);
    odds.push(num)
    // odds = odds + arr[i];
  }
}

console.log(evens);
console.log(odds);
