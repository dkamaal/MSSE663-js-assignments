/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 */
var monkey = {
    fruit: "Banana",
    live: "Tree",
    age: "5",
    climb: function(){
        return "Jumps on " + this.live;
    },
    eat: function() {
        return "Eats " + this.fruit + " cake on " + this.age + "th Birthday";
    }
};
console.log(monkey.climb());
console.log(monkey.eat());
/*
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

let Monkey = class {
    constructor(age, live, fruit){
        this.age = age;
        this.live = live;
        this.fruit = fruit;
    }
    climb() {
        return "Jumps on " + this.live;
    }
    eat() {
        return "Eats " + this.fruit + " cake on " + this.age + "th Birthday.";
    }

};

let funnyMonkey = new Monkey(6, "Mango Tree", "Mango");
let happyMonkey = new Monkey(4, "Banana Tree", "Banana");

console.log("Funny Monkey " + funnyMonkey.climb() + " and " + funnyMonkey.eat());
console.log("Happy Monkey " + happyMonkey.climb() + " and " + happyMonkey.eat());

/*
References
Worrell, M. (n.d) MSSE 663 - JS-TS Basics I. Powerpoint Presentation. World Class. College of Computer & Information Sciences. Regis University
W3SCHOOLS (2021). Retrieved from https://www.w3schools.com/js/js_objects.asp
W3SCHOOLS (2021). Retrieved from https://www.w3schools.com/js/js_classes.asp
*/
