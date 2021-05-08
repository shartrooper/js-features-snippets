const promise1 = new Promise((resolve, reject) => {
  resolve('The Promise number 1 was resolved')
})
const promise2 = new Promise((resolve, reject) => {
  reject('The Promise number 2 was rejected')
})
const promise3 = new Promise((resolve, reject) => {
  resolve('The Promise number 3 was resolved')
})
// Using allSettled().
Promise.allSettled([promise1, promise2, promise3])
 .then(result => console.log(result))
 .catch(err => console.log(err))
//output:
[
  {status: "fulfilled", value: "The Promise number 1 was resolved"},
  {status: "rejected", reason: "The Promise number 2 was rejected"},
  {status: "fulfilled", value: "The Promise number 3 was resolved"}
]
