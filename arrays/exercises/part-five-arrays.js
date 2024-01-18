let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(''));
/* .split() made the string into an element within an array. 
.split('e') split the string into five different elements after each letter 'e'.
.split(' ') split the string into 8 elements according to each word. 
.split('') split the string into a bunch of elements according to each letter.*/

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join(''));
/* .join() turned all of the elements into a string with a comma between each value (B,n,n,5). 
.join('a') added the letter 'a' after each string element and then combined all of the elements and turned it into a single string (Banana5).
.join(' ' ) turned all of the elements into a string separated by a space (B n n 5).
.join('') combined all of the elements into a single string (Bnn5).*/

//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
// No split of join does NOT change the original string/array. 

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));