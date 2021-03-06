'use strict';

let antlr4 = require('antlr4/index');
let Grammar = require("./Grammar.js");

const scanner = (text)=>{
    const chars = new antlr4.InputStream(text);
    const lexer = new Grammar.Grammar(chars);
    for(let token of lexer.getAllTokens()){
        console.log(token.toString())
    }
}

scanner("AAA-0000x");