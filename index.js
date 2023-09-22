// const anyName = require("./app.js");
// console.log(anyName);
// const app = require("./app.js");

import color from "colors";
// const color = require("colors");

// const chalk = require("chalk");
// import chalk from "./chalk";
// import Chalk from 'chalk';

//create a local server to receive data from the 
// const http  = require("http");
import http from "http";

// http.createServer(function).listen(port); //format for creating server
const port = 8000;
http.createServer((request, response) => {
    // response.write(`<h1>hello world!</h1><p> i am at port:- ${port} </p>`);
    response.write(`hello world! i am at port:- ${port}, this is my server on port ${port}`);
    response.end();
}
).listen(port);

// const server = http.createServer((req, res) => {
//     res.write(`<h1>hello india vs australia!</h1> 
//     <p>now i am at port:- ${port}</p>`);
//     res.end();
// })
// server.listen(port);

// console.log(app);
// console.log(app.car1);
// console.log(app.fn1());

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
// const fs = require("fs");
import fs from "fs";
fs.writeFileSync("filename.txt", "write the content in the file here");

// colors
console.log("greencolors".green);
console.log("rohit bharti".red);
console.log("rohit bharti".bgBlue); //background color 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

//chalk
// console.log(chalk.blue("hello"));

console.log("hello patna");
console.log(100+300);
