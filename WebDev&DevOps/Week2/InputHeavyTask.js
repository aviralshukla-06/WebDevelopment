// import library that dose input/output tasks
const fs = require("fs")

function print(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

fs.readFile("a.txt", "UTF-8", print);
// console.log(contents);


fs.readFile("b.txt", "utf-8", print);
// console.log(contents2);
