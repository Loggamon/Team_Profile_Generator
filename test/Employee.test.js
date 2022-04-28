const { getSystemErrorName } = require("util");
const Employee = require("../lib/employee");

describe("Employee", () => {
  it('should return an object containing a "name" property when called with the new keyword', () => {
    const obj = new Employee();

    expect("name" in obj).toEqual(true);
  });
  it('should set "name" when created', () => {
    const myName = "Logan";

    const obj = new Employee(myName, "id", "email");
    expect(obj.name).toEqual(myName);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "id" property when called with the new keyword', () => {
    const obj = new Employee();

    expect("id" in obj).toEqual(true);
  });
  it('should set "id" when created', () => {
    const myId = "1234";

    const obj = new Employee("name", myId, "email");
    expect(obj.id).toEqual(myId);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "email" property when called with the new keyword', () => {
    const obj = new Employee();

    expect("email" in obj).toEqual(true);
  });
  it('should set "email" when created', () => {
    const myEmail = "loganiscool@email.com";

    const obj = new Employee("name", "id", myEmail);
    expect(obj.email).toEqual(myEmail);
  });
  //-------------------------------------------------------------
  it('should receive the "name" value when the getName function is called', () => {
    const myEmployee = new Employee("Logan", "1234", "fakeemail@email.com");

    const result = myEmployee.getName();

    expect(result).toEqual("Logan");
  });
  //-------------------------------------------------------------
  it('should receive the "id" value when the getName function is called', () => {
    const myEmployee = new Employee("Logan", "1234", "fakeemail@email.com");

    const result = myEmployee.getId();

    expect(result).toEqual("1234");
  });
  //-------------------------------------------------------------
  it('should receive the "email" value when the getEmail function is called', () => {
    const myEmployee = new Employee("Logan", "1234", "fakeemail@email.com");

    const result = myEmployee.getEmail();

    expect(result).toEqual("fakeemail@email.com");
  });
  //-------------------------------------------------------------
  it('should receive the "role" value when the getRole function is called', () => {
    const myEmployee = new Employee("Logan", "1234", "fakeemail@email.com");

    const result = myEmployee.getRole();

    expect(result).toEqual("Employee");
  });
});
