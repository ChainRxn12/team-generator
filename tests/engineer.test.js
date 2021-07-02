// dependencies
const Engineer = require('../lib/engineer');

//initialize testing

describe("Engineer", () => {
    describe("Initialization", () => {
        //object should return an empty string
        it("should initiate an object", () => {
            const obj = new Engineer();
            //We expect 'result' to equal object
            expect(typeof(obj)).toEqual("object");
        });
    });
});