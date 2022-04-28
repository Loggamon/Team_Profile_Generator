const Manager = require("../lib/manager");

describe("Manager", () => {
  it('should return an object containing a "name" property when called with the new keyword', () => {
    const obj = new Manager();

    expect("name" in obj).toEqual(true);
  });
  it('should set "name" when created', () => {
    const myName = "Logan";

    const obj = new Manager(myName, "id", "email");
    expect(obj.name).toEqual(myName);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "id" property when called with the new keyword', () => {
    const obj = new Manager();

    expect("id" in obj).toEqual(true);
  });
  it('should set "id" when created', () => {
    const myId = "1234";

    const obj = new Manager("name", myId, "email");
    expect(obj.id).toEqual(myId);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "email" property when called with the new keyword', () => {
    const obj = new Manager();

    expect("email" in obj).toEqual(true);
  });
  it('should set "email" when created', () => {
    const myEmail = "loganiscool@email.com";

    const obj = new Manager("name", "id", myEmail);
    expect(obj.email).toEqual(myEmail);
  });
  //-------------------------------------------------------------
  it('should receive the "name" value when the getName function is called', () => {
    const myManager = new Manager("Logan", "1234", "fakeemail@email.com");

    const result = myManager.getName();

    expect(result).toEqual("Logan");
  });
  //-------------------------------------------------------------
  it('should receive the "id" value when the getId function is called', () => {
    const myManager = new Manager("Logan", "1234", "fakeemail@email.com");

    const result = myManager.getId();

    expect(result).toEqual("1234");
  });
  //-------------------------------------------------------------
  it('should receive the "email" value when the getEmail function is called', () => {
    const myManager = new Manager("Logan", "1234", "fakeemail@email.com");

    const result = myManager.getEmail();

    expect(result).toEqual("fakeemail@email.com");
  });
  //-------------------------------------------------------------
  it('should receive the "role" value when the getRole function is called', () => {
    const myManager = new Manager("Logan", "1234", "fakeemail@email.com");

    const result = myManager.getRole();

    expect(result).toEqual("Manager");
  });
  //-------------------------------------------------------------
  it('should receive the "officeNumber" value when the getOfficeNumber function is called', () => {
    const myManager = new Manager(
      "Logan",
      "1234",
      "fakeemail@email.com",
      "112358"
    );

    const result = myManager.getOfficeNumber();

    expect(result).toEqual("112358");
  });
});
