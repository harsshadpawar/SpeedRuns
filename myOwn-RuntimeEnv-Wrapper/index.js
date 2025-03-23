const fs = require("fs");
const xyz = require("./math");
fs.writeFile("./test1.txt", "Hello World", () => {});

//console.log(__filename, __dirname);
//console.log(math());
console.log(xyz.add(2, 3));
console.log(xyz.sub(2, 3));

function __require(id) {
  //... agar id . se shuru hua toh use ki dir mei code ko dalo
  //.. khud ke internal module me dhundo
}
