/* module exports
function add(a, b) {

  return a + b;
}

function sub(a, b) {
  return a - b;
}

 multiple exports
module.exports = {
  add,
  sub,
};
*/

// using exports object for ananymous functions
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
