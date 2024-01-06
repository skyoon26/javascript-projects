// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let kmToMars = 225000000;
let KmToMoon = 384400;
const miPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof kmToMars);
console.log(typeof KmToMoon);
console.log(typeof miPerKm);

// Calculate a space mission below
let miToMars = kmToMars * miPerKm;
let hrsToMars = miToMars / shuttleSpeedMph;
let daysToMars = hrsToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let miToMoon = KmToMoon * miPerKm;
let hrsToMoon = miToMoon / shuttleSpeedMph;
let daysToMoon = hrsToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");