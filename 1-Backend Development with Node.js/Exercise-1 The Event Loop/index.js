const fs = require("fs");

process.on("beforeExit", () => {
  console.log("Print Fifth");
});

setTimeout(() => {
  console.log("Print Third");
}, 0);

process.nextTick(() => console.log("Print Second"));

console.log("Print First");

fs.readFile(__filename, () => {
  setImmediate(() => console.log("Print Forth"));
});


// Results
// Print First
// Print Second
// Print Third
// Print Forth
// Print Fifth