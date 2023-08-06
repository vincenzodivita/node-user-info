// OS module import
const os = require("os");

// Username info
const info = os.userInfo().username;

// Print info
console.log("Username: " + info);