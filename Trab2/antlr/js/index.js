'use strict';
if(process.argv.length !== 3){
  process.exit();
}

const file = process.argv[2];
const fileName = file.replace(/\.?[^.]*$/,'');

let antlr4 = require('antlr4/index');
let Lexer = require("./Grammar/GrammarLexer.js").GrammarLexer;
let GrammarParser = require("./Grammar/GrammarParser").GrammarParser;
let Listener = require("./Listener");

const fs = require("fs");
const exec = require('child_process').exec;

fs.readFile(file,function(err,data){
  if(err)throw err;
  try {
    const chars = new antlr4.InputStream(data.toString('utf8'));
    const lexer = new Lexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new GrammarParser(tokens);
    //parser._errHandler = new antlr4.error.BailErrorStrategy();
    parser.buildParseTrees = true;
    const tree = parser.algoritmo();
    //console.log(toTree(tree));
    const wstream = fs.createWriteStream(`${fileName}.dot`);
    //antlr4.tree.ParseTreeWalker.DEFAULT.walk(new Listener(wstream), tree);
    wstream.end();
    exec(`dot -Tpdf ${fileName}.dot -o ${fileName}.pdf`);
  } catch (e) {
    process.exit();
  }
})

let toTree = (obj)=>{
  let array = [];
  if(obj.children){
    array.push(`"name":`+ `"${obj.parser.ruleNames[obj.ruleIndex]}"`);
    let internArray=[];
    for(var i=0; i<obj.children.length;i++){
      internArray.push(toTree(obj.children[i]));
    }
    array.push(`"children":[`+internArray+`]`);
  }else{
    array.push(`"name":`+ `"${obj.getText().replace(/\"/g,"\\\"")}"`);
  }
  return "{" + array.join(",") + "}";
}