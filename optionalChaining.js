const person = {
  name: "Mehdi",
  age: 19,
  fullName(){
   return "Mehdi Aoussiad";
  }
}
person.lastName(); //Error.
person.lastName?.(); //undefined(no error).
person.fullName?.(); //Mehdi Aoussiad
So optional chaining allows us to always get the normal output if the functions or properties exist. If they don’t exist we get undefined instead of an error.
