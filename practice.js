
const fs  = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js')

// makes file with what you want it to have inside

-------------------------------------------------------
//basic features, const and let
const name = 'Max';
let age = 29;
const hasHobbies = true; //let can be changed, const cannot

function summarizeUser(userName, userAge, userHasHobby) { //local variables
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies)); //Passed in arguments

-------------------------------------------------------
//Arrow functions
const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

-------------------------------------------------------
//objects
const person = {
	name: 'Max',
	age: 29,
	greet() { //a new way to define functions
		console.log('Hi, I am ' + this.name);  //this refers to the local scope
	}
};

person.greet();

-------------------------------------------------------
//array and array methods
const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

const hobbies = ['Sports', 'Cooking'];
//for(let hobby of hobbies) { //going through an array
//	console.log(hobby);
//}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //no curly braces needed due to only 1 arg
console.log(hobbies); //map edits new array

-------------------------------------------------------
//pushing items into an array

const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

const hobbies = ['Sports', 'Cooking'];
//for(let hobby of hobbies) {
//	console.log(hobby);
//}
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //no curly braces needed due to only 1 arg
//console.log(hobbies); //map edits new array
hobbies.push('Programming'); //add to the array
console.log(hobbies);

-------------------------------------------------------
//spread and rest operators

const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

const copiedPerson = {...person}; //spread operator
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
//for(let hobby of hobbies) {
//	console.log(hobby);
//}
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //no curly braces needed due to only 1 arg
//console.log(hobbies); //map edits new array
//const copiedArray = hobbies.slice(); //copies an array
const copiedArray = [...hobbies]; //"..."=spread operator pulls out all the elements or properties of an array to add to a new array
console.log(copiedArray);


const toArray = (...args) => { //"..."=rest operator returns array
	return args;
};

console.log(toArray(1, 2, 3, 4));

//"SPREAD OPERATOR" to pull elements or properties out of arrays or objects

//"REST OPERATOR" to merge multiple arguments into an array and to use in the argument list of a function

-------------------------------------------------------
//destructuring

const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

//destructuring syntax

const printName = ({ name }) => {
	console.log(name);
}

printName(person);
//object destructuring, pulled out by name
const { name, age } = person;
console.log(name, age);

//array destructuring, pulled out by position, not name
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

-------------------------------------------------------
//Async Code & Promises

const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
	return promise;
};

//Asynchronous code, doesn't finish immediately, delay

setTimeout(() => {
	console.log('Timer is done!')
	fetchData()
		.then(text => {
		console.log(text);
		return fetchData();
	})
	.then(text2 => {
		console.log(text2);
	});
}, 2000);

//Synchronous code

console.log('Hello!');
console.log('Hi!');

-------------------------------------------------------
//Template literals, dynamically add data into strings
const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);

//better than the old way of concatenating strings
const name = "Max";
const age = 29;
console.log("My name is " + name + " and I am " + age + " years old.");
