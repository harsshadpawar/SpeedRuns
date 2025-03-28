const { error } = require("console");
const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

//synchronous call  - Blocking operation
//fs.writeFileSync("./test.txt", "Hello world!");

//asynchronus call - Non Blocking operation
//fs.writeFile("./test.txt", "Hello world! Asynchronus", (err) => {});

//const result = fs.readFileSync("./contacts.txt", "utf-8");
//console.log(result);

/*
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
*/

fs.appendFileSync("./test.txt", "\n" + new Date().getDate().toLocaleString());
fs.copyFileSync("./test.txt", "./copyoftest.txt");

//fs.unlinkSync("./copyoftest.txt");

console.log(fs.statSync("./test.txt"));
