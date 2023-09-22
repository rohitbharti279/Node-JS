// const anyName = require("./app.js");
// console.log(anyName);
const app = require("./app");


//create a local server to receive data from the 
const http  = require("http");


// http.createServer(function).listen(port); //format for creating server
const port = 8000;
http.createServer((request, response) => {
    // response.write(`<h1>hello world!</h1><p> i am at port:- ${port} </p>`);
    response.write(`hello world! i am at port:- ${port}`);
    response.end();
}
).listen(port);

// const server = http.createServer((req, res) => {
//     res.write(`<h1>hello india vs australia!</h1> 
//     <p>now i am at port:- ${port}</p>`);
//     res.end();
// })
// server.listen(port);

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

console.log("package.json");