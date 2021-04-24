/*
The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), 
the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
*/

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
