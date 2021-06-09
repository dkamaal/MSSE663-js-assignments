// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here

export const {name: person} = object;
export const {title: job} = object;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here


export const {user, address, id} = nestedObject;


// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #4 Create a new object given the destructed values above

// reconstruct here

export const {user: newuser, address: newaddress, id: newid} = nestedObject;

export const newnestedObject = {
  newuser,
  newaddress,
  newid
};

console.log(newnestedObject);
/*Getting Output{
  newuser: 'elvis',
  newaddress: { city: 'denver', state: 'colorado' },
  newid: 1
}*/

console.log(newuser); // 'elvis'
console.log(newaddress); // { city: 'denver', state: 'colorado' }
console.log(newid); // 1

// #3 Object with key value pairs: construct a statement
// { greeting: 'hello', name: 'taylor' }



// construct statement here
export const greetingObject = {
  greeting: 'hello',
  name: 'taylor'
};

export var {greeting, name} = greetingObject;


console.log(greeting + ", " + name + '!');

// expected result: 'hello, taylor!'
