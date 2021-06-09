import { expect } from "chai";
import "mocha";
import { greeting } from "./object-destructuring";
import { person, job } from "./object-destructuring";
import {
  user,
  address,
  id,
  newuser,
  newaddress,
  newid,
  name,
  nestedObject,
  newnestedObject,
  greetingObject,
} from "./object-destructuring";

describe("Object destructuring tests", () => {
  it("#1.1 should have a variable for every property in the given object", () => {
    expect(person).to.equal("elvis");
  });

  it("#1.2 should have a variable for every property in the given object", () => {
    expect(job).to.equal("hip swinger");
  });


  it("#2.1 should have a variable for every property in the given nested object", () => {
    expect(user).to.equal('elvis');
  });

  it("#2.2 should have a variable for every property in the given nested object", () => {
    expect(address).to.eql({ city: 'denver', state: 'colorado' });
  });

  it("#2.3 should have a variable for every property in the given nested object", () => {
    expect(id).to.equal(1);
  });

  it("#3.1 should create a new object given the destructed variables from the nested object", () => {
    expect(newuser).to.equal('elvis');
  });

  it("#3.2 should create a new object given the destructed variables from the nested object", () => {
    expect(newaddress).to.eql({ city: 'denver', state: 'colorado' });
  });

  it("#3.3 should create a new object given the destructed variables from the nested object", () => {
    expect(newid).to.equal(1);
  });

  it("#3.4 should create a new object given the destructed variables from the nested object", () => {
    expect({
      newuser: "elvis",
      newaddress: { city: "denver", state: "colorado" },
      newid: 1,
    }).to.eql(newnestedObject);
  });

  it("#4.1 should construct a statement from the given object", () => {
    expect(greeting).to.equal('hello');
  });

  it("#4.2 should construct a statement from the given object", () => {
    expect(name).to.equal('taylor');
  });

  it("#4.3 should construct a statement from the given object", () => {
    expect({
      greeting: "hello",
      name: "taylor",
    }).to.eql(greetingObject);
  });
});
