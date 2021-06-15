import { expect } from "chai";
import "mocha";
import { newKeyStringFilter, newThings } from "./higher-order-funcs";

describe("Higher Order Function tests", () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    expect(newThings).to.eql([
      { id: 1, name: "thing" },
      { id: 2, name: "thing" },
    ]);
  });

  it("#2 should return a single thing from array of things objects after hoisting and currying", () => {
    expect(newKeyStringFilter).to.eql(["thing"]);
  });
});
