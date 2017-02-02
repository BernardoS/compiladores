'use strict';

let antlr4 = require('antlr4/index');
//let Lexer = require("./example.js");

if(process.argv.length < 3){
    console.error('No string given');
    process.exit();
}
const string = process.argv[2];