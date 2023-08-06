// OS module import
const os = require("os");

// Username info
const info = os.userInfo().username;
const totalRam = os.totalmem() / Math.pow(1024, 3);
const freeRam = os.freemem() / Math.pow(1024, 3);

// Print info
console.log("Username: " + info);
console.log("Total RAM: " + totalRam);
console.log("Free RAM: " + freeRam);
