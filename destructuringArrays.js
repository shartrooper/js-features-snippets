Basic Array Destructuring
We can extract multiple elements from an Array and assign them to variables using Array Destructuring in a single statement.

Array Destructuring shorthand syntax is quite handy as compare to our traditional way of assigning elements to the variables one by one.

const numbers = [1, 2, 3];

//const one   = numbers[0];         //Traditional Way
//const two   = numbers[1];
//const three = numbers[2];

const [one, two, three] = numbers;  //Array Destructuring

console.log(one);   //1
console.log(two);   //2
console.log(three); //3
We can also declare the variables before assigned:

let one, two, three;
const numbers = [1, 2, 3];

[one, two, three] = numbers;

console.log(one);   //1
console.log(two);   //2
console.log(three); //3
or we can declare them inline:

const [one, two, three] = [1, 2, 3];

console.log(one);   //1
console.log(two);   //2
console.log(three); //3
Default Values
We can give default values to the array elements that are undefined or doesn’t exist.

const numbers = [1, undefined, 3];

const [one = "I", two = "II", three = "III", four = "IV"] = numbers;

console.log(one);   //1
console.log(two);   //II  <- default value since 'undefined'
console.log(three); //3 
console.log(four);  //IV  <- default value since doesn't exist
We see that second element is undefined and fourth element doesn’t exist. Default value is assigned to the variable in both the cases.

Nested Array Destructuring
We can also perform nested Array Destructuring to get elements from nested array at deeper levels:

const numbers = [1, 2, [9, 10, [11, 12]]];

const [one, two, [nine, ten, [eleven, twelve]]] = numbers

console.log(one)    //1
console.log(nine)   //9
console.log(eleven) //11
An alternate for nested Array Destructuring is to use ES9 Array.flat() method, which flatten the nested array into a normal one:

const numbers = [1, 2, [9, 10, [11, 12]]];

const flattenNumbers = numbers.flat().flat();

const [one, two, nine, ten, eleven, twelve] = flattenNumbers;

console.log(one)    //1
console.log(nine)   //9
console.log(eleven) //11
Note that Array.flat() method flatten the nested array at one level deep. That is why we have called this method two times numbers.flat().flat() to flatten at two levels deep.

Also note that Array.flat() method is shorter version of Array.flatMap() method, both works same:

const numbers = [1, 2, [9, 10, [11, 12]]];

const flat = numbers.flat();
const flatMap = numbers.flatMap(x => x);

console.log(flat);        // [1, 2, 9, 10, [11, 12]]
console.log(flatMap);     // [1, 2, 9, 10, [11, 12]]

// flatten one more level deeper
const flatDeep = flat.flat();
const flatMapDeep = flatMap.flatMap(x => x);

console.log(flatDeep);    // [1, 2, 9, 10, 11, 12]
console.log(flatMapDeep); // [1, 2, 9, 10, 11, 12]
Skipping Elements using commas
We can also skip some of the elements by using comma separator. Let’s get the first and fourth element of the array:

let [one, , , four] = [1, 2, 3, 4];

console.log(one);   //1
console.log(four);  //4
Here two extra comma separators , , in Array Destructuring skip the second and third element. Similarly let’s skip the first and third element:

let [ , two , , four] = [1, 2, 3, 4];

console.log(two);   //2
console.log(four);  //4
Rest of the Elements
We can also use rest operator ... to get rest of the elements from an array like this:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, three, ...others] = numbers;
console.log(one);    //1
console.log(two);    //1
console.log(three);  //1
console.log(others); //[4, 5, 6, 7, 8, 9]
Note that rest operator can always be used at last, otherwise it throws error.

Rest and Spread Operators
Often we get confused with Rest and Spread operator as both use the same ... syntax. Rest and Spread operators can be used together in the Array Destructuring statement:

Rest Operator: Used at the left hand side of statement to get the rest of the elements from an array
Spread Operator: Used at the right hand side of statement to copy elements to an array
const tens      = [10, 20, 30];
const hundreds  = [100, 200];
const thousands = [1000];

      // Rest operator                     // Spread Operator
const [one, two, ten, twenty, ...others] = [1, 2, ...tens, ...hundreds, ...thousands];;

console.log(one);      //1
console.log(two);      //2
console.log(ten);      //10
console.log(twenty);   //20
console.log(others);   //[30, 100, 200, 1000]
Destructuring Return Statement
We can extract data from an array returned from a function using Array Destructuring in this way:

function getNumberArray() {
    return [1, 2, 3, 4, 5];
} 

var [one, ...others] = getNumberArray();

console.log(one);    //1
console.log(others); //[2, 3, 4, 5]
Destructuring Function Arguments
We can even pass an array into a function and then extract only the elements we want using Array Destructuring in this way:

const numbers = [1, 2, 3, 4, 5];

function getNumberArray( [ one, ...others ] ) {
  console.log(one);    //1
  console.log(others); //[2, 3, 4, 5]
}

getNumberArray(numbers);
Practical Use Cases
Inside for-of loop
We can use Array Destructuring inside for-of loop in this way:

const numbers = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
for (let [ a, b, c ] of numbers) {
  console.log(a, b, c);
}
// 1 2 3
// 4 5 6
// 7 8 9
Inside forEach function
We can iterate through Objects easily using Array Destructuring.

const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
We see that Object.entries returns an Array with key-value pairs which is extracted using [key, value] destructuring.

Inside Map iteration
We can also destruct the key-value pairs of a Map using [key, value] destructuring.

var map = new Map();
map.set("one", 1);
map.set("two", 2);

for (var [key, value] of map) {
  console.log(key + " is " + value);
}
// one is 1
// two is 2
Iterate over only the keys:

for (var [key] of map) {
  // ...
}
Or iterate over only the values:

for (var [,value] of map) {
  // ...
}
Swapping values
This is quite interesting to swap values using Array Destructuring:

let one = 1;
let two = 2;

[one, two] = [two, one];

console.log(one);  //2
console.log(two);  //1
Regular Expression
Regular expressions functions such as match return an array of matched items, which can be mapped to variables using Array Destructuring:

const [a, b, c, d] = 'one two three'.match(/\w+/g);

// a = 'one', b = 'two', c = 'three', d = undefined
