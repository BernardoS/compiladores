'use strict';
console.log("in");
let antlr4 = require('antlr4/index');
let Lexer = require("./Grammar/GrammarLexer.js").GrammarLexer;
let GrammarParser = require("./Grammar/GrammarParser").GrammarParser;
let Listener = require("./Listener");
let arvoreD3 = require("./arvore");

function readSingleFile(evt) {
    const f = evt.target.files[0];

    if (f) {
        const r = new FileReader();
        r.onload = function(e) {
            const contents = e.target.result;
            try {
                const chars = new antlr4.InputStream(contents);
                const lexer = new Lexer(chars);
                const tokens  = new antlr4.CommonTokenStream(lexer);
                const parser = new GrammarParser(tokens);
                parser._errHandler = new antlr4.error.BailErrorStrategy();
                parser.buildParseTrees = true;
                const tree = parser.algoritmo();
                arvoreD3(JSON.parse(toTree(tree)));
            } catch (e) {
                console.error(e);
            }
        }
        r.readAsText(f);
    } 
    else {
        console.error("Failed to load file");
    }
}

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

document.getElementById('fileinput').addEventListener('change', readSingleFile, false);