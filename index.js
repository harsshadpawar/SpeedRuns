const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => console.log("set timeout"), 0);

setImmediate(() => console.log("set Immediate"));

process.env.UV_THREADPOOL_SIZE = 4;

fs.readFile("sample.txt", "utf-8", function (err, data) {
  setTimeout(() => console.log("set timeout inside FS"), 0);

  setImmediate(() => console.log("set Immediate FS1"));

  const start = Date.now();

  crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : Passowrd 1 Hashed`);
  });

  crypto.pbkdf2("password", "salt2", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : Passowrd 2 Hashed`);
  });

  crypto.pbkdf2("password", "salt3", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : Passowrd 3 Hashed`);
  });

  crypto.pbkdf2("password", "salt4", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : Passowrd 4 Hashed`);
  });

  crypto.pbkdf2("password", "salt5", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : Passowrd 5 Hashed`);
  });
});

console.log("Hello World");
