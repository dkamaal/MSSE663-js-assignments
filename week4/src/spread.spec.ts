import { expect } from "chai";
import "mocha";
import { numbersTest } from "./spread";
import { originalNumbersTest } from "./spread";
import { originalNumbers } from "./spread";
import { winnersTest } from "./spread";
import { runnerUpsTest } from "./spread";
import { participantsTest } from "./spread";
import { participants } from "./spread";
import { bobTest } from "./spread";
import { kyleTest } from "./spread";
import { originalPersonsTest } from "./spread";
import { originalPersons } from "./spread";
import { dataTest } from "./spread";
import { updateTest } from "./spread";
import { originalUpdatesTest } from "./spread";
import { originalUpdates } from "./spread";

// #1 Tests for Array copying

describe("Test for spread.ts #1.1", () => {
  it("should output Copied Numbers Array Comparison with Original", () => {
    expect(originalNumbersTest).to.eql(originalNumbers);
  });
});

describe("Test for spread.ts #1.2", () => {
  it("should output Copied Numbers Array Comparison", () => {
    expect(numbersTest).to.eql(originalNumbersTest);
  });
});

describe("Test for spread.ts #1.3", () => {
  it("should output Copied Numbers Array Comparison with entered Array", () => {
    expect(numbersTest).to.eql([1, 2, 3, 4, 5]);
  });
});

// #2 Tests for Combining arrays

describe("Test for spread.ts #2.1", () => {
  it("should output combined array comparison with Original", () => {
    expect(participantsTest).to.eql(participants);
  });
});

describe("Test for spread.ts #2.2", () => {
  it("should output combined array comparison with entered array", () => {
    expect(participantsTest).to.eql([
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
    ]);
  });
});

describe("Test for spread.ts #2.3", () => {
  it("should output combined array comparison with concatenated arrays", () => {
    expect(participantsTest).to.eql(winnersTest.concat(runnerUpsTest));
  });
});

describe("Test for spread.ts #2.4", () => {
  it("should output combined array comparison using spread operator", () => {
    expect(participantsTest).to.eql([...winnersTest, ...runnerUpsTest]);
  });
});

// #3 Tests for Combining objects

describe("Test for spread.ts #3.1", () => {
  it("should output combined object comparison with Original", () => {
    expect(originalPersonsTest).to.eql(originalPersons);
  });
});

describe("Test for spread.ts #3.2", () => {
  it("should output combined object comparison using spread operator", () => {
    expect(originalPersonsTest).to.eql({
      ...bobTest,
      ...kyleTest,
    });
  });
});

describe("Test for spread.ts #3.3", () => {
  it("should output combined object comparison using entered objects", () => {
    expect(originalPersonsTest).to.eql({ man: "Bob", boy: "Kyle" });
  });
});

// #4 Tests for Modifying values in arrays of objects

describe("Test for spread.ts #4.1", () => {
    it("should output modified values in arrays with Original", () => {
      expect(originalUpdatesTest).to.eql(originalUpdates);
    });
  });

describe("Test for spread.ts #4.2", () => {
  it("should output modified values in arrays by entering array values", () => {
    expect(originalUpdatesTest).to.eql([
      { id: 0, task: "Do the thing" },
      { id: 1, task: "Do the other thing... again" },
      { id: 2, task: "Do the last thing" },
    ]);
  });
});

describe("Test for spread.ts #4.3", () => {
  it("should output modified values in arrays by mapping", () => {
    expect(originalUpdatesTest).to.eql(
      dataTest.map((modifyTest) =>
        modifyTest.id === updateTest.id
          ? { ...modifyTest, task: updateTest.task }
          : modifyTest
      )
    );
  });
});

describe("Test for spread.ts #4.4", () => {
  it("should output modified value in array to updateTest value", () => {
    expect(originalUpdatesTest[1]).to.eql(updateTest);
  });
});
