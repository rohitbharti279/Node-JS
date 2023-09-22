// const anyName = require("./app.js");
// console.log(anyName);
const app = require("./app");


console.log(app);
console.log(app.car1);
console.log(app.fn1());

console.log("Starting");
const a =5;
const b= 10;
console.warn(a+b);

const arr = ["a", "b", "c", "d", "e",2,3,44,44,5,5,5,"5"];
const filtur = arr.filter((item) => {
   return item === 5;
})

console.log(filtur);

// create file
const fs = require("fs");
fs.writeFileSync("filename.txt", "write the content in the file here");

