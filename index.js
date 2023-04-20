// -------------------------------    IMPORTS     -------------------------------------------- // 
/*
const arrCosas = require("./Utils/Cosas")
const fnReducir = require("./Functions/reducir")
console.log(fnReducir(arrCosas))
*/

const fs = require("fs");
const read = fs.readFileSync("./package.json", "UTF-8");
console.log("🚀 ~ file: index.js:10 ~ read:", read)

// ------------------------------------------------------------------------------------------- //