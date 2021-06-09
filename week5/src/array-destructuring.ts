import { isConstructorDeclaration } from "typescript";

// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export var a = fruits[0];
export var b = fruits[1];

// Currently, I would get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'

// deconstruct here

[a, b] = [b, a];


// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';



// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here

//changed variable names to a1, b1 to avoid conflict with #1


export var [a1, b1, ...others] = food;


//expected result:
console.log(a1); // 'apple'
console.log(b1); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']


// #3 Array: Contruct a statement
// ['hello', 'taylor'];

// construct statement here
export const greeting = ['hello', 'taylor'];

export const symbols = [',', " ", '!'];

export var hellogreeting = [...greeting, ...symbols];

export var [u, v, w, x, y] = hellogreeting;


console.log([u, w, x, v, y].join("").toString());


// expected result: 'hello, taylor!'
