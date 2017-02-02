'use strict';

let antlr4 = require('antlr4/index');
let Lexer = require("./example.js");

const scanner = (text)=>{
    let chars = new antlr4.InputStream(text);
    let lexer = new Lexer.example(chars);
    for(let token of lexer.getAllTokens()){
        console.log(token.toString())
    }
}

scanner("while do");
scanner("while while do");
scanner("whiledo done");
