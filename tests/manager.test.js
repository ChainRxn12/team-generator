// dependencies
const Manager = require('../lib/manager');

//initialize testing

describe("Manager", () => {
    describe("Initialization", () => {
        //object should return an empty string
        it("should initiate an object", () => {
            const obj = new Manager();
            //We expect 'result' to equal object
            expect(typeof(obj)).toEqual("object");
        });
    });
     //create test for school object
    describe("officeNumber", () => {
        it("should create new officeNumber", () => {
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.officeNumber).toEqual(512);
        });
      });
          //create test for getSchool method
    describe("getOfficeNumber", () => {
        it("can return school by getOfficeNumber method", () => {
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.getOfficeNumber()).toEqual(512);
        });
      });
      //create test for getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Manager";//must define role
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.getRole()).toEqual(role);
        });
      });
});