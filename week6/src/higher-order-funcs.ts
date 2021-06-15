/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */

//For #1 I am able to slice "thing1" and "thing2" to "thing" but unable to remove ":" from name.
//Getting output as [{ id: 1, name: 'thing' }, { id: 2, name: 'thing' }]

const things = ["thing1", "thing2"];

// create callback here

const sliceCallback = (t) => t.slice(0, -1);

const thingsCallback = (id, name) => ({ id, name });

// create map here

export const newThings = things
  .map(sliceCallback)
  .map((name, id) => thingsCallback(id + 1, name));

console.log(newThings);

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here

// newThings Array from #1 is [ { id: 1, name: 'thing' }, { id: 2, name: 'thing' } ];


export const newThingsCallback = arr => arr.filter((arr) => arr.id === 1);

export const newFilteredArray = newThingsCallback(newThings);

export const keyStringFilter = (arr1) => {
  return function pluck(key) {
    return arr1.map(function(item) { return item[key]; });
  };
  };
 
  export const newKeyStringFilter = keyStringFilter(newFilteredArray)("name");

  console.log(newKeyStringFilter);



