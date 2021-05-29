// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here

export const numbersTest = [1, 2, 3, 4, 5];

export const originalNumbersTest = [...numbersTest];
console.log(originalNumbersTest);


// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
export const participants = winners.concat(runnerUps);
console.log(participants);

// refactor here

export const winnersTest = ['first'];
export const runnerUpsTest = ['second', 'third', 'fourth', 'fifth'];
export const participantsTest = [...winnersTest, ...runnerUpsTest];
console.log(participantsTest);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

console.log(originalPersons);

// refactor here

export const bobTest = {
  man: 'Bob'
};

export const kyleTest = {
  boy: 'Kyle'
};


export const originalPersonsTest = {
    ...bobTest,
    ...kyleTest
}

console.log(originalPersonsTest);

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});


console.log(originalUpdates);

// refactor here
export const dataTest = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const updateTest = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdatesTest =

  dataTest.map(modifyTest => modifyTest.id === updateTest.id ? {...modifyTest, task: updateTest.task} : modifyTest);

console.log(originalUpdatesTest);