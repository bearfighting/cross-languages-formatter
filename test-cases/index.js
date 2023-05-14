const fs = require('fs')
const testJson = require("./test-1.json")
const {jsonToJsConverter} = require("../build")

fs.writeFile(`./test-cases/test-json1.js`, jsonToJsConverter(testJson, 'testJson'), (err) => err ? console.error(err) : console.log("success!"));