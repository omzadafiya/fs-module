// var exports = require('./exports')

// var a = 10;
// var b = 20;
// var c = 30;
// // console.log(exports);
// // console.log(exports.z());

// const arr = [2, 3, 4, 6, 6, 7, 8, 9, 4, 1, 5, 6, 7, 1 ,2, 3, 6];
// let result = arr.filter((item) => {
//     return item > 4

// })
// console.log(arr);


const http = require ('http');  // local survear create karva mate //

http.createServer((req,resp)=>{
    resp.write("<h1>Hello om zadafiya! How are you mr..</h1>");
    resp.end();
}).listen(3000);