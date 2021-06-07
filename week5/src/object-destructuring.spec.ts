import { expect } from "chai";
import "mocha";
import { greeting } from "./array-destructuring";
import { person, job } from "./object-destructuring";
import {
  user,
  address,
  id,
  nestedObject,
  newnestedObject,
  greetingObject,
} from "./object-destructuring";

describe("Object destructuring tests", () => {
  it("#1 should have a variable for every property in the given object", () => {
    expect(person).to.equal("elvis") && expect(job).to.equal("hip swinger");
  });

  it("#2.1 should have a variable for every property in the given nested object", () => {
    expect({
      user: "elvis",
      address: { city: "denver", state: "colorado" },
      id: 1,
    }).to.eql(nestedObject);
  });

  it("#3 should create a new object given the destructed variables from the nested object", () => {
    expect({
      newuser: "elvis",
      newaddress: { city: "denver", state: "colorado" },
      newid: 1,
    }).to.eql(newnestedObject);
  });

  it("#4 should construct a statement from the given object", () => {
    expect({
      greeting: "hello",
      name: "taylor",
    }).to.eql(greetingObject);
  });
});
