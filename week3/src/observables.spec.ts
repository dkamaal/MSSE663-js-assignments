import "mocha";
import { expect } from "chai";
import { of } from 'rxjs';

describe("Test for observables.ts", () => {
  it("should test Car Observable car makes", done => {
    let index = 0;
    const expectedcarObservable = ["Ford", "Toyota", "Audi"];
    const carObservable = of("Ford", "Toyota", "Audi");
    carObservable.subscribe((x: string) => {
      expect(x).to.equal(expectedcarObservable[index]);
      index++;
  });
done();
});
it("should test Car Observable length", done => {
  const expectedcarObservable = ["Ford", "Toyota", "Audi"];
  const carObservable = of("Ford", "Toyota", "Audi");
  carObservable.subscribe((x: string) => {
    expect(3).to.equal(expectedcarObservable.length);
});
done();
});
it("should test Car Observable type", done => {
const expectedcarObservable = ["Ford", "Toyota", "Audi"];
const carObservable = of("Ford", "Toyota", "Audi");
carObservable.subscribe((x: string) => {
  expect(typeof carObservable).to.equal(typeof expectedcarObservable);
});
done();
});
});
