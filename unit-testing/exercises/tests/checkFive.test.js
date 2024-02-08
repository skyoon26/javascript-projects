const checkFive = require('../checkFive.js');
    
describe("checkFive", function(){

    test("returns 'num is less than 5' when num < 5.", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
        });

    test("returns 'num is greater than 5' when num > 5.", function() {
        let output = checkFive(6);
        expect(output).toBe("6 is greater than 5.");
        }); 

    test("returns 'num is equal to 5' when num === 5.", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
        });
  
     });