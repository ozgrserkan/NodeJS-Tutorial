const names = require("./3-names");
const sayHi = require("./4-utils"); // you can use destructuring in here {john} = require("")
const data = require("./5-alternative-flavor");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data);
