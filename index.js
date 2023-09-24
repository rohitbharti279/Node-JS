
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

const fs = require("fs");

const input = process.argv;

if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4]);
}
else if (input[2] == "remove") {
    fs.unlinkSync(input[3]);
}
else {
    console.log("Error: Unknown");
}