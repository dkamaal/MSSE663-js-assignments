import { expect } from "chai";
import "mocha";
import { fruits, hellogreeting } from "./array-destructuring";
import { food } from "./array-destructuring";

describe("Array destructuring tests", () => {
  it("#1 should have a variable for every element in the given array", () => {
    expect(fruits).to.eql(['apple', 'banana']);
  });

  it("#2 should have a variable for the first 2 elements then spread the rest", () => {
    expect(food).to.eql(['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza']);
  });

  it("#3 should construct a statement from the given objarrayect", () => {
    expect(hellogreeting.join("").toString()).to.equal('hello, taylor!');
  });

});
