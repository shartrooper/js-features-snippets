#Object.entries
Most developers use Object.keys method to iterate over an object. This method only returns an array of the object keys, not values. We can use Object.entries to get both key and value.
const person = {
  name: 'John',
  age: 20
};
Object.keys(person); // ['name', 'age']
Object.entries(data); // [['name', 'John'], ['age', 20]]
And to iterate over an object we can do the following:
Object.keys(person).forEach((key) => {
  console.log(`${key} is ${person[key]}`);
});
// using entries to get key and value both
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key} is ${value}`);
});
// expected output:
// name is John
// age is 20 
Both approaches above return the same result but Object.entries makes it easy to get key-value pair.

#String replaceAll Method
In JavaScript, to replace all occurrences of a string with another string, we need to use a Regular Expression like the following:
const str = 'Red-Green-Blue';
// replaces the first occurrence only
str.replace('-', ' '); // Red Green-Blue
// use RegEx to replace all occurrences
str.replace(/\-/g, ' '); // Red Green Blue
But in ES12, a new method is added to String.prototype named replaceAll which replaces all occurrences of a string with another string value.
str.replaceAll('-', ' '); // Red Green Blue

#Numeric Separator
You can use an underscore _ as a numeric separator, which makes it easy to count the number of zeros in a number.
// difficult to read
const billion = 1000000000;
// easier to read
const readableBillion = 1000_000_000;
console.log(readableBillion) // returns 1000000000
The underscore separator can also be used with BigInt numbers, like the following example:
const trillion = 1000_000_000_000n;
console.log(trillion); // 1000000000000
This actually makes the number more readable, doesn’t it?

#Logical Assignment Operator
Logical assignment operators are a combination of logical operators &&, ||, ?? and assignment operator =.
const a = 1;
const b = 2;
a &&= b;
console.log(a); // returns 2
// the above statement is equivalent to
a && (a = b);
// OR another approach
if (a) {
  a = b
}
We’re checking if the value of a is truthy, if it is then we’re updating the value of a. The same can be done with logical OR || operator.
const a = null;
const b = 3;
a ||= b;
console.log(a); // returns 3
// the above statement is equivalent to
a || (a = b);
And with the Nullish Coalescing operator ??.
const a = null;
const b = 3;
a ??= b;
console.log(a); // returns 3
// the above statement is equivalent to
if (a === null || a === undefined) {
  a = b;
}
The ?? operator only checks for null or undefined values.
Please note that logical assignment operators are added in ES12/ES2021
