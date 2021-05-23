import "mocha";
import { expect } from "chai";
import { SportsCar } from "./app";

describe("Test for app.ts", () => {
  const sportscar = new SportsCar("ford", "Mustang", 2021, "Coupe", "Rallying");
  it("should output Sports Car Make", () => {
    expect(sportscar.make).to.equal("ford");
  });
  it("should output Sports Car Model Name", () => {
    expect(sportscar.model).to.equal("Mustang");
  });
  it("should output Sports Car Model year", () => {
    expect(sportscar.year).to.equal(2021);
  });

  it("should output Sports Car type", () => {
    expect(sportscar.type).to.equal("Coupe");
  });
  it("should output Sports Car Race Category", () => {
    expect(sportscar.racecategory).to.equal("Rallying");
  });
});
