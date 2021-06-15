// #1 Convert this javascript function to a curried function
export function curryMe(string1, string2, string3): string {
  return string1 + " " + string2 + " " + string3;
}
export const curryMeOutput = curryMe("Apple", "Banana", "Orange");
console.log(curryMeOutput);

// source code here

export function newCurryMe(string1: string) {
  return function (string2: string) {
    return function (string3: string) {
      return string1 + " " + string2 + " " + string3;
    };
  };
}

export const newCurryOutput = newCurryMe("Apple")("Banana")("Orange");
console.log(newCurryOutput);

// #2 Hoist and convert nested functions to curried functions

function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

export const doMathOutput = doMath(10)(5)(5);
console.log(doMathOutput);

// source code here

export const newsubtract = (a1) => (b1) => (c1) => a1 + b1 - c1;
const c1 = 5;

function newDoMath(a1) {
  return function newadd(b1) {
    return newsubtract(a1)(b1)(c1);
  };
}

export const newdoMathOutput = newDoMath(10)(5);
console.log(newdoMathOutput);

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: "Michelangelo", belt: "white" },
  { name: "Donatello", belt: "green" },
  { name: "Raphael", belt: "black" },
  { name: "Leonardo", belt: "black" },
  { name: "Mr. Miyagi", belt: "black" },
  { name: "Rocky", belt: "black" },
  { name: "Colt", belt: "green" },
  { name: "Tum Tum", belt: "white" },
  { name: "Haru", belt: "white" },
  { name: "The Bride", belt: "black" },
  { name: "Cammy", belt: "black" },
  { name: "Wong Fei-hung", belt: "green" },
];

export const ninjasTwo = [
  { name: "Michelangelo", belt: "white" },
  { name: "Donatello", belt: "green" },
  { name: "Raphael", belt: "black" },
  { name: "Jim", belt: "black" },
  { name: "The Rat", belt: "black" },
];

// source code here

export const blackBeltNinja = (ninjasOne: any[]) => {
  return function (ninjasTwo: any[]) {
    const ninja1 = ninjasOne.filter((arr) => arr.belt === "black");
    const ninja2 = ninjasTwo.filter((arr) => arr.belt === "black");
    return [...ninja1, ...ninja2];
  };
};

export const newblackbeltninja = blackBeltNinja(ninjasOne)(ninjasTwo);

console.log(newblackbeltninja);

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * example { name: 'Colt', belt: 'green', status: 'warrior' }
 */



const statusTypes = {
  white: "grasshopper",
  green: "warrior",
  black: "sensei",
};

const gamerStatusTypes = {
  white: "Noob",
  green: "Choob",
  black: "Legend",
};

// source code here



export const ninjaStatus = (ninjasOne: any[]) => {
  return function (ninjasTwo: any[]) {
    const ninjastatustypes = ninjasOne.map((ninjasOne) => {
      if (ninjasOne.belt === "white") {
        return Object.assign(ninjasOne, { status: statusTypes.white });
      } else if (ninjasOne.belt === "green") {
        return Object.assign(ninjasOne, { status: statusTypes.green });
      } else if (ninjasOne.belt === "black") {
        return Object.assign(ninjasOne, { status: statusTypes.black });
      }
    });

    const ninjagamerstatustypes = ninjasTwo.map((ninjasTwo) => {
      if (ninjasTwo.belt === "white") {
        return Object.assign(ninjasTwo, { status: gamerStatusTypes.white });
      } else if (ninjasTwo.belt === "green") {
        return Object.assign(ninjasTwo, { status: gamerStatusTypes.green });
      } else if (ninjasTwo.belt === "black") {
        return Object.assign(ninjasTwo, { status: gamerStatusTypes.black });
      }
    });

    return [...ninjastatustypes, ...ninjagamerstatustypes];
  };
};

export const newninjaStatus = ninjaStatus(ninjasOne)(ninjasTwo);

console.log(newninjaStatus);

