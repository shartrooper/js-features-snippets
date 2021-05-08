Before the feature BigInt , we were not able to go above that number limit. But now we can go beyond that.
Here is an example:
//largest integer in JavaScript
let max = Number.MAX_SAFE_INTEGER;
console.log(max); // Output: 9007199254740991
//check the type of max.
console.log(typeof max); //number
//try to add and increase the integer(max)
++max; //output: 9007199254740991
++max; //output: 9007199254740991
++max; //output: 9007199254740991

//create BigInt
let bigOne = BigInt(max);
console.log(bigOne); //9007199254740991n
//check the type of bigOne.
console.log(typeof bigOne); //bigint (not number)
//try to increase
++bigOne; //9007199254740992n
++bigOne; //9007199254740993n
++bigOne; //9007199254740994n
As you can see, by using the constructor BigInt() , we can go beyond the maximum integer in JavaScript. So this feature gives you another type of number ( bigInt type ) to work with.
