
const http = require("http");
// import http from "http";

const data = require("./data.js")
// import {data} from "data";

const port = 5000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(port);

// console.log(process);
// console.log(process.argv);







// //static api
// const fs = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//     fs.writeFileSync(input[3], input[4]);
// }
// else if (input[2] == "remove") {
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log("Error: invalid/unknown");
// }






// // filesystem
// const fs = require("fs");
// const fspath = require("path");

// const dirPath = fspath.join(__dirname, "files");
// // fs.writeFileSync("filename.txt", "information or content of file and ");
// // console.log(dirName);

// //making file inside the directory with the help of loop
// for(let i = 0; i<5;i++) {
//     fs.writeFileSync(`${dirPath}/loopfileko${i+1}.txt`, "information or content");
//     // fs.writeFileSync(`loopfile${i}.txt`, "information or content");
//     // fs.writeFileSync("loop file "+1+".txt", "info");
// }

// //reading the file
// fs.readdir(dirPath, (err, files) => {
//     // console.log(files);// files are in array
//     files.forEach((item) => {
//         console.log(item);
//     })
// })





// //CRUD = create, read, update, delete
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePathWithName =  `${dirPath}/filename.txt`;
// // console.log(dirPath);

// //create file inside the crud folder
// fs.writeFileSync(filePathWithName, "content of the file you write constent or say information about the file");

// //read file
// fs.readFile(filePathWithName,"utf8", (error, item) => {
//     console.log(item);
// })

// //update file
// fs.appendFile(filePathWithName, " and now you update or say add information about the file here", (error) => {
//     if(!error)
//     console.log("file updated successfully");
// })

// //rename file
// fs.rename(filePathWithName, `${dirPath}/renameCricket.txt`, (error) => {
//     if(!error)
//     console.log("file renamed successfully");
// })

// //delete file
// fs.unlinkSync(`${dirPath}/renameCricket.txt`);





console.log(1);

// setTimeout(function() {
//     console.log(2);
// },2000);
setTimeout(() => {
    console.log(2);
}, 2000)

console.log(3);


const a = 10;
let b = 5;
console.log(a+b);
setTimeout(()=> {
   b = 20;
    // console.log(a+b);
}, 0);

// const rohit = function() {
//     b = 20;
//     return b;
// }
// console.log(rohit());

console.log(a+b);


const x = 5;
let y = 10;
console.log(1);
let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000)
})
console.log(2);
waitingData.then((data)=> {
    y = data;
    console.log(a+b);
})
console.log(3);