import { expect } from "chai";
import "mocha";
import {
  blackBeltNinja,
  newblackbeltninja,
  newCurryOutput,
  newdoMathOutput,
  newninjaStatus,
  ninjasOne,
  ninjasTwo,
} from "./currying";

describe("Currying tests", () => {
  it("#1 should output the same result as the original function", () => {
    expect(newCurryOutput).to.equal("Apple Banana Orange");
  });

  it("#2 should output the same result as the original function", () => {
    expect(newdoMathOutput).to.equal(10);
  });

  //For #3 Array is taking status as well.
  //I think its changing ninjasOne Array and ninjasTwo Array permanently. Unable to get exact Array for testing.

  it("#3 should return an array containing the ninjas who have a black belt", () => {
    expect(blackBeltNinja(ninjasOne)(ninjasTwo)).to.eql(newblackbeltninja);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(newninjaStatus).to.eql([
      { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
      { name: 'Donatello', belt: 'green', status: 'warrior' },
      { name: 'Raphael', belt: 'black', status: 'sensei' },
      { name: 'Leonardo', belt: 'black', status: 'sensei' },
      { name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
      { name: 'Rocky', belt: 'black', status: 'sensei' },
      { name: 'Colt', belt: 'green', status: 'warrior' },
      { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
      { name: 'Haru', belt: 'white', status: 'grasshopper' },
      { name: 'The Bride', belt: 'black', status: 'sensei' },
      { name: 'Cammy', belt: 'black', status: 'sensei' },
      { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' },
      { name: 'Michelangelo', belt: 'white', status: 'Noob' },
      { name: 'Donatello', belt: 'green', status: 'Choob' },
      { name: 'Raphael', belt: 'black', status: 'Legend' },
      { name: 'Jim', belt: 'black', status: 'Legend' },
      { name: 'The Rat', belt: 'black', status: 'Legend' }
    ]
    );
  });
});
