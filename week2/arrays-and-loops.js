// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	var newStringArr = arr.map((value) => {
		return value.toString();
	});
	return newStringArr;
}
console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]


// #2 Make an array of strings of the names
function namesOnly(arr) {

	var fullName = [];
	for (let value of arr)
		fullName.push(value.name);
	return fullName;

}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	var result = arr.filter(actor => actor.name === 'Angelina Jolie' || actor.name === 'Bob Ziroll').map(actor => actor.age);
	return result;
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]

/*
References
Worrell, M. (n.d) MSSE 663 - JS-TS Basics I. Powerpoint Presentation. World Class. College of Computer & Information Sciences. Regis University
Mastering JS (2020) Retrieved from https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects
Stackoverflow (2019) Retrieved from https://stackoverflow.com/questions/55993277/make-an-array-of-strings-of-the-names
*/