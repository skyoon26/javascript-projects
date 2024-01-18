//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table = [];
table.push(element1, element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][2]);
console.log(table[1, 2]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
east1 = ['Japan', 'Tokyo', 'Kanji']
east2 = ['China', 'Beijing', 'Mandarin']
east3 = ['South Korea', 'Seoul', 'Hangeul']

west1 = ['US', 'Washington', 'English']
west2 = ['Mexico', 'Mexico City', 'Spanish']
west3 = ['Canada', 'Ottawa', 'English']

europe1 = ['UK', 'London', 'English']
europe2 = ['Italy', 'Rome', 'Italian']
europe3 = ['France', 'Paris', 'French' ]


array1 = [];
array1.push(east1, east2, east3);

array2 = [];
array2.push(west1, west2, west3);

array3 = [];
array3.push(europe1, europe2, europe3);

finalArray = [];
finalArray.push(array1, array2, array3);
console.log(finalArray);
console.log(finalArray[0][0][1]);
console.log(finalArray[1][2][0]);
console.log(finalArray[2][1][2]);