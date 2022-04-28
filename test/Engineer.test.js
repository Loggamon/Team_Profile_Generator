const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it('should return an object containing a "name" property when called with the new keyword', () => {
    const obj = new Engineer();

    expect("name" in obj).toEqual(true);
  });
  it('should set "name" when created', () => {
    const myName = "Logan";

    const obj = new Engineer(myName, "id", "email");
    expect(obj.name).toEqual(myName);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "id" property when called with the new keyword', () => {
    const obj = new Engineer();

    expect("id" in obj).toEqual(true);
  });
  it('should set "id" when created', () => {
    const myId = "1234";

    const obj = new Engineer("name", myId, "email");
    expect(obj.id).toEqual(myId);
  });
  //-------------------------------------------------------------
  it('should return an object containing an "email" property when called with the new keyword', () => {
    const obj = new Engineer();

    expect("email" in obj).toEqual(true);
  });
  it('should set "email" when created', () => {
    const myEmail = "loganiscool@email.com";

    const obj = new Engineer("name", "id", myEmail);
    expect(obj.email).toEqual(myEmail);
  });
  //-------------------------------------------------------------
  it('should receive the "name" value when the getName function is called', () => {
    const myEngineer = new Engineer("Logan", "1234", "fakeemail@email.com");

    const result = myEngineer.getName();

    expect(result).toEqual("Logan");
  });
  //-------------------------------------------------------------
  it('should receive the "id" value when the getId function is called', () => {
    const myEngineer = new Engineer("Logan", "1234", "fakeemail@email.com");

    const result = myEngineer.getId();

    expect(result).toEqual("1234");
  });
  //-------------------------------------------------------------
  it('should receive the "email" value when the getEmail function is called', () => {
    const myEngineer = new Engineer("Logan", "1234", "fakeemail@email.com");

    const result = myEngineer.getEmail();

    expect(result).toEqual("fakeemail@email.com");
  });
  //-------------------------------------------------------------
  it('should receive the "role" value when the getRole function is called', () => {
    const myEngineer = new Engineer("Logan", "1234", "fakeemail@email.com");

    const result = myEngineer.getRole();

    expect(result).toEqual("Engineer");
  });
  //-------------------------------------------------------------
  it('should receive the "github" value when the getGithub function is called', () => {
    const myEngineer = new Engineer(
      "Logan",
      "1234",
      "fakeemail@email.com",
      "coolEngineer"
    );

    const result = myEngineer.getGithub();

    expect(result).toEqual("coolEngineer");
  });
});
