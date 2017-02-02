'use strict';
let antlr4 = require('antlr4/index');
let GrammarLexer = require("./Grammar/Grammar2Lexer").Grammar2Lexer;
let GrammarParser = require("./Grammar/Grammar2Parser").Grammar2Parser;
let visitor = require("./visitor");
const readline = require('readline');
process.stdin.setEncoding('utf8');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (chunk) => {
    if(chunk ==='exit'){
        rl.close();
        return;
    }
    var chars = new antlr4.InputStream(chunk);
    var lexer = new GrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new GrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.eval();
    if(!tree.parser._syntaxErrors){
        let v = new visitor();
        v.visit(tree); 
    }
});