Basic Object Destructuring
We can extract multiple properties from an Object and assign them to variables using Object Destructuring in a single statement.

Object Destructuring shorthand syntax is quite handy as compare to our traditional way of assigning properties to the variables one by one.

const person = { name: "John", company: "Google", job: "Developer" };

// let name = person.name;            //Traditional Way
// let company = person.company;
// let job = person.job;

const { name, company, job } = person;   //Object Destructuring
We can declare the variables inline as well:

const { name, company, job } = { name: "John", company: "Google", job: "Developer" };
Assignment without Declaration
We can declare the variables without assignment. Values can be assigned later using Object Destructuring like this:

const person = { name: "John", company: "Google", job: "Developer" };
let name, company, job;

({ name, company, job } = person);
Note that the parentheses ( ... ); around the assignment statement are required when using object literal destructuring assignment without a declaration.

Variable Name
By default, variable name is same as object property name which you are extracting. We can always change the variable name to something else like this:

const person = { name: "John", company: "Google", job: "Developer" };

const { name: foo, job: bar} = person;

console.log(foo);  //"John"
console.log(bar);  //"Developer"
Please note that now we can access the values using foo and bar variables only. If we try to access values using name and age variables, we would get undefined error.

Default Values
We can also provide a default value to the variable, just in case the extracted object property is undefined or doesn’t exist.

const person = { name: "John", company: "Google", job: "Developer", department: undefined };

const { name = "Bob", department = "NA", age = 21 } = person;

console.log(name);        //"John"
console.log(department);  //"NA"  <- default value since 'undefined'
console.log(age);         //21    <- default value since doesn't exist
We can also set default values with new variable name:

const person = { name: "John", company: "Google", job: "Developer", department: undefined };

const { name:foo = "Bob", department:bar = "NA", age:baz = 21 } = person;

console.log(foo);   //"John"
console.log(bar);   //"NA"
console.log(baz);   //21
Dynamic Property Name
We can also extract the properties with dynamic name (the property name is known at runtime) like this:

const prop = "name";
const person = { name: "John", company: "Google", job: "Developer", department: undefined };

const { [prop]:foo } = person;

console.log(foo);   //"John"
Nested Object Destructuring
We can also perform nested Object Destructuring to extract properties from nested object at deeper levels:

const person = {
    name: "John",
    friends : ["Adam", "Bob", "Charlie"],
    hobbies: ["Biking", "Cooking"],    
    location: {
        country: "USA", 
        city: "NY" 
    }, 
};
const { name, friends, hobbies : [firstHobby, secondHobby], location: { country, city } } = person;

console.log(name);         //"John"
console.log(friends);      //["Adam", "Bob", "Charlie"]
console.log(firstHobby);   //"Biking"
console.log(secondHobby);  //"Cooking"
console.log(country);      //"USA"
console.log(city);         //"NY"
Remaining Object Properties
The rest operator ... can be used to extract the remaining properties to a new variable which are not already extracted by the Object Destructuring.

const person = {name: "John", company: "Google", job: "Developer", friends : ["Adam", "Bob", "Charlie"]};

const {name, friends, ...others} = person;

console.log(name);     //"John"
console.log(friends);  //["Adam", "Bob", "Charlie"]
console.log(others);   //{company: "Google", job: "Developer"}
Rest and Spread Operators
Often we get confused with Rest and Spread operator as both use the same ... syntax. Rest and Spread operators can be used together in the Object Destructuring statement:

Rest Operator: Used at the left hand side of statement to get the remaining properties from an object
Spread Operator: Used at the right hand side of statement to copy properties to an object
const primaryDetails = {name: "John", company: "Google", job: "Developer"}
const otherDetails = {friends: ["Adam", "Bob", "Charlie"], hobbies: ["Biking", "Cooking"]};

      // Rest operator                      // Spread Operator
const {name, company, hobbies, ...others} = {...primaryDetails, ...otherDetails};

console.log(name);      //"John"
console.log(company);   //"Google"
console.log(hobbies);   //["Biking", "Cooking"]
console.log(others);    //{job: "Developer", friends: ["Adam", "Bob", "Charlie"]}
Destructuring Return Statement
We can extract data from an object returned from a function using Object Destructuring in this way:

function getPersonDetails() {
    return {name: "John", company: "Google", job: "Developer"};
} 

const {name, ...others} = getPersonDetails();

console.log(name);    //"John"
console.log(others);  //{company: "Google", job: "Developer"}
Destructuring Function Arguments
We can even pass an object into a function and then extract only the properties we want using Object Destructuring in this way:

const person = { name: "John", company: "Google", job: "Developer" };

function getPersonDetails({name, ...others }) {
  console.log(name);    //"John"
  console.log(others);  //{company: "Google", job: "Developer"}
}

getPersonDetails(person);
We can also set default values to the function arguments like this:

const person = { name: "John", company: "Google", job: "Developer" };

function getPersonDetails({name, department = "NA" }) {
  console.log(name);        //"John"
  console.log(department);  //"NA"
}

getPersonDetails(person);
Common Use Cases
When you write code, try to use Object Destructuring wherever possible. Some of the common use cases I came across are as follows:

Inside for-of loop
We can use Object Destructuring inside for-of loop in this way:

const users = [{ name: "John", company: "Google", job: "Developer" }, 
    { name: "Adam", company: "Microsoft", job: "Analyst" },
    { name: "Bob", company: "Yahoo", job: "Data Scientist" }];

for (let {name, company} of users) {
  console.log(name, company);
}
// John Google
// Adam Microsoft
// Bob Yahoo
Inside map function
We can use Object Destructuring inside map function in this way:

const users = [{ name: "John", company: "Google", job: "Developer" }, 
    { name: "Adam", company: "Microsoft", job: "Analyst" },
    { name: "Bob", company: "Yahoo", job: "Data Scientist" }];

const userNames = users.map(({ name }) => name);

console.log(userNames);
//["John", "Adam", "Bob"]
Named Export
We can choose what to export from the module using Object Destructuring, and import keyword. If you have worked with Angular, React or any other JavaScript framework. You might have come across Named Export like this:

import React, { Component } from 'React';
// Old way
import React from 'React';
class MyComponent extends React.Component{}

// New way
import React, { Component } from 'React';
class MyComponent extends Component{}
Same thing applies for any other package we import, we can choose only the functions we want and use them independently.

import { isEmail, isCreditCard } from 'validator';

console.log(isEmail('my@email.com')); // true
Console API
We can destructure functions from Console API object:

const { log, warn, error } = console;

log('Hello World!');            // equivalent to console.log('...');
warn('Watch out!');             // console.warn('...');
error('Something went wrong!'); // console.error('...');
Swapping Variables
This is interesting to see that we can swap variables using Object Destructuring

let a = "a";
let b = "b";
[b, a] = [a, b];

console.log(a);  // b
console.log(b);  // a
HTML Elements
We can destructure properties of HTML Elements like this:

const { value } = document.querySelector('input');
This way it’s much easier to get a value property out of an input element, just as getting disabled property out of a button element.

const { disabled } = document.querySelector('button');
HTML Events
Let’s handle HTML Events using destructuring function arguments like this:

<input type="text" onchange="handleChange(event)"/>
Now we are going to extract a target object from an event object and then extract a value property from the target:

// #1
function handleChange(event) {
  const { value } = event.target;
  console.log(value);
}

// # 2
function handleChange({ target }) {
  const { value } = target;
  console.log(value);
}

// # 3
function handleChange({ target: { value } }) {
  console.log(value);
}
Conditional Object Creation
We can also create an object at runtime based on conditions using Object Destructuring

const isEmployed = true;
const friends = ["Adam", "Bob", "Charlie"];
const hobbies = null;
const user = { 
  name: "John", 
  ...(isEmployed && {
    company: "Google", 
    job: "Developer"
  }),
  ...(friends && {friends}),
  ...(hobbies && {hobbies})
};

console.log(user);
// prints {name: "John", company: "Google", job: "Developer", friends: ["Adam", "Bob", "Charlie"]}
