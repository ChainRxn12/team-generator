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
     //create test for github object
    describe("Github", () => {
        it("should create new github", () => {
          const obj = new Engineer("Billy",12, "billy.email@email", "ChainRxn12");
          expect(obj.github).toEqual("ChainRxn12");
        });
      });
          //create test for getGithub method
    describe("getGithub", () => {
        it("can return gitHub username by getGithub method", () => {
          const obj = new Engineer("Billy", 12, "billy.email@email", "ChainRxn12");
          expect(obj.getGithub()).toEqual("ChainRxn12");
        });
      });
      //create test for getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Engineer";//must define role
          const obj = new Engineer("Billy", 12, "billy.email@email", "ChainRxn12");
          expect(obj.getRole()).toEqual(role);
        });
      });
});