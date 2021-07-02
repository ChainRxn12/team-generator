//dependencies
const Intern = require('../lib/intern');

//initialize testing

describe("Intern", () => {
    describe("Initialization", () => {
        //object should return an empty string
        it("should initiate an object", () => {
            const obj = new Intern();
            //We expect 'result' to equal object
            expect(typeof(obj)).toEqual("object");
        });
    });
     //create test for school object
    describe("School", () => {
        it("should create new School", () => {
          const obj = new Intern("Joe", 101, "joe@mail.com", "UTSA");
          expect(obj.school).toEqual("UTSA");
        });
      });
          //create test for getSchool method
    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
          const obj = new Intern("Joe", 101, "joe@mail.com", "UTSA");
          expect(obj.getSchool()).toEqual("UTSA");
        });
      });
      //create test for getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Intern";//must define role
          const obj = new Intern("Joe", 101, "joe@mail.com", "UTSA");
          expect(obj.getRole()).toEqual(role);
        });
      });
});