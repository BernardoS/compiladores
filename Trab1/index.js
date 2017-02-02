'use strict';

if(process.argv.length !== 3){
  process.exit();
}
const file = process.argv[2];

let antlr4 = require('antlr4/index');
let Lexer = require("./Grammar.js");
const fs = require("fs");

fs.readFile(file,function(err,data){
  if(err)throw err;
  const chars = new antlr4.InputStream(data.toString('utf8'));
  const lexer = new Lexer.Grammar(chars);
  while(lexer.nextToken().text !== "<EOF>"){
    console.log(lexer._token.text + ' -> ' + Lexer.Grammar.symbolicNames[lexer._token.type]);
  }
})

