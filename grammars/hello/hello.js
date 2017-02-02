'use strict';

let antlr4 = require('antlr4/index');
let helloLexer = require("./grammars/hello/helloLexer");
let helloParser = require("./grammars/hello/helloParser");
let helloListener = require("./grammars/hello/helloListener");

var chars = new antlr4.InputStream("your text to parse here, hello");
var lexer = new helloLexer.helloLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
console.log(tokens)
var parser = new helloParser.helloParser(tokens);
parser.buildParseTrees = true;
helloListener = helloListener.helloListener;

class rPrinter extends helloListener{
   constructor(){
      super();
   }
   exitR(ctx){
      console.log("Oh, a r!");
   }
}

let printer = new rPrinter();
//antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, parser);

/*var tree = parser.StartRule();
var printer = new KeyPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
*/