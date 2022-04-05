const fs = require("fs");

// Mainline
console.log("Hello, ----------- mainline");
console.log("world. ----------- mainline");

// end mainline / pre timers phase 1
process.nextTick(() => {
  console.log("nexttick --------- before event loop");
});

// timers phase 1
setTimeout(() => {
  console.log("timeout - 0s ----- Timers 1");
}, 0);

// timers phase 1
setImmediate(() => {
  console.log("immediate -------- Timers 1");
});

// timers phase 1
setTimeout(() => {
  console.log("timeout - 0s ----- Timers 1");
}, 0);

// begin polling phase
fs.readFile(__filename, () => {
  // end poll phase
  process.nextTick(() => {
    console.log("nexttick i/o ----- After Polling");
  });
  // check phase
  setImmediate(() => {
    console.log("immediate i/o ---- Check");
  });
  // timers phase 2
  setTimeout(() => {
    console.log("timeout i/0 0s --- Timers 2");
  }, 0);
  // timers phase 3
  setTimeout(() => {
    console.log("timeout i/0 3s --- Timers 3");
  }, 3000);
});

// timers phase 4
setTimeout(() => {
  console.log("timeout - 5s ----- Timers 4");
}, 5000);

process.on("beforeExit", () => {
  console.log("process.on ------- beforeExit");
});

