import { expect } from "chai";
import "mocha";
import { fruits, hellogreeting, a, b, a1, b1, others, u, v, w, x,y } from "./array-destructuring";
import { food } from "./array-destructuring";

describe("Array destructuring tests", () => {
  it("#1.1 should have a variable for every element in the given array", () => {
    expect(a).to.equal('banana');
  });
  it("#1.2 should have a variable for every element in the given array", () => {
    expect(b).to.equal('apple');
  });

  it("#2.1 should have a variable for the first 2 elements then spread the rest", () => {
    expect(a1).to.equal('apple');
  });

  it("#2.2 should have a variable for the first 2 elements then spread the rest", () => {
    expect(b1).to.equal('banana');
  });

  it("#2.3 should have a variable for the first 2 elements then spread the rest", () => {
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it("#3.1 should construct a statement from the given objarrayect", () => {
    expect(u).to.equal('hello');
  });

  it("#3.2 should construct a statement from the given objarrayect", () => {
    expect(v).to.equal('taylor');
  });

  it("#3.3 should construct a statement from the given objarrayect", () => {
    expect(w).to.equal(',');
  });

  it("#3.4 should construct a statement from the given objarrayect", () => {
    expect(x).to.equal(' ');
  });

  it("#3.5 should construct a statement from the given objarrayect", () => {
    expect(y).to.equal('!');
  });

});
