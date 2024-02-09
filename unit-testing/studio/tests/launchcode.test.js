// launchcode.test.js code:
const { describe } = require('node:test');
const launchcode = require('../index.js');

describe("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function(){
  // Write your unit tests here!

  //A key called organization with a value of "nonprofit".
  test("return 'nonprofit' as the key value of organization", function(){
    let value = launchcode.organization;
    expect(value).toBe('nonprofit');
  });

  // A key called executiveDirector with a value of "Jeff".
  test("return 'Jeff' as the key value of executiveDirector", function(){
    let value = launchcode.executiveDirector;
    expect(value).toBe("Jeff");
  });

  // A key called percentageCoolEmployees with a value of 100.
  test("return 100 as the key value of percentageCoolEmployees", function(){
    let value = launchcode.percentageCoolEmployees;
    expect(value).toBe(100);
  });

  // A key called programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"].
  test("return array of 'Web Development', 'Data Analysis', and 'Liftoff' as the key value of programsOffered", function(){
    let value = launchcode.programsOffered;
    let index = launchcode.programsOffered.length;
    expect(value[0]).toBe('Web Development');
    expect(value[1]).toBe('Data Analysis');
    expect(value[2]).toBe('Liftoff');
    expect(index).toBe(3);
  });

  test("return 'Launch!' if a number is divisible by 2", function(){
    let value = launchcode.launchOutput(2);
    expect(value).toBe('Launch!');
  });

  test("return 'Code!' if a number is divisible by 3", function(){
    let value = launchcode.launchOutput(3);
    expect(value).toBe('Code!');
  });

  test("return 'Rocks!' if a number is divisible by 5", function(){
    let value = launchcode.launchOutput(5);
    expect(value).toBe('Rocks!');
  });

  test("return 'LaunchCode!' if a number is divisible by 2 and 3", function(){
    let value = launchcode.launchOutput(6);
    expect(value).toBe('LaunchCode!');
  });


});
